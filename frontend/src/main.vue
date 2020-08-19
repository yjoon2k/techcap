<template>
    <div id = "app">
      <div id="top">
          <div id="t1">
            <a href = "/mypage">
              <img id="emo1" src="@/assets/emo.png">
              <p id="mypage">마이페이지</p>
            </a> 
          </div>

          <div id="t2">
            <button v-on:click="greet" class="bt" id="bt1">교봉 단체 정보</button>
            <button v-on:click="greet" class="bt" id="bt2">선생님</button>
            <button v-on:click="greet" class="bt" id="bt3">학생</button>
            <button v-on:click="greet" class="bt" id="bt4">공지사항</button>
          </div>

          <div id ="t3">
            <ul class="li1" id="bt_kyobong">
              <li>설립목적</li>
              <li>선정기준</li>
            </ul>
            <ul class="li1" id="bt_teacher">
              <li>학생 매칭하기</li>
              <li>학생 신청 리스트</li>
            </ul>
            <ul class="li1" id="bt_student">
              <li>선생님 신청 리스트</li>
            </ul>
            <ul class="li1" id="bt_notice">
              <li>공지사항</li>
              <li>우수사례</li>
              <li>첨부파일</li>
            </ul>
          </div>
      </div>

      <div id="body">
        <div id="b1">
          <img id="intro" src="@/assets/intro.png">
        </div>
      </div>

      <div id="bottom">
        <div id="bot1">
          <ol class="li" id="notice">
            <li>fdsa</li>
          </ol>
          <ol class="li" id="beststudy">
            <li>aaa</li>
          </ol>
          <ol class="li" id="references">
            <li>bbbb</li>
          </ol>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    methods:{
      greet: function(){
        var t3 = document.getElementById("t3");
        t3.style.visibility = "visible";
      }
    }
  }
</script>


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
  .bt{
    background-color: #82CBC4;
    width: 20%;
    height: 100px;
    font-size: 30px;
    color: white;
    position: absolute;
    top:100px;
  }
  #bt1{
    left: 20%;
  }
  #bt2{
    left: 40%;
  }
  #bt3{
    left: 60%;
  }
  #bt4{
    left: 80%;
  }
  #intro{
    left: 10px;
    position: absolute;
    top: 230px;
    width: 99%;
    height: 500px; 
  }
  .li{
    background-color: #96D3E0;
    width: 29%;
    height: 300px;
    font-size: 30px;
    color: white;
    position: absolute;
    top:730px;
  }
  #t3{
    visibility: hidden; 
  }
  .li1{
    background-color: #96D3E0;
    width: 17.2%;
    height: 100px;
    font-size: 30px;
    color: white;
    position: absolute;
    top:180px;
    z-index: 1;
  }
  #bt_kyobong{
    left: 20%;
  }
  #bt_teacher{
    left: 40%;
  }
  #bt_student{
    left: 60%;
  }
  #bt_notice{
    left: 80%;
  }
  #notice{
    left:10px;
  }
  #beststudy{
    left:34.3%;
  }
  #references{
    left:68%;
  }
</style>

  
