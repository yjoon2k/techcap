<template>
    <div>
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
        <a href="/info">
            <button id="info" class="button">공지사항</button>
        </a>   
        <a href="/example"> 
            <button id="example" class="button">우수사례</button>
        </a>
        <a href="/file"> 
            <button id="file" class="button">첨부파일</button>
        </a>

      </div>
    </div>
</template>
<script>
export default {
   
   methods:{

      greet: function(){
        var t3 = document.getElementById("t3");
        t3.style.visibility = "visible";
      }, 
      out: function(){
        var t3 = document.getElementById("t3");
        t3.style.visibility = "hidden";
      }
    },
    mounted(){
        var btn = document.getElementById('bt4')
        btn.style.backgroundColor = "#82CBC4"
        btn.style.color="white"
        var file=document.getElementById('file')
        file.style.backgroundColor="#FECCBE"
    }
}

</script>

<style>
    #info{
        top: 250px;
    }
    #example{
        top: 300px;
    }
    #file{
        top: 350px;
    }
    
</style>
