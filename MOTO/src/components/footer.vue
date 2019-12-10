<template>
  <div id="footer">
    <div class="box">
      <p v-for="item in text" v-bind:key="item.id" class="text">{{item}}</p>
    </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {
        title: "Contact",
        phone: "Phone / +80 999 99 9999",
        studio: "Studio / Moonshine St. 14/05 Light City",
        copyright: "Copyright 20xx - More Templates"
      }
    };
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 300px;
  background-color: #1a6be6;
}
.box{
  display: flex;
  flex-direction: column;
  padding-top:45px;
}
.text {
  color: #fff;
  text-align: center;
}
</style>