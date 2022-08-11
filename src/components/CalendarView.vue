<script setup>
import { ref } from 'vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
<div style="height:100%; width: 100%;">
    <vue-cal class="vuecal--blue-theme" is-expanded :events="events" selected-date="2018-11-19"  hide-weekends="hide-weekends" :dbl-click-to-navigate="false"/>
    </div>
</template>

<style >

</style>
