<template>
  <div class="mb-24 w-full">
    <h1 class="text-3xl text-left font-bold text-gray-600">{{ article.title }}</h1>
    <div class="flex mt-2 text-xs">
      <div class="px-1 border-r border-gray-300 text-gray-400">更新于 {{ updateTime }}</div>
      <div class="px-1 border-r text-gray-400">作者
        <span class="text-gray-700">{{ article.create_user }}</span>
      </div>
      <div class="px-1 text-gray-400">标签
        <template v-for="(tag, i) in article.tags" :key="tag">
          <router-link
            class="text-gray-700"
            :to="{ name: 'Home' }"
          >{{ tag }}</router-link>
          <template v-if="i < article.tags.length - 1">, </template>
        </template>
      </div>
    </div>
    <div v-html="content" class="w-full mt-4"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'
import formatTime from '@/utils/formatTime'
import marked from '@/utils/marked'
export default defineComponent({
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const { article } = toRefs(props)
    const updateTime = computed(() => formatTime(article.value.update_time))
    const content = computed(() => marked(article.value.content))
    return {
      updateTime,
      content
    }
  }
})
</script>
