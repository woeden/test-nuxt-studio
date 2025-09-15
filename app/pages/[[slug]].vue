<script setup lang="ts">
const { data: page } = await useAsyncData(() => {

    return queryCollection(`pages`).path(`/pages`+useRoute().path).first()
})
// const { data: nav } = await useAsyncData(() => queryCollectionNavigation('page'))

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div>
    <ContentRenderer class="prose" v-if="page" :value="page" />
    <div v-else>Not found</div>
  </div>

</template>