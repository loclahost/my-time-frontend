<script setup>
import { ref, computed } from 'vue'

const query = ref('')
const users = [{ name: "Test testsson", role: "admin", lastLogin: new Date(), created: new Date() }, { name: "User usersson", role: "user", created: new Date() }]

const filteredUsers = computed(() => users.filter(user => user.name.toLowerCase().match(new RegExp(query.value.toLowerCase()))))

function formatDateTime(someDate) {
  if (someDate instanceof Date) {
    return someDate.toLocaleString()
  }
  return 'N/A'
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success me-2" type="button"><i class="bi bi-person-plus-fill"></i></button>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="query"
        />
      </form>
    </div>
  </nav>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
      v-for="user in filteredUsers"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">{{ user.name }}</div>
        Last login: {{ formatDateTime(user.lastLogin) }}
      </div>
      <span
        class="badge bg-primary rounded-pill"
        :class="[{ 'bg-danger': user.role == 'admin' }]"
      >{{ user.role }}</span>
    </li>
  </ul>
</template>

<style scoped>
</style>
