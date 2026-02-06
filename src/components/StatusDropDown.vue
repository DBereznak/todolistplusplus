<script lang="ts" setup>
import { inject, type Ref, ref } from 'vue'
import type { List } from '@/types'
import { Status } from '@/types'
const props = defineProps<{
  id: number
}>()
const items = inject('items') as Ref<Array<List>>
const item = items.value.find((item) => item.id === props.id)
const status = ref<Status>(item?.status || Status.Pending)
const updateStatus = () => {
  if (item) {
    item.status = status.value
    console.log(`Status of item ${item.id} updated to ${status.value}`)
  }
}
</script>

<template>
  <div>
    <label for="status">Status:</label>
    <select name="status" v-model="status" @change="updateStatus()">
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </div>
</template>
