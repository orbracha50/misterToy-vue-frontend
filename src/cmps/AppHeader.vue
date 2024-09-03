<template>
  <header>
    <h1 class="logo">Or's Toys</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/toy">Toy</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink v-if="!user" to="/login">Login</RouterLink>
      <div v-else>
        <img :src="`${user.imgUrl}`" alt="" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  width: 98vw;
  padding: 10px 10px;
  margin-right: 5px;
  margin-top: 5px;
  background-color: orange;
  nav {
    display: flex;
    gap: 10px;
    font-size: 20px;
  }
  .logo {
    margin-left: 10px;
    color: black;
    font-weight: 500;
  }
}
div {
  display: flex;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
}
</style>