<script lang="ts" setup>
import { inject, type Ref, computed, ref } from 'vue'
import { Pen, PenOff } from 'lucide-vue-next'
import type { List } from '@/types'
const edit = ref(false)
const props = defineProps<{
  id: number
}>()
const items = inject('items') as Ref<Array<List>>
const item = items.value.find((item) => item.id === props.id)
const notes = computed({
  get: () => {
    return item?.notes || ''
  },
  set: (value) => {
    if (item) {
      item.notes = value
    }
  },
})
const toggleEditNotes = () => {
  edit.value = !edit.value
}
</script>

<template>
  <div>
    <textarea v-if="edit" v-model="notes"></textarea>
    <p v-else>{{ notes }}</p>
    <br />
    <button v-if="notes === ''" @click="toggleEditNotes()">Add Notes</button>
    <button v-else @click="toggleEditNotes()">
      <penOff v-if="edit" color="#fff" />
      <pen v-else color="#fff" />
    </button>
  </div>
</template>

<style scoped></style>
