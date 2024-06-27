<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import './complements/styles.css'

import { RouterView } from 'vue-router'

import NavBar from './components/navbar.vue'
</script>

<template>
  <NavBar />

  <RouterView />
</template>