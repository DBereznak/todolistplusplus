<script lang="ts" setup>
import { ref, inject, type Ref, computed } from 'vue'
import { Pen, PenOff } from 'lucide-vue-next'
const name = inject('name') as Ref<string>
const listName = computed({
  get: () => {
    return name.value || ''
  },
  set: (value) => {
    name.value = value
  },
})

const editName = ref(false)

const saveListName = () => {
  localStorage.setItem('list-name', JSON.stringify(listName.value || ''))
  editName.value = !editName.value
  console.log(editName.value)
}
</script>

<template>
  <div class="list-name">
    <h1 v-if="!editName">{{ listName ? listName : 'Enter a Name for your list' }}</h1>
    <input
      type="text"
      :placeholder="listName ? listName : 'Enter a Name for your list'"
      v-model="listName"
      v-if="editName"
    />
    <button @click="saveListName()">
      <PenOff v-if="editName" color="#fff" />
      <Pen v-else color="#fff" />
    </button>
  </div>
</template>

<style scoped>
.list-name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
