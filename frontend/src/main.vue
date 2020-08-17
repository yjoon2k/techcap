<template>
    <div id = "app">
      <div id="top">
         <router-link to="/"><img id="logo" width=300px height=300px src='@/assets/logo.png'/></router-link>
         <div id="t1">
            <router-link to="/"><img id="emo1" src='@/assets/emo.png'/></router-link>
            <p id="mypage">마이페이지</p>
         </div>

         <div id="t2">
          <button class="bt" id= "bt1">교봉 단체 정보</button>
          <button class="bt" id= "bt2">선생님</button>
          <button class="bt" id="bt3">학생</button>
          <button class="bt" id="bt4">공지사항</button>
         </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app', 
  
}
</script>
<style>
  #link{
    position: absolute;
    left:200px;
    top: 400px;
  }
  #mypage{
    position: absolute;
    right: 70px;
    top: 8px;
    font-size: 25px;
  }
  #emo1{
    position: absolute;
    right: 200px;
    top: 30px;
  }
  #logo{
    position: absolute;
    left: 0px;
  }
  .bt{
    background-color: #82CBC4;
    width: 400px;
    height: 100px;
    font-size: 30px;
    color: white;
    position: absolute;
    top:100px;
  }
  #bt1{
    left: 300px;
  }
  #bt2{
    left: 700px;
  }
  #bt3{
    left: 1100px;
  }
  #bt4{
    left: 1500px;
  }
</style>

  
