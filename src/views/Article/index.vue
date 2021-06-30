<template>
  <div>
    <ArticleItem
      v-for="article in articleList"
      :key="article._id"
      :article="article"
    />
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, onMounted, defineAsyncComponent } from 'vue'
import API from '@/api'
export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticleItem: defineAsyncComponent(() => import('./components/ArticleItem.vue'))
  },
  setup: () => {
    const articleList = ref([])
    const pageInfo = reactive({ total: 0, page: 1, pageSize: 20 })
    const getArticleList = async (page: number = 1) => {
      const { total, result: List } = await API.getArticleList(page, pageInfo.pageSize)
      articleList.value = List
      pageInfo.total = total
      pageInfo.page = page
    }
    onMounted(() => {
      getArticleList()
    })
    return {
      articleList,
      pageInfo,
      getArticleList
    }
  }
})
</script>
