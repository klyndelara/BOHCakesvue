<script setup>

</script>

<template>


 <div>
    <header>
        <h1>Cupcake Shop</h1>
  <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/cupcakes">Cupcakes</router-link>
            <router-link to="/order">Order</router-link>
        </nav>
    </header>
        <router-view/>
        
 </div>
</template>

<style scoped>


</style>
