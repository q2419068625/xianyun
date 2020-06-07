<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <div class="main" >
                <orderForm @setInfoData="setInfoData"  @setAllPrice="setAllPrice" />
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <orderAside :data="infoData" :allPrice="allPrice"/>  
            </div>
        </el-row>
    </div>
</template>

<script>
import orderForm from "@/components/air/orderForm.vue"
import orderAside from "@/components/air/orderAside.vue"
export default {
  data(){
    return{
      //机票信息
      infoData:{
        seat_infos:{}
      },
      allPrice: 0
    }
  },
  components:{
    orderForm,
    orderAside
  },
  methods: {
    setInfoData(data){
      this.infoData = data
    },
    setAllPrice(price){
      this.allPrice = price
    }
  }
    
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>