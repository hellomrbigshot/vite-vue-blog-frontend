<template>
  <div class="fixed flex h-16 w-screen top-0 left-0 right-0 leading-16 shadow-sm z-10 bg-white">
    <div class="w-1/5 flex flex-row justify-center items-center">
      <img :src="ImgLogo" alt="logo" width="150" height="40">
    </div>
    <div class="flex-1 flex items-center">
      <div class="relative">
        <input
          type="text"
          class="outline-none shadow w-40 pr-10 pt-3 pb-3 pl-6 leading-5 rounded-full bg-gray-100 transition-all duration-300 ease-in border-2 border-transparent focus:w-60"
          placeholder="搜索"
        >
        <i class="iconfont icon-fangdajing absolute top-1/2 right-1 -mt-4 mr-2 w-8 h-8 text-lg text-center text-gray-500 rounded-full cursor-pointer hover:bg-gray-400 hover:text-white"/>
      </div>
      <div class="ml-12 text-lg cursor-pointer">标签</div>
      <div class="ml-4 text-lg cursor-pointer">留言</div>
    </div>
    <div class="w-1/5">
      <template v-if="!user">
        <router-link to="/" class="text-sm hover:text-black hover:font-bold">登录</router-link>
        <router-link to="/" class="text-sm pl-4 pr-4 pt-2 pb-2 ml-7 border border-gray-400 rounded-full cursor-pointer hover:border-gray-600">注册</router-link>
        <router-link to="/" class="text-sm text-white bg-gray-500 pl-4 pr-4 pt-2 pb-2 ml-2 rounded-full cursor-pointer hover:bg-gray-600"><i class="iconfont icon-yumaobi"></i>写文章</router-link>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/assets/image/logo.png'
export default defineComponent({
  name: 'Header',
  setup () {
    const ImgLogo = Logo
    const user = ''
    return {
      ImgLogo,
      user
    }
  }
})
</script>
