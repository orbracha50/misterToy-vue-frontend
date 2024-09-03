<template>
  <article class="toy-box">
    <h1>{{ toy.name }}</h1>
    <img v-if="toy.imgUrl" :src="`${toy.imgUrl}`" alt="" />
    <h2>Price: {{ toy.price }}$</h2>
    <h3 v-if="toy.owner">Owner: {{ toy.owner }}</h3>
  </article>
</template>

<script>
export default {
  props: {
    toy: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.toy-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
   width: 100%;
   height: 100%;
    text-align: center;
    color: black;
    img{
       max-width: 100%;
      max-height:170px;
        
    }
    h1{
        
        font-size: 24px;
        
        margin-bottom: 10px;
    }

    h2{
        position: absolute;
        bottom: 30px;
       align-self: flex-start;
       justify-self: end;
        padding: 10px;
        font-size: 20px;
       
        margin-bottom: 8px;
    }

    h3{

        font-size: 16px;
        
    }
}
</style>