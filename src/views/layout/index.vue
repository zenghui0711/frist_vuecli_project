<template>
  <div class="container">
    <div class="aside-container">
      <router-link to="/user">Go to user</router-link>
    </div>
    <div class="main-container">
      <div>tags</div>
      <div>tags-view</div>
      <div>page-main</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout"
};
</script>
<style  scoped>
.container {
  width: 300px;
  height: 500px;
}
.aside-container {
  width: 70px;
  height: 100%;
  background-color: pink;
}
.main-container {
  width: calc(100% - 70px);
  height: 100%;
  background-color: royalblue;
}
</style>