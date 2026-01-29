<script lang="ts" setup>
import { ref } from 'vue'
import DelItem from './DelItem.vue'
defineProps<{
  id: number
}>()
</script>

<template>
  <li>
    <slot></slot>
    <del-item :id="id" />
  </li>
</template>
