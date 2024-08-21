<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

<RouterView />
</template>

<style  scoped>
header {
  position: absolute;
  top: 0;
 left: 5px;
 right: 5px;
  width: 98vw;
  padding: 10px 5px;
  margin-right: 5px;
  margin-top: 5px;
  background-color: orange;
}
body{
  background-color: lightgray;
}
</style>
