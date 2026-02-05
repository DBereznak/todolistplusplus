<script lang="ts" setup>
import DelItem from './DelItem.vue'
import StatusDropDown from './StatusDropDown.vue'
import PriorityDropDown from './PriorityDropDown.vue'
import EditDescription from './EditDescription.vue'
defineProps<{
  id: number
}>()
</script>

<template>
  <li>
    <slot></slot>
    <edit-description :id="id" />
    <br />
    <del-item :id="id" />
    <status-drop-down :id="id" />
    <priority-drop-down :id="id" />
  </li>
</template>

<style scoped>
li {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
}
</style>
