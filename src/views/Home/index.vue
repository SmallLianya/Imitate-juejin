<!-- 这里写首页 -->
<template>
  <div>
    <button @click="to(12312412)">12312412</button>
    <button @click="to(65466456)">65466456</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const id = ref(1123)
// 跳转时将id传入
function to(id) {
  router.push({path: `/detail/${id}`})
}
</script>

<style scoped lang="scss">

</style>
