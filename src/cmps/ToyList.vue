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
            ><button v-if="!user.isAdmin">Edit</button></RouterLink
          >
          <button @click="addToCart(toy)" v-if="user.isAdmin">
            Add to cart
          </button>
        </div>
      </li>
    </TransitionGroup>
  </section>
</template>

<script>
import ToyPreview from "@/cmps/ToyPreview.vue";
import { showErrorMsg, showSuccessMsg } from "@/services/eventBus.service";
import UserMsg from "@/cmps/UserMsg.vue";
export default {
  props: {
    toys: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onRemoveToy(toyId) {
      console.log(toyId);
      this.$emit("remove", toyId);
    },
    addToCart(toy) {
      showSuccessMsg(toy.name + " add to cart");
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  width: 100vw;
  padding: 10px;
  list-style: none;
  .actions {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-self: end;
    justify-content: space-between;
    width: 100%;
    margin-top: 3px;
    button {
      background-color: white;
      height: 25px;
      /* border-radius: 10px; */
      transition: 0.5s;
    }
    button:hover {
      background-color: orangered;
    }
  }
  .btn-remove {
    display: flex;
    align-items: center;
    justify-items: center;
    height: max-content;
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    color: black;
    cursor: pointer;
    transition: color 0.3s ease;
    border-radius: 50%;
  }
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    background-color: orange;
    height: 320px;
    width: 100%;
    border-radius: 10px;
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