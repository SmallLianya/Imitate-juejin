<!-- 这里写详情页 -->
<template>
  <div>
    detail{{id}}
  </div>
  <button @click="router.go(-1)">返回</button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const id = ref(0)
// 拿到路由跳转传入的id
onMounted(() => {
    id.value = route.params.orderId
})
</script>

<style scoped lang="scss">

</style>
