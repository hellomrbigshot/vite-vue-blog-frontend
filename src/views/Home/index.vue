<template>
  <Header/>
  <div class="flex justify-center">
    <router-view class="mt-24 pt-8 min-h-screen max-w-4xl w-4/5"></router-view>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    Header: defineAsyncComponent(() => import('./components/Header.vue'))
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>
