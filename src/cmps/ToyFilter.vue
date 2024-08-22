<template>
  <section class="toy-filter">
        <input @input="onFilterBy" v-model="filterBy.txt" type="text" placeholder="by name">
        <input @input="onFilterBy" v-model.number="filterBy.price" type="number" placeholder="by price">
    </section>
</template>

<script>
export default {
   data() {
        return {
            filterBy: { txt: '',price:'0' }
        }
    },
    methods: {
        onFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style>

</style>