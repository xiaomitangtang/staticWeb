<template>
  <div class="about">
   <div class="awardbox">
     <div class="awardone" v-for="(item,index) in SpiralArr" :class="{'active':item===activeNumber}">
       {{item}}
     </div>
   </div>
    <div class="awardnum">{{activeNumber>-1?activeNumber:""}}</div>
    <button @click="play">抽奖</button>
  </div>
</template>
<script>
  export default {
      data(){
          return {SpiralArr:[],activeNumber:-1,timer:null,rows:18}
      },
      methods:{
          getSpiralArr(n){
              var map = (function() {
                  function map(n) {
                      this.map = [], this.row = 0, this.col = -1, this.dir = 0, this.n = n;
                      // 建立个二维数组
                      for (var i = 0; i < this.n; i++) { this.map.push([]); }
                      // 定义移动的顺序为 右，下，左，上
                      var order = [this.right, this.bottom, this.left, this.up];
                      i = 0;
                      do {
                          // 能移动则更新数字，否则更改方向
                          order[this.dir % 4].call(this) ? i++ : this.dir++;
                          // 赋值
                          this.map[this.row][this.col] = i;
                      } while (i < n * n);
                  }
                  map.prototype = {
                      print: function() { for (var i = 0; i < this.n; i++) {
                          console.log(this.map[i].join(' '))
                      }
                      },
                      // 向该方向移动
                      left: function() { return this.move(this.row, this.col - 1); },
                      right: function() { return this.move(this.row, this.col + 1); },
                      up: function() { return this.move(this.row - 1, this.col); },
                      bottom: function() { return this.move(this.row + 1, this.col); },
                      // 如果坐标在范围内，并且目标没有值，条件满足则更新坐标
                      move: function(row, col) {
                          return (0 <= row && row < this.n) && (0 <= col && col < this.n) && !this.map[row][col] && (this.row = row, this.col = col, true);
                      },
                  };
                  return map;
              })();
              return new map(n)
          },
          play(){
              let startTime=new Date().getTime()
              let alltime=Math.floor(Math.random()*3000)+9000
              this.timer=setInterval(()=>{
                  if(new Date().getTime()-startTime>alltime){
                      clearInterval(this.timer)
                  }
                /*  this.activeNumber++
                  if( this.activeNumber>Math.pow(this.rows,2)){
                      this.activeNumber=1
                  }*/
                  this.activeNumber=Math.floor(Math.random()*(Math.pow(this.rows,2)+1))
              },30)
          }
      },
      mounted(){
         /* let arr=[];
          (function() {
              var map = (function() {
                  function map(n) {
                      this.map = [], this.row = 0, this.col = -1, this.dir = 0, this.n = n;
                      // 建立个二维数组
                      for (var i = 0; i < this.n; i++) { this.map.push([]); }
                      // 定义移动的顺序为 右，下，左，上
                      var order = [this.right, this.bottom, this.left, this.up];
                      i = 0;
                      do {
                          // 能移动则更新数字，否则更改方向
                          order[this.dir % 4].call(this) ? i++ : this.dir++;
                          // 赋值
                          this.map[this.row][this.col] = i;
                      } while (i < n * n);
                  }
                  map.prototype = {
                      print: function() { for (var i = 0; i < this.n; i++) {
                          console.log(this.map[i].join(' '))
                      }
                          },
                      // 向该方向移动
                      left: function() { return this.move(this.row, this.col - 1); },
                      right: function() { return this.move(this.row, this.col + 1); },
                      up: function() { return this.move(this.row - 1, this.col); },
                      bottom: function() { return this.move(this.row + 1, this.col); },
                      // 如果坐标在范围内，并且目标没有值，条件满足则更新坐标
                      move: function(row, col) {
                          return (0 <= row && row < this.n) && (0 <= col && col < this.n) && !this.map[row][col] && (this.row = row, this.col = col, true);
                      },
                  };
                  return map;
              })();

              new map(18).print();
              arr=new map(18)
          })();
          console.log( arr );*/

         this.SpiralArr=[].concat.apply([],this.getSpiralArr(this.rows).map)
      }
  }
</script>
<style>
  .awardbox{
    width: 630px;
    height: 630px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow:4px 4px 10px rgba(0,0,0,.4);
  }
  .awardone{
    float: left;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    line-height: 30px;
    text-align: center;
    background-color: #ffe72c;
  }
  .active{
    background-color: #ff232f;
    color: #fff;
    border-radius: 5px;

  }
  .awardnum{
    position: absolute;
    right: 10px;
    top: 30px;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 26px;
    border: 1px solid #000;
    background-color: #ccc;
    border-radius: 5px;

  }
</style>