<template>
  <section v-if="user" class="home">
    <ToyFilter @filter="onFilter" />
    <RouterLink :to="`/toy/edit/`"
      ><button v-if="user.isAdmin" class="add-btn">Add Toy</button></RouterLink
    >
    <ToyList v-if="toys" @remove="removeToy" :toys="toys" :user="user"/>
    
  </section>
  <UserMsg/>
</template>

<script>
import ToyList from "@/cmps/ToyList.vue";
import ToyFilter from "@/cmps/ToyFilter.vue";
import toyService from "../services/toy/toy.service.js";
import UserMsg from '@/cmps/UserMsg.vue';
export default {
  data(){
    return{
      user:null
    }
  },
  methods: {
    async removeToy(toyId) {
      try {
        console.log(toyId);
        await this.$store.dispatch({ type: "removeToy", toyId });

        /*  showSuccessMsg(`Removed toy ${toyId}`) */
      } catch (err) {
        /* showErrorMsg('Something went wrong...') */
      }
    },
    async onFilter(filterBy) {
      console.log(filterBy);
      this.$store.dispatch({ type: "loadToys", filterBy });
    },
  },
  async created() {
    console.log(this.$store);
    this.$store.dispatch({ type: "loadToys" });
    this.user =  this.$store.getters.user
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  components: {
    ToyList,
    ToyFilter,
    UserMsg
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
a {
  align-self: flex-end;
  position: absolute;
  top: 18vh;
  button {
    height: 40px;
    border-radius: 20px;
    background-color: orange;
    transition: 0.5s;
  }
}
button:hover {
  background-color: orangered;
}
</style>