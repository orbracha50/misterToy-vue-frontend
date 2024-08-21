<template>
  <section class="home">
    <ToyList v-if="toys" @remove="removeToy" :toys="toys"  />
  </section>
</template>

<script>
import ToyList from '@/cmps/ToyList.vue';
import toyService from "../services/toy/toy.service.js";
export default {
    components:{
        ToyList,
    },
  data() {
    return {
      toys: null,
    };
  },
  async created() {
    this.toys = await toyService.queryToys();
    console.log(this.toys);
  },
};
</script>

<style >
.home{
    margin-top:50px;
}
</style>