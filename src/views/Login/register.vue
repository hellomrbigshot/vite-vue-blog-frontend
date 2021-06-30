<template>
  <LoginComponent
    type="register"
  />
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'Register',
  components: {
    LoginComponent: defineAsyncComponent(() => import('./components/LoginComponent.vue'))
  },
  setup () {
    
  },
})
</script>
