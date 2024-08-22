<template>
  <section v-if="toy" class="toy-details">
    <h1>{{ toy.name }}</h1>
    <img v-if="toy.imgUrl" :src="`${toy.imgUrl}`" alt="" />
    <h2>Price: {{ toy.price }}$</h2>
    <h3 v-if="toy.owner">Owner: {{ toy.owner }}</h3>
     <RouterLink to="/" ><button>Back</button></RouterLink>
  </section>
</template>

<script>
import toyService from '@/services/toy/toy.service';
export default {
  data() {
    return {
      toy: null,
    };
  },
  async created() {
    const { toyId } = this.$route.params;
    this.toy = await toyService.getById(toyId);
    console.log(this.toy)
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
.toy-details{
  margin: 80px;
}
</style>
