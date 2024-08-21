<template>
  <article class="toy-box">
    <h1>Name: {{toy.name}}</h1>
    <h2>Price: {{toy.price}}$</h2>
    <h3 v-if="toy.owner">Owner: {{toy.owner}}</h3>
  </article>
</template>

<script>
export default {
props:{
    toy:{
        type: Object,
        required: true,
    }
}
}
</script>

<style>
.toy-box {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 300px;
    text-align: center;
}

.toy-box h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
}

.toy-box h2 {
    font-size: 20px;
    color: #666;
    margin-bottom: 8px;
}

.toy-box h3 {
    font-size: 16px;
    color: #999;
}
</style>