<script setup lang="ts">
const { data: page } = await useAsyncData(() => {
    return queryCollection(`pages`).path(`/pages`+useRoute().path).first()
})
const { data:bands  } = await useAsyncData(() => {
  return queryCollection(`bands`).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div>
    <pre>
      {{bands}}
    </pre>
    <ContentRenderer class="prose" v-if="page" :value="page" />
    <div v-else>Not found</div>
  </div>

</template>