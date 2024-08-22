<template>
  <form v-if="toy" @submit.prevent="onSave" class="toy-edit">
        <input v-model="toy.name" type="text">
        <input v-model.number="toy.price" type="number">
        <button>Save</button>
    </form>
</template>

<script>
import toyService from '@/services/toy/toy.service'
export default {
 data() {
        return {
            toy: null,
        }
    },
    methods: {

        async onSave() {
            try {
                await toyService.save(this.toy)
                this.$router.push('/')
            } catch (error) {
                alert('Bad stuff')
            }
        }
    },
    async created() {
        const { toyId } = this.$route.params
            console.log(toyId)
        if(toyId) {
            this.toy = await toyService.getById(toyId)
        } else {
            this.toy = toyService.getEmptyToy()
        }
    },
}
</script>

<style>
form{
    margin-top: 50px;
}
</style>