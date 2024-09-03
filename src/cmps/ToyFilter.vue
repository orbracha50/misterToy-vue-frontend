<template>
  <section class="toy-filter">
    <h1>Fillter&sort</h1>
    <form action="">
      <input
        @input="onFilterBy"
        v-model="filterBy.txt"
        type="text"
        placeholder="by name"
      />
      <input
        @input="onFilterBy"
        v-model.number="filterBy.price"
        type="number"
        placeholder="by price"
      />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { txt: "", price: null },
    };
  },
  methods: {
    onFilterBy() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss">
.toy-filter {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  width: max-content;
  height: max-content;
  align-items: center;
  h1 {
    font-size: 36px;
    color: black;
  }
}
form {
  display: flex;
  gap: 20px;
}
</style>


