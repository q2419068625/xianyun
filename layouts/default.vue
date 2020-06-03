<template>
  <div>
    <Header/>
    <nuxt />
    <Fotter/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Fotter from '@/components/fotter.vue'
export default {
  components:{
    Header,
    Fotter
  }
  
}
</script>
<style>
/* 全局默认样式 */
*{
  margin: 0;
  padding: 0;
}
*{
  margin:0; 
  padding:0;
}
ul, li, ol{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
a:hover{

}
em,i{
  font-style: normal;
}
</style>
