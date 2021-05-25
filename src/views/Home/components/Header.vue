<template>
  <div class="fixed flex h-16 w-screen top-0 left-0 right-0 leading-16 shadow-sm">
    <div class="w-80">left</div>
    <div class="flex-1">center</div>
    <div class="w-80">right</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header'
})
</script>
