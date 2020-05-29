<template>
  <div id="app">
    <!-- <router-link to="/theone" tag="span" replace>theone</router-link>
    <br />
    <router-link to="/thetwo" tag="button" replace>thetwo</router-link> -->
    <!-- <router-link :to="{path:'/user/'+userid,}" tag="button" replace>user</router-link>
    <button @click="oneclick">theone</button>
    <button @click="towclick">thetwo</button>
    <div style="height:300px;background-color:pink;">
      <router-view></router-view>
    </div> -->

    <router-view></router-view>

  </div>
</template>
<script>
export default {
  // name: "app",
  // data(){
  //   return{
  //     userid:'lisi'
  //   }
  // },
  // methods: {
  //   oneclick() {
  //     console.log("oneclick");
  //     // this.$router.push('/theone');
  //     this.$router.replace("/theone");
  //   },
  //   towclick() {
  //     console.log("towclick");
  //     // this.$router.push('/thetwo');
  //     this.$router.replace("/thetwo");
  //   }
  // }
};
</script>
<style >
.router-link-active {
  color: red;
}
.active {
  color: green;
}
</style>