<template>
  <Header/>
  <router-view class="pt-16 min-h-screen max-w-4xl "></router-view>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Header from './components/Header.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>
