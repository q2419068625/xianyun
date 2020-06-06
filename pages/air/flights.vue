<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <div>
                    <flightsFilters :data="cacheFlightsData" @setDataList="setDataList"/>
                </div>
                
                <!-- 航班头部布局 -->
                <div>
                    <flightsListHead/>
                </div>
                
                
                <!-- 航班信息 -->
                <div>
                    <flightsItem v-for="(item,index) in dataList"
                     :key="index" 
                     :data="item"/>
                </div>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageIndex"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
                </el-pagination>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
            </div>
        </el-row>
    </section>
</template>

<script>

import moment from "moment";
import flightsItem from "@/components/air/flightsItem.vue"
import flightsListHead from "@/components/air/flightsListHead.vue"
import flightsFilters from "@/components/air/flightsFilters.vue"
export default {
    data(){
        return {
            // 航班总数据
            flightsData: {
                flights: [],
                info: {},
                options: {}
            }, 
            dataList: [],     // 航班列表数据，用于循环flightsItem组件，单独出来是因为要分页
            pageIndex:1, //当前页数
            pageSize:10, //显示条目个数
            total:0, //总条数
            // 缓存一份数据，只会修改一次
            cacheFlightsData:{
                 flights: [],
                info: {},
                options: {}
            }
        }
    },
    components:{
        flightsItem,
        flightsListHead,
        flightsFilters
    },
    methods: {
        // 设置dataList数据
        setDataList(arr){
            const start = (this.pageIndex - 1) * this.pageSize; 
            const end = start + this.pageSize; 
            if(arr){
                this.pageIndex = 1;
                this.flightsData.flights = arr;
                this.total = arr.length;
            }
            this.dataList = this.flightsData.flights.slice(start, end);

        },
        //切换条数时触发
        handleSizeChange(value){
            this.pageSize =value
            this.pageIndex = 1
            this.setDataList()
        },
        //切换页数时触发
        handleCurrentChange(value){
            this.pageIndex = value
            this.setDataList()
        }
        
    },
    mounted() {
        this.$axios({
            url:'airs',
            params:this.$route.query
        }).then(res=>{
            this.flightsData = res.data
            this.total = res.data.total
            this.cacheFlightsData = {...res.data}
            this.setDataList()
        })
    },
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>