<template>
  <div class="navbar">
    <div class="navbar-view-container">
      <i class="el-icon-s-unfold" @click="controlCollapse()"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    controlCollapse() {
      // console.log(this.$root)
      // console.log(this.$parent.isCollapse)
      this.$parent.isCollapse = !this.$parent.isCollapse;
    }
  }
};
</script>

<style >
.navbar-view-container {
  height: 50px;
}
.el-icon-s-unfold {
  font-size: 25px;
  padding: 12px 10px;
  cursor: pointer;
}
</style>