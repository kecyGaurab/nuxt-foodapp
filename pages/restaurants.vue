<template>
  <main class="container restaurant">
      <div class="restaurantheading">
        <h1>Restaurants</h1>
        <label for="restaurants">Choose a cuisine: </label>
        <select id="restaurant" type="select">
          <option value="Please choose" >Please choose</option>
          <option value="tacos">tacos</option>
          <option value="pizza">pizza</option>
          <option value="dim sum">dim sum</option>
        </select>
      </div>
      <AppRestaurantInfo />
  </main>
</template>

<script>
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  components: {
    AppRestaurantInfo,
  },
};
</script>

<style>
</style>