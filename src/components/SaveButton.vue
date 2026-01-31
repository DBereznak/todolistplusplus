<script lang="ts" setup>
import { inject, type Ref } from 'vue'
const items = inject('items') as Ref<Array<{ id: number; text: string }>>

const saveItems = () => {
  localStorage.setItem('todo-items', JSON.stringify(items.value))
}
</script>

<template>
  <button @click="saveItems()">Save</button>
</template>

<style scoped></style>
