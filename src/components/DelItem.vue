<script lang="ts" setup>
defineProps<{
  id: number
}>()
import { ref, inject, type Ref } from 'vue'
const items = inject('items') as Ref<Array<{ id: number; text: string }>>

const delItem = (id: number) => {
  const i = items.value.findIndex((item) => item.id === id)
  items.value.splice(i, 1)
  console.log('item deleted')
}
</script>

<template>
  <button @click="delItem(id)">Delete {{ id }}</button>
</template>
