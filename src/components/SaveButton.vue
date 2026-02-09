<script lang="ts" setup>
import { inject, type Ref } from 'vue'
import type { List } from '@/types'
import { Status } from '@/types'
const items = inject('items') as Ref<Array<List>>

const saveItems = () => {
  for (const item of items.value) {
    if (item.status === Status.Completed) {
      item.completedOn = new Date().toISOString()
      const spliced = items.value.splice(items.value.indexOf(item), 1)[0]
      if (spliced) {
        items.value.push(spliced)
      }
    }
    localStorage.setItem('todo-items', JSON.stringify(items.value))
  }
}
</script>

<template>
  <button @click="saveItems()">Save</button>
</template>

<style scoped></style>
