<script setup>
import {ref} from 'vue'
import routes from './routes.js'

const collapsed = ref(false);

</script>

<template>
  <sidebar-menu v-model:collapsed="collapsed"  @update:collapsed="onToggleCollapse" :menu="routes.menu"></sidebar-menu>
  <div id="content-wrapper" :class="[{ 'collapsed': collapsed }]">
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
#content-wrapper {
  padding-left: 290px;
  transition: 0.3s ease;
}
#content-wrapper.collapsed {
  padding-left: 65px;
}
.content {
  padding: 50px;
}
</style>
