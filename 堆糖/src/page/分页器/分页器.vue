<template>
  <div>
      <div v-for="(item,index) in list" :key="index">
        {{item.text}}
      </div>
  <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="5"
      layout="total, prev, pager, next"
      :total="data.length">
    </el-pagination>
  </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        data:[
          {"text":"12324544543231"},
          {"text":"2222222222222222222"},
          {"text":"33333333333333"},
          {"text":"4444444444444444"},
          {"text":"55555555"},
          {"text":"66666666666661"},
          {"text":"77777777777777"},
          {"text":"12324544543231"},
          {"text":"2222222222222222222"},
          {"text":"33333333333333"},
          {"text":"4444444444444444"},
          {"text":"55555555"},
          {"text":"66666666666661"},
          {"text":"77777777777777"},
          {"text":"12324544543231"},
          {"text":"2222222222222222222"},
          {"text":"33333333333333"},
          {"text":"4444444444444444"},
          {"text":"55555555"},
          {"text":"66666666666661"},
          {"text":"77777777777777"},
          {"text":"12324544543231"},
          {"text":"2222222222222222222"},
          {"text":"33333333333333"},
          {"text":"4444444444444444"},
          {"text":"55555555"},
          {"text":"66666666666661"},
          {"text":"77777777777777"},
          {"text":"12324544543231"},
          {"text":"2222222222222222222"},
          {"text":"33333333333333"},
          {"text":"4444444444444444"},
          {"text":"55555555"},
          {"text":"66666666666661"},
          {"text":"77777777777777"},
          {"text":"33333333333333"},
          {"text":"4444444444444444"},
          {"text":"55555555"},
          {"text":"66666666666661"},
          {"text":"77777777777777"},
        ],
        list:[],
        currentPage1:1,
      }
    },
    mounted(){
      console.log(this.data.length)
      this.handleCurrentChange(1)
    },
    methods:{
      handleSizeChange(){


      },
      handleCurrentChange(val){
      	let start = (val-1)*5;
      	let end = start + 5
        this.list=this.data.slice(start,end);
      }
    }
  }
</script>


<style>
</style>
