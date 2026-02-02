<script lang="ts" setup>
import { inject, type Ref, ref } from 'vue'
import type { List } from '@/types'
import { Priority } from '@/types'
const props = defineProps<{
  id: number
}>()
const items = inject('items') as Ref<Array<List>>
const item = items.value.find((item) => item.id === props.id)
const priority = ref<Priority>(item?.priority || Priority.Normal)
const updatePriority = () => {
  if (item) {
    item.priority = priority.value
    console.log(`Priority of item ${item.id} updated to ${priority.value}`)
  }
}
</script>

<template>
  <select v-model="priority" @change="updatePriority()">
    <option value="low">Low</option>
    <option value="normal">Normal</option>
    <option value="high">High</option>
    <option value="urgent">Urgent</option>
  </select>
</template>
