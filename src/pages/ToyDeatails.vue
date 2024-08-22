<template>
  <h2>Details</h2>
</template>

<script>
export default {
  data() {
    return {
      toy: null,
    };
  },
  async created() {
    const { toyId } = this.$route.params;
    console.log(toyId)
    this.toy = await toyService.get(toyId);
  },
};
</script>

<style>
</style>