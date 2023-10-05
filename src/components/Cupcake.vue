<template>
  <div>
    <carousel :items-to-show="3" :wrap-around="true">
    <slide v-for = "cupcake in cupcakes" v-bind:key = "cupcake.cupcakeId">
      <!-- {{ slide }} -->
      <img v-bind:src= "cupcake.imgUrl">
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
    <!-- <img v-for = "cupcake in cupcakes" v-bind:key = "cupcake.cupcakeId" v-bind:src= "cupcake.imgUrl">  -->
  </div>
</template>

<script>
import CupcakeService from '../services/CupcakeService';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    data() {
        return { 
            cupcakes: [] }
        
        },
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation
        },
        methods: {
            getCupcakes(){
                CupcakeService.getCupcakes().then((response) => {
                    this.cupcakes = response.data;


                }) .catch((error) => {
                    console.log(error);
                });
                }

        },
        mounted(){
            this.getCupcakes();
        }


    }


</script>

<style>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.carousel__viewport {
    height: 50%;
    width: 100%;
    /* overflow: hidden; */
    position: relative;
    /* border: 1px solid red; */
   


}
</style>   