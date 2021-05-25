<template>
  <div>PageList</div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import API from '../../api'
export default defineComponent({
  name: 'Page',
  setup: () => {
    let pageList: any[] = []
    const getPageList = async () => {
      const { total, result: List } = await API.getPageList()
      pageList = List
      console.log(pageList)
    }
    onMounted(() => {
      getPageList()
    })
    return {
      pageList
    }
  }
})
</script>
