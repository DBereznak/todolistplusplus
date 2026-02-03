<script lang="ts" setup>
import { inject, type Ref, computed, ref } from 'vue'
import type { List } from '@/types'
const edit = ref(false)
const props = defineProps<{
  id: number
}>()
const items = inject('items') as Ref<Array<List>>
const item = items.value.find((item) => item.id === props.id)
const description = computed({
  get: () => {
    return item?.description || ''
  },
  set: (value) => {
    if (item) {
      item.description = value
    }
  },
})
const toggleEditDescription = () => {
  edit.value = !edit.value
  console.log(`Edit description mode for item ${props.id}: ${edit.value}`)
}
</script>

<template>
  <button v-show="description" @click="toggleEditDescription()">Edit Description</button>
  <textarea v-if="edit" v-model="description"></textarea>
  <p v-else>{{ description }}</p>
</template>

<style scoped></style>
