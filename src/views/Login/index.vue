<template>
  <LoginComponent
    type="login"
    @submit="loginSubmit"
  />
</template>
<script lang="ts">
import Cookies from 'js-cookie'
import { defineComponent, defineAsyncComponent } from 'vue'
import { loginFormInterface } from '@/interfaces'
import { useMessage } from 'naive-ui'
import API from '@/api'

export default defineComponent({
  name: 'Login',
  components: {
    LoginComponent: defineAsyncComponent(() => import('./components/LoginComponent.vue'))
  },
  setup () {
    const message = useMessage()
    const loginSubmit = async (formData: loginFormInterface) => {
      try {
        const { token, refresh_token: refreshToken } = await API.login(formData)
        Cookies.set('token', token)
        Cookies.set('refreshToken', refreshToken)
        Cookies.set('user', formData.username)
      } catch (e) {
        message.error('账户名或密码错误')
      }
    }
    return {
      loginSubmit
    }
  },
})
</script>
