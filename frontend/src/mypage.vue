<template>
    <div>
        <div>
            <button id="home" class="btn">홈</button>
            <button id="inform" class="btn">내 정보 변경</button>
            <button id="secure" class="btn">보안</button>
            <button id="class" class="btn">내 수업</button>
            <button id="student" class="btn">내 학생</button>
            <button id="teacher" class="btn">내 선생님</button>
            <button id="home" class="btn">홈</button>
            <button id="inform" class="btn">내 정보 변경</button>
            <button id="secure" class="btn">보안</button>
            <button id="class" class="btn">내 수업</button>
            <button id="student" class="btn">내 학생</button>
            <button id="teacher" class="btn">내 선생님</button>
        </div>
        <div id="body">
            <h1 id="mp">마이페이지</h1>
            <img id="image" src="@/assets/image.png">
           
        </div>

    </div>
</template>

<script>
</script>
<style> 
    #mp{
        font-size: 50px;
        position: absolute;
        left: 800px;
        top: 50px
    }
    #image{
        width: 200px;
        height: 200px;
        position: absolute;
        left: 818px;
        top: 200px;
    }
    .btn{
        width: 200px;
        height: 50px;
        position: absolute;
        left: 50px;
        background-color: white;
        font-size: 20px;
    }
    #home{
        top:250px;
    }
    #inform{
        top: 300px;
    }
    #secure{
        top: 350px;
    }
    #class{
        top: 400px;
    }
    #student{
        top: 450px;
    }
    #teacher{
        top: 500px;
    }
</style>