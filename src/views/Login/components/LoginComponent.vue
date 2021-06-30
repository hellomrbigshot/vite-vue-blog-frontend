<template>
  <div class="w-full h-full bg-white relative flex justify-center items-center">
    <router-link to="/" class="absolute left-12 top-14">
      <img :src="ImgLogo" alt="Logo" class="w-50">
    </router-link>
    <div class="w-100 h-125 shadow-lg rounded bg-gray-50 p-12 pb-8">
      <div class="flex justify-center text-gray-500">
        <router-link
          to="/login"
          class="text-lg px-2.5 py-1.5 font-medium hover:border-b-2 hover:border-gray-500"
          :class="{ 'text-green-500 border-b-2 border-green-500 hover:border-green-500': type === 'login' }"
        >登录</router-link>
        <span class="text-xl px-2.5 py-1.5 font-bold">.</span>
        <router-link
          to="/register"
          class="text-lg px-2.5 py-1.5 font-medium hover:border-b-2 hover:border-gray-500"
          :class="{ 'text-green-500 border-b-2 border-green-500 hover:border-green-500': type === 'register' }"
        >注册</router-link>
      </div>
      <NForm
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-placement="left"
        size="large"
        class="mt-10"
      >
        <NFormItem path="username">
          <NInput
            v-model:value="loginForm.username"
            placeholder="请输入账号"
            @keydown.enter.prevent
          />
        </NFormItem>
         <NFormItem path="password">
          <NInput
            v-model:value="loginForm.password"
            placeholder="请输入密码"
            @input="handlePasswordChange"
          />
        </NFormItem>
        <NFormItem v-show="type === 'register'" ref="rPasswordFormItemRef" path="repassword">
          <NInput
            v-model:value="loginForm.repassword"
            :disabled="!loginForm.password"
            placeholder="请确认密码"
          />
        </NFormItem>
        <NFormItem>
          <NButton
            :type="buttonType"
            circle
            size="large"
            class="w-full"
            @click="handleSubmit"
          >{{ textInfo }}</NButton>
        </NFormItem>
      </NForm>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, Ref, computed } from 'vue'
import Logo from '@/assets/image/logo.png'
import { NForm, NFormItem, NInput, FormItemInst, FormInst, NButton } from 'naive-ui'
import cloneDeep from 'lodash/cloneDeep'

export default defineComponent({
  name: 'LoginComponent',
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton
  },
  props: {
    type: {
      type: String,
      default: 'login'
    }
  },
  setup (props, { attrs, slots, emit }) {
    const { type } = toRefs(props)
    const loginFormRef = ref<FormInst | null>(null)
    const rPasswordFormItemRef = ref<FormItemInst | null>(null)
    const ImgLogo = Logo
    const textInfo = computed(() => type.value === 'login' && '登录' || '注册')
    const buttonType = computed(() => type.value === 'login' && 'info' || 'primary')
    const loginForm = ref({
      username: '',
      password: '',
      repassword: ''
    })
    const validatePasswordSame = (_: any, value: string) => {
      return type.value === 'login' || value === loginForm.value.password
    }
    const loginFormRules = {
      username: {
        required: true,
        message: '请输入账号',
        trigger: ['input', 'blur']
      },
      password: {
        required: true,
        message: '请输入密码',
        trigger: ['input', 'blur']
      },
      repassword: [
        {
          required: type.value === 'register',
          message: '请再次输入密码',
          trigger: ['input', 'blur']
        },
        {
          validator: validatePasswordSame,
          message: '两次密码输入不一致',
          trigger: ['blur', 'password-input']
        }
      ]
    }
    const handlePasswordChange = () => {
      if (loginForm.value.repassword) {
        (<FormItemInst>rPasswordFormItemRef.value).validate({ trigger: 'password-input' })
      }
    }
    const handleSubmit = () => {
      (<FormInst>loginFormRef.value).validate((errors) => {
        if (!errors) {
          const formData: {
            username: string,
            password: string,
            repassword?: string
          } = cloneDeep(loginForm.value)
          if (type.value === 'login') {
            delete formData.repassword
          }
          emit('submit', formData)
        } else {
          console.log(errors)
        }
      })
    }
    return {
      loginFormRef,
      rPasswordFormItemRef,
      textInfo,
      buttonType,
      ImgLogo,
      loginForm,
      loginFormRules,
      handlePasswordChange,
      handleSubmit
    }
  },
})
</script>
