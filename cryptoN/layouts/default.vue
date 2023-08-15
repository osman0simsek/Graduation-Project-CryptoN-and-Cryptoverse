<template>
  <div>
    <Nav/>
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
import Nav from "~/components/Common/Nav.vue";
import Footer from "~/components/Common/Footer.vue";

export default {
  components: {
    Nav,
    Footer
},
};
</script>
<style>
</style>