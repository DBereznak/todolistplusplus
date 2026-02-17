<script lang="ts" setup>
import { inject, type Ref, ref } from 'vue'
import AppDialog from './AppDialog.vue'
import type { List } from '@/types'
import { Status } from '@/types'
const items = inject('items') as Ref<Array<List>>
const showDialog = ref(false)
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
  showDialog.value = true
}
</script>

<template>
  <button @click="saveItems()">Save</button>
  <AppDialog
    v-if="showDialog"
    @close="showDialog = false"
    message="Your list was saved to your browsers local storage."
  />
</template>

<style scoped></style>
