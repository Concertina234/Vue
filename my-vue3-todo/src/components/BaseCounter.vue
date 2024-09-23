<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();

const addState = () => {
  counter.count ++;
};

const addMethod = () => {
  counter.increment();
}
</script>

<template>
  <button type="button" @click="addState">直接加算</button>
  <button type="button" @click="addMethod">関数で加算</button>
  <div>
    Current Count: {{ counter.count }}
  </div>
</template>