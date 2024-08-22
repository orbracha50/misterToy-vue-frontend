<template>
  <section class="toy-list">
    <TransitionGroup class="list" name="list" tag="ul">
      <li v-for="toy in toys" :key="toy._id">
        <ToyPreview :toy="toy" />
        <div class="actions">
          <button class="btn-remove" @click="onRemoveToy(toy._id)">x</button>
          <RouterLink :to="`/toy/${toy._id}`"
            ><button>Details</button></RouterLink
          >
          <RouterLink :to="`/toy/edit/${toy._id}`"
            ><button>Edit</button></RouterLink
          >
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
  methods: {
    onRemoveToy(toyId) {
      console.log(toyId);
      this.$emit("remove", toyId);
    },
  },
  components: {
    ToyPreview,
  },
};
</script>

<style lang="scss">
.toy-list ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 10px;
  width: 100%;
  padding: 10px;
  list-style: none;
  .btn-remove {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    color: #888;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    background-color: orange;
    height: 320px;
    width: 220px;
    border-radius: 10px;
  }

  .actions {
    display: flex;
    gap: 6px;
    justify-self: end;
  }
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>