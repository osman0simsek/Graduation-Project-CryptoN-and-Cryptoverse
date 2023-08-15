<template>
<div>
  <Banner/>

  <PopularCollection/>
    <Footer2/>
  <LastAddedItems/>
  <TopSellers/>
    

  <!-- <LastAddedItems/> -->
</div>
</template>

<script>
import Banner from "~/components/Home/Banner.vue"
import PopularCollection from "~/components/Home/PopularCollection/PopularCollection.vue"
import LastAddedItems from "~/components/Home/LastAddedItems.vue"
import TopSellers from "~/components/Home/TopSellers.vue"
import Footer2 from "~/components/Home/Footer2.vue"
export default {
  components:{
    Banner,
    PopularCollection,
    LastAddedItems,
    Footer2,
    TopSellers
},
}
</script>
