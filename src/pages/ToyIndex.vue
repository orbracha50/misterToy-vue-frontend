<template>
  <section  class="home">
    <ToyFilter @filter="onFilter" />
    <RouterLink :to="`/toy/edit/`"><button>Add Toy</button></RouterLink>
    <ToyList v-if="toys" @remove="removeToy" :toys="toys" />
  </section>
</template>

<script>
import ToyList from "@/cmps/ToyList.vue";
import ToyFilter from "@/cmps/ToyFilter.vue";
import toyService from "../services/toy/toy.service.js";
export default {
  methods: {
    async removeToy(toyId) {
      try {
        console.log(toyId);
        await this.$store.dispatch({ type: "removeToy" ,toyId});

        /*  showSuccessMsg(`Removed toy ${toyId}`) */
      } catch (err) {
        /* showErrorMsg('Something went wrong...') */
      }
    },
    async onFilter(filterBy) {
      console.log(filterBy);
      this.$store.dispatch({ type: "loadToys" ,filterBy});
    },
  },
  async created() {
    console.log(this.$store)
    this.$store.dispatch({ type: "loadToys" });
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
  },
  components: {
    ToyList,
    ToyFilter,
  },
};
</script>

<style >
.home {
  margin-top: 50px;
}
</style>