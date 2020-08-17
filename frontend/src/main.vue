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
              <button v-on:click="main" class="bt" id="bt1">교봉 단체 정보</button>
              <button class="bt" id="bt2">선생님</button>
              <button class="bt" id="bt3">학생</button>
              <button class="bt" id="bt4">공지사항</button>
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

<srcipt>
export default {
  name: 'main',
  props: {
    msg: String
  },
  methods:{
    main: function(){
      this.$router.replace(this.$)
    }
  }
}
</srcipt>

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
    background-color: #52575d;
    width: 29%;
    height: 300px;
    font-size: 30px;
    color: white;
    position: absolute;
    top:730px;
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

  
