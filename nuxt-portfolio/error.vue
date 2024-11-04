<template>
  <div class="error container">
    <h1>404: Not Found</h1>
    <p>ページが見つかりません。</p>
  </div>
</template>

<script setup>
  useHead({
    title: "エラーページ",
    meta: [
      {name: "description", content: "エラーページです"}
    ],
  })
</script>