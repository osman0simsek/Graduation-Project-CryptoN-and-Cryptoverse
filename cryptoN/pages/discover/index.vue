<template>
<div>
  <Banner/>
  <Discover/>
</div>
</template>

<script>
import Nav from "~/components/Common/Nav"
import Banner from "~/components/Discover/Banner.vue"
import Discover from "../../components/Discover/Discover.vue"

export default {
  components:{
    Nav,
    Banner,
    Discover
},
}
</script>
