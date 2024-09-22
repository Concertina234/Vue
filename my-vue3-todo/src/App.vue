<script setup lang="ts">
import { useRouter } from 'vue-router';

import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';

const router = useRouter();
const goBlog = () => {
  router.push('/blog');
};
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <div>
      <router-link to="/">Todo</router-link>
      | <router-link to="/about">About</router-link>
      | <span @click="goBlog">Blog</span>
      | <router-link to="/blog/1">Blog1</router-link>
      | <router-link to="/blog/2">Blog2</router-link>
    </div>
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
}

.main {
  flex: 1;
  padding: 16px;
}
</style>
