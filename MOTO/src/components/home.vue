<template>
  <div id="home">
    <!--轮播图-->
    <nav>
      <el-carousel trigger="click" type="card" arrow="always" height="400px">
        <el-carousel-item v-for="item in image" :key="item.index" class="el-carousel-item">
          <img :src="item.src" alt="img" class="image" />
        </el-carousel-item>
      </el-carousel>
    </nav>
    <!--轮播图-->
    <!--主题内容-->
    <nav class>
      <h2 class="h2">FEATURED SERVICE</h2>
      <p class="p">We offer great vehicle services for our customers round the clock.</p>
      <div class="Box_1">
        <div class="box" v-for="item in text" :key="item.id">
          <img :src="item.imgSrc" alt="#" />
          <h5>{{item.title}}</h5>
          <p>{{item.text}}</p>
          <h3 class="border">More Details</h3>
        </div>
      </div>
    </nav>
    <!--主题内容-->

    <!--title-->
    <div class="welcome">
      <div>
        <h1 class="title">WELCOME</h1>
        <P>{{msg}}</P>
      </div>
    </div>
    <!--title-->

    <!--about-->
    <About></About>
    <!--about-->
  </div>
</template>

<script scoped>
  import About from "./about";


export default {
  components:{
    About
  },
  data() {
    return {
      image: [
        { src: require("../assets/1.jpg") },
        { src: require("../assets/5.jpg") },
        { src: require("../assets/6.jpg") },
        { src: require("../assets/7.jpg") }
      ],
      text: [
        {
          imgSrc: require("../assets/banner-img1.jpg"),
          title: "LOREM IPSUM DOLOR SIT AMET,CONSEC TEETUER ADIPECPP IT.",
          text:
            "His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his. Vix at tation facete impetus omnesque ius harum antiopam."
        },
        {
          imgSrc: require("../assets/banner-img2.jpg"),
          title: "LOREM IPSUM DOLOR SIT AMET,CONSEC TEETUER ADIPECPP IT.",
          text:
            "His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his. Vix at tation facete impetus omnesque ius harum antiopam."
        },
        {
          imgSrc: require("../assets/banner-img3.jpg"),
          title: "LOREM IPSUM DOLOR SIT AMET,CONSEC TEETUER ADIPECPP IT.",
          text:
            "His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his. Vix at tation facete impetus omnesque ius harum antiopam."
        }
      ],
      msg:
        "Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai."
    };
  }
};
</script>

<style scoped>
.border {
  transform: rotate(0deg) scale(1.003) skew(-14deg) translate(0px);
  border: 6px solid #1a6be6;
}
.image {
  height: 400px;
  width: 100%;
}

.el-carousel-item {
  height: 400px;
}
.h2 {
  background-color: #000;
  border-right: 6px solid #1a6be6;
  color: #fff;
  height: 50px;
  width: 300px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
  transform: rotate(0deg) scale(1.003) skew(-14deg) translate(0px);
  transform-style: flat;
}
.p {
  text-align: center;
}
.Box_1 {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
}
.box {
  width: 320px;
  text-align: center;
}
.box img {
  height: 180px;
}
.box h3 {
  width: 150px;

  color: #1a6be6;
}
.welcome {
  text-align: center;
  background: url("../assets/bg-2.jpg") repeat;
  color: #fff;
  height: 350px;
}

.welcome div {
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
}

.title {
  width: 30%;
  margin: 0 auto;
  transform: rotate(0deg) scale(1.003) skew(-14deg) translate(0px);
  transform-style: flat;
  background-color: #000;
  border-right: 6px solid #1a6be6;
  padding: 10px;
}
.about {
  color: #fff;
  text-align: center;
  margin: 20px;
  width: 100%;
  height: 500px;
}
.about h1 {
  width: 20%;
}
.imgbox {
  width: 80%;
  text-align: center;
}
.imgbox   {
  display: flex;
  justify-content:center;
}
</style>