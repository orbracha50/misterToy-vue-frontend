<template>
    <header>
        <h1 class="logo">Or's Toys</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
</style>