<template>
  <section class="home">
    <ToyList v-if="toys" @remove="removeToy" :toys="toys" />
  </section>
</template>

<script>
import ToyList from "@/cmps/ToyList.vue";
import toyService from "../services/toy/toy.service.js";
export default {
  data() {
    return {
      toys: null,
    };
  },
  methods: {
    async removeToy(toyId) {
      try {
        console.log(toyId)
        await toyService.remove(toyId);
        const idx = this.toys.findIndex((toy) => toy._id === toyId);
        this.toys.splice(idx, 1);

        /*  showSuccessMsg(`Removed toy ${toyId}`) */
      } catch (err) {
        /* showErrorMsg('Something went wrong...') */
      }
    },
    async onFilter(filterBy) {
      this.toys = await toyService.query(filterBy);
    },
  },
  async created() {
    this.toys = await toyService.queryToys();
    console.log(this.toys);
  },
  components: {
    ToyList,
  },
};
</script>

<style >
.home {
  margin-top: 50px;
}
</style>