<script lang="ts" setup>
import DelItem from './DelItem.vue'
import StatusDropDown from './StatusDropDown.vue'
defineProps<{
  id: number
}>()
</script>

<template>
  <li>
    <slot></slot>
    <del-item :id="id" />
    <status-drop-down :id="id" />
  </li>
</template>
