<template>
  <div class="award-page">
   <div class="awardbox" :style="awardboxStyle">
       <button class="play-btn" @click="play" :class="{'disabled':!validSpiraArr.length}">抽奖</button>
       <button class="play-btn" v-show="isPlay" @click="stop">停止</button>
       <div class="awardone" :style="awardoneStyle" v-for="item in SpiralArr" :class="{'active':item===activeNumber,'actived':awardArr.indexOf(item)>-1}">
       {{item}}
     </div>
   </div>
      <div class="awardList">
          <div class="awardItem"  v-for="item in awardArr" :key="item+'awardlist'">{{item}}</div>
      </div>
    <div class="awardnum">{{activeNumber>-1?activeNumber:""}}</div>
    <div class="settingbox">
        抽奖区行/列数：<input v-model.number="settingInfo.rows" class="setting-input" type="text">
        总人数：<input v-model.number="settingInfo.totalman" class="setting-input" type="text">
        抽奖时间(ms)：<input v-model.number="settingInfo.playTime" class="setting-input" type="text">
        抽奖区大小：<input v-model.number="settingInfo.playboxWidth" class="setting-input" type="text">
        螺旋模式：<input v-model="settingInfo.spiralModel" type="checkbox">
        总是从头开始：<input v-model="settingInfo.restart" type="checkbox">
        <button @click="saveSetting" class="setting-btn" >保存 <span v-show="needSave" class="need-save">*</span></button>
    </div>
  </div>
</template>
<script>
  export default {
      data(){
          return {
              SpiralArr:[],
              validSpiraArr:[],
              awardArr:[],
              activeNumber:-1,
              rows:18,
              totalman:310,
              spiralModel:false,
              restart:false,
              startIndex:-1,
              needSave:false,
              settingInfo:{
                  spiralModel:false,
                  restart:false,
                rows:18,
                playboxWidth:630,
                totalman:310,
                playTime:8000,
              },
              playboxWidth:630,
              awardboxSize:630,
              awardboxStyle:{
                  width:'630px',
                  height:'630px',
              },
              awardoneStyle:{
                  width:'35px',
                  height:'35px',
                  lineHeight:'35px'
              },
              isPlay:false,
              playTime:8000,
              timer:null
          }
      },
      methods:{
          saveSetting(){
              let rows=this.settingInfo.rows
              let totalman=this.settingInfo.totalman
              let playTime=this.settingInfo.playTime
              let playboxWidth=this.settingInfo.playboxWidth
              if(typeof rows!=='number'){alert('请输入正确的行数/列数');return}
              if(typeof totalman!=='number'){alert('请输入正确的人数');return}
              if(typeof playTime!=='number'){alert('请输入正确的毫秒数');return}
              if(typeof playboxWidth!=='number'){alert('请输入正确宽度/高度');return}
              if(Math.pow(rows,2)<totalman){alert('区域小了，装不下这么多人');return}
              this.awardoneStyle={
                  width:playboxWidth/rows+'px',
                  height:playboxWidth/rows+'px',
                  lineHeight:playboxWidth/rows+'px'

              }
              this.awardboxStyle={
                  width:playboxWidth+'px',
                  height:playboxWidth+'px',
              }
              this.rows=rows;
              this.totalman=totalman;
              this.playTime=playTime;
              this.playboxWidth=playboxWidth;
              this.spiralModel=this.settingInfo.spiralModel;
              this.restart=this.settingInfo.restart;
              this.needSave=false;
              this.init()

          },
          init(){
              clearInterval(this.timer)
              this.SpiralArr=[];
              this.validSpiraArr=[];
              this.activeNumber=-1
              this.awardArr=[];
              [].concat.apply([],this.getSpiralArr(this.rows).map).forEach(item=>{
                  if(item<=this.totalman){
                      this.SpiralArr.push(item)
                      this.validSpiraArr.push(item)
                  }else{
                      this.SpiralArr.push("")
                  }
              })
              this.validSpiraArr= this.validSpiraArr.sort( (a,b)=>a-b)
          },
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
          stop(){
              this.isPlay=false
          },
          play(){
              clearInterval(this.timer)
              if(!this.validSpiraArr.length){alert('没有可以抽取的人了！');return}
              let playTime=this.playTime
              let startTime=new Date().getTime()
              let alltime=Math.floor(Math.random()*playTime/10)+playTime
              let tempIndex=this.restart?-1:this.startIndex;
              let validarr=this.validSpiraArr
              let tempFunc=null;
              this.isPlay=true
              if(!this.spiralModel){
                  //这是非螺旋模式的定是函数
                  tempFunc=()=> {
                      if (new Date().getTime() - startTime > alltime || !this.isPlay) {
                          clearInterval(this.timer)
                          this.awardArr.push(validarr.splice(validarr.indexOf(this.activeNumber), 1)[0])
                          this.isPlay=false
                      } else {
                          this.activeNumber=validarr[Math.floor(Math.random()*validarr.length)]
                      }
                  }
              }else{
                      //这是螺旋模式的定时函数
                      tempFunc=()=> {
                          if (new Date().getTime() - startTime > alltime  || !this.isPlay) {
                              clearInterval(this.timer)
                              this.awardArr.push(validarr.splice(validarr.indexOf(this.activeNumber), 1)[0])
                              this.startIndex=tempIndex-1
                              this.isPlay=false
                          } else {
                              this.activeNumber = validarr[(tempIndex++) % validarr.length]
                          }
                      }
                  }
              this.timer=setInterval(tempFunc,30)
          }
      },
      watch:{
          settingInfo:{
              deep:true,
              handler:function () {
                  this.needSave=true
              }
          }
      },
      mounted(){
      this.init()
      }
  }
</script>
<style>
    .award-page{
        padding-top: 20px;
    }
  .awardbox{
      position: relative;
      margin:  auto ;
    width: 630px;
    height: 630px;
    border-radius: 6px;
    overflow: hidden;
      background-color: #ffe72c;
    box-shadow:4px 4px 10px rgba(0,0,0,.4);
  }
  .play-btn{
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -30px auto auto -40px;
      width: 80px;
      height: 80px;
      background-color: #ff5b64;
      border: 0;
      color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      font-size: 24px;
      outline: none;
      cursor: pointer;
  }
  .play-btn:active{
      background-color: #ff7e85;
      box-shadow: 0 0 10px rgba(255,255,255,.5);
  }
  .awardone{
    float: left;
    box-sizing: border-box;
    text-align: center;
    background-color: #ffe72c;
      user-select: none;
      overflow: hidden;
  }
  .actived{
      background-color: #fb828a;
  }
  .active{
    background-color: #ff232f;
    color: #fff;
    border-radius: 5px;

  }
  .awardnum{
    position: absolute;
    right: 10px;
    top: 330px;
    width: 100px;
    height: 40px;
    text-align: center;
    line-height:40px;
    font-size: 26px;
    border: 1px solid #a7d6b4;
    background-color: #d91900;
      color: #fff;
    border-radius: 5px;

  }
    .awardList{
        position: absolute;
        top: 20px;
        right: 10px;
        height: 200px;
        width: 180px;
        background-color: #ffe72c;
        overflow: auto;
    }
    .awardItem{
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ffc535;
    }

    .settingbox{
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%);
        height: 30px;
        width:100%;
        text-align: center;
    }
    .setting-input{
        margin: 10px;
        border-radius: 4px;
        padding: 3px;
        border: 1px solid #cdcdcd;
    }
    .setting-btn{
        position: relative;
        padding: 4px 12px;
        margin-left: 30px;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: #ffb230;
        outline: none;
    }
    .setting-btn:active{
        background-color: #ffca8a;
    }
    .need-save{
        position: absolute;
        top: -3px;
        right: -3px;
        width: 10px;
        height: 10px;
        line-height: 20px;
        font-size: 30px;
        color: red;
    }
    .disabled{
        background-color: #ccc;
        color: #000;
       pointer-events: none;
        cursor: not-allowed;
    }
</style>