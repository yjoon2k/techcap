<template>
    <div id = "app">
      <div id="top">
      <a href="/">
          <img id="logo" width=150px height=150px src='@/assets/logo.png'>
        </a>
          <div id="t1">
            <a href = "/mypage">
              <img id="emo1" src="@/assets/emo.png">
              <p id="mypage">마이페이지</p>
            </a> 
          </div>
          <div v-on:mouseover="greet" v-on:mouseout="out">
            <div id="t2">
              <a href="/aim"><button class="bt" id="bt1">교봉 단체 정보</button></a>
              <a href="/match"><button class="bt" id="bt2">선생님</button></a>
              <a href="/teacherApply"><button class="bt" id="bt3">학생</button></a>
              <a href="/info"><button class="bt" id="bt4">공지사항</button></a>
            </div>

            <div id ="t3">
              <p class="li1" id="bt_kyobong">
                <a href="/aim">설립목적</a><br>
                <a href="/select">선정기준</a>
              </p>
              <p class="li1" id="bt_teacher">
                <a href="/match">학생 매칭하기</a><br>
                <a href="/studentApply">학생 신청 리스트</a>
              </p>
              <p class="li1" id="bt_student">
                <a href="/teacherApply">선생님 신청 리스트</a>
              </p>
              <p class="li1" id="bt_notice">
                <a href="/info">공지사항</a><br>
                <a href="/example">우수사례</a><br>
                <a href="/file">첨부파일</a>
              </p>
              </div>
          </div>
      </div>

      <div id="body">
        <div id="b1">
          <img id="intro" src="@/assets/intro.png">
        </div>
      </div>

      <div id="bottom">
        <div id="bot1">
            <div class="li" id="notice">
              <ul class="noticeTitle">공지사항<button class="plus">+더보기</button></ul>
              <ul>
                    <li>아름학교 단체 지원 선생님 모집중</li>
                    <li>죽전고등학교 온라인 교육 추가 ...</li>
                    <li>이 달의 우수 사례 업데이트 완료</li>
                    <li>2020.08.10 서버 점검 안내</li>
                    <li>2020년 상반기 멘토링 영상 공모전 ...</li>
                    <li>2020.08.01 DB서버 이관으로 인한 ...</li>
                    <li>푸르덴셜사회공헌재단 전국 ...</li>
                    <li>1365 연계 시스템 점검 안내</li>
              </ul>
              
                    
            </div>
            <div class="li" id="beststudy">
              <ul class="noticeTitle">우수사례 <button class="plus">+더보기</button></ul>
              <ul>
                    <li>고2 정은솔 교내 수학경시대회 금상</li>
                    <li>고2 황인주 한국정보올림피아드 동상</li>
                    <li>중3 김가민 수원외고 진학</li>
                    <li>고1 임혜리 내신 1.8->1.2</li>
                    <li>중2 문재성 한국수학올림피아드 은상</li>
                    <li>고1 이문재 교내글쓰기대회 동상</li>
                    <li>고3 박슬현 내신 3.6->1.9</li>
                    
              </ul>
            </div>
            <div class="li" id="references">
              <ul class="noticeTitle">첨부파일<button class="plus">+더보기</button></ul>
              <ul>
                    <li>고등학교 수학 강의 자료 첨부 파일
</li>
                    <li>고2 황인주 한국정보올림피아드 동상</li>
                    <li>시각장애인을 위한 도서 읽어주기 ...</li>
                    <li>2020년 상반기 멘토링 영상 공모전 ...</li>
                    <li> 2020학년도 대학수학능력시험 ...
</li>
                    
              </ul>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  //import axios from 'axios'
  
      

  export default {
    /*data:function(){
      return{
        imgArray=["@/assets/intro.png","@/assets/intro.png", "@/assets/intro.png","@/assets/intro.png"]
      }
    }
    */
    methods:{
      /*hello: function(){
        axios.get('/api/user').then(res => {
          
        }),
        axios.post('api/user', {title: "jang"}).then(res=>{
            
        })
      },
      */

      /*showImage() {
            var imgNum = Math.round(Math.random() * 3);
            var objImg = document.getElementById("intro");
            objImg.src = this.imgArray[imgNum];
 
            setTimeout("showImage()", 200);
        },
        */
 
      greet: function(){
        var t3 = document.getElementById("t3");
        t3.style.visibility = "visible";
        
      }, 
      out: function(){
        var t3 = document.getElementById("t3");
        t3.style.visibility = "hidden";
      }
    }
  }
  
</script>


<style>

  a:link { color: black; text-decoration: none;}
  a:visited { color: black; text-decoration: none;}
  a:hover { color: black; text-decoration: none;}
  #title{
    font-size: 25px;
  }
  .body{
    font-size: 20px;
  }

  #table{
    width: 100%;
    height: 20%
  }
  #mypage{
    position: absolute;
    right: 70px;
    top: 8px;
    font-size: 25px;
    color: black;
  }
  #emo1{
    position: absolute;
    right: 200px;
    top: 30px;
  }
  .bt{
    background-color: white;
    width: 10.1%;
    height: 50px;
    font-size: 20px;
    color: black;
    position: absolute;
    top:100px;
  }
  #bt1{
    left: 35%;
  }
  #bt2{
    left: 45%;
  }
  #bt3{
    left: 55%;
  }
  #bt4{
    left: 65%;
  }

  #intro{
    left: 20%;
    position: absolute;
    top: 230px;
    width: 60%;
    height: 60%; 
    text-align: center;
    
  }
  .li{
    background-color: white;
    width: 18%;
    height: 300px;
   
    color: black;
    position: absolute;
    top:89%;
    
    border-radius: 40px/ 40px;
    border: 1px solid gray;
    

  }
  #t3{
    visibility: hidden; 
   
  }
  .li1{
  
    margin: 0 auto;
    background-color: #CEF6F5;
    width: 9.9%;
    height: 80px;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top:150px;
    border: 2px solid black;
  }
  #bt_kyobong{
    left: 35%;
    
  }
  #bt_teacher{
    left: 45%;
  }
  #bt_student{
    left: 55%;
  }
  #bt_notice{
    left: 65%;
  }
  #notice{
    left:20%;
    font-size: 18px;
    text-align: left;
    
  }
  
  #beststudy{
    left:41%;
    font-size: 18px;
    text-align: left;
  }
  .noticeTitle{
    color: #82CBC4;
    font-size: 20px;
  }
  .plus{
    background-color: skyblue;
    color: white;
    border: 1px solid white;
    width: 20%;
    height: 10%;
    border-radius: 40px/40px;
    position: absolute;
    left: 70%;
    
  }
  #references{
    left:62%;
    font-size: 18px;
    text-align: left;
  }
</style>

  
