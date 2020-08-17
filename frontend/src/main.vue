<template>
    <div id = "app">
      <div id="top">
        <a href="/">
          <img id="logo" width=300px height=300px src='@/assets/logo.png'>
        </a>
         <div id="t1">
            <a href = "/mypage">
              <img id="emo1" src="@/assets/emo.png">
              <p id="mypage">마이페이지</p>
            </a>
            
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

<style>
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
    top: 0px;
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

  
