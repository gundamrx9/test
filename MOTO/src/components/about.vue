<template>
  <div id="about">
    <div>
      <h1 class="border">ABOUT AUTOIMAGE</h1>
      <div class="flex">
        <div class="top">
          <div class="left">
            <img src="../assets/23.jpg" alt=" " height="200px;" />
          </div>
          <div class="right">
            <h3>The title on the article</h3>
            <p>{{text.p}}</p>
            <p class="border1">Read More</p>
          </div>
        </div>
        <div class="bottom top">
           <div class="left">
            <h3>The title on the article</h3>
            <p>{{text.p}}</p>
            <p class="border1">Read More</p>
          </div>
          <div class="right">
            <img src="../assets/23.jpg" alt=" " height="200px;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {
        p:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus."
      }
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #1a6be6;
}
.border1 {
  width: 30%;
  margin: 0 auto;
  border: 6px solid #1a6be6;
  transform: rotate(0deg) scale(1.003) skew(-14deg) translate(0px);
}
.border {
  background-color: black;
  color: #fff;
  text-align: center;
  border-right: 6px solid #1a6be6;
  transform: rotate(0deg) scale(1.003) skew(-14deg) translate(0px);
  transform-style: flat;
}
.top {
  display: flex;
  justify-content: center;
  width: 55%;
  text-align: center;
  margin: 0 auto;
}
.bottom{
   margin-top: 20px;
}
.bottom .left{
   background-color: #f1f1f1;
}
.top .right {
  background-color: #f1f1f1;
}
#about {
  margin-top: 30px;
  margin-bottom:30px;
}
#about > div > h1 {
  width: 30%;
  margin: 20px auto;
}
</style>