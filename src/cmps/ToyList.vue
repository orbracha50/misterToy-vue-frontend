<template>
  <section>
    <TransitionGroup class="toy-list" name="list" tag="ul">
      <li v-for="toy in toys" :key="toy._id">
        <toy-preview :toy="toy" />
        <div class="actions">
          <button @click="onRemoveToy(toy._id)">x</button>
          <!-- <RouterLink :to="`/toy/${toy._id}`" ><button>Details</button></RouterLink>
                    <RouterLink :to="`/toy/edit/${toy._id}`" ><button>Edit</button></RouterLink> -->
        </div>
      </li>
    </TransitionGroup>
  </section>
</template>

<script>
import ToyPreview from "@/cmps/ToyPreview.vue";
export default {
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    ToyPreview,
  },
  methods: {
    onRemoveToy(carId) {
      this.$emit("remove", carId);
    },
  },
};
</script>

<style>
.toy-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}
li {
  list-style: none;
}
</style>