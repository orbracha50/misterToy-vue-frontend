<template>
  <div class="container">
    <h1 v-if="!user"> Welcom Guest!</h1>
    <h1 v-else>Welcome back {{user.username}},</h1>
    <p>
      This is a simple home page created with HTML and JavaScript. You can add
      more sections and features as needed.
    </p>
  </div>
  <UserMsg/>
</template>

<script>
import UserMsg from '@/cmps/UserMsg.vue';
export default {
    computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  components: {
    UserMsg
  },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  margin-top: 5vh;
  width: 80%;
  padding: 1rem;
  h1{
    color: black;
  }
}
</style>