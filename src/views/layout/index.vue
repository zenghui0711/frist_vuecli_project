<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 侧边栏容器 -->
    <!-- 菜单 -->
    <side-bar class="sidebar-container" :isCollapse="isCollapse" />

    <div class="main-container">
      <!-- 顶栏容器 -->
      <div class="header-container">
        <div @click="controlCollapse()">
          <i class="el-icon-s-unfold"></i>
        </div>
        <div class="tags-view">
          <el-tag closable>默认标签</el-tag>
        </div>
      </div>
      <!-- 主要区域容器 -->
      <div class="main-container">
        <router-view></router-view>
      </div>
      <!-- 底栏容器 -->
      <div class="footer-container">
        <div>footer</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.el-icon-s-unfold {
  font-size: 25px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
<script>
import { SideBar } from "./components";

export default {
  data() {
    return {
      default_openeds: [1],
      userid: "zenghui",
      isCollapse: false
    };
  },
  components: {
    SideBar
  },
  computed: {
    classObj() {
      return {
        hideSidebar: this.isCollapse,
        openSidebar: !this.isCollapse,
        // withoutAnimation: sidebar.withoutAnimation,
        // mobile: device === "mobile"
      };
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(333, key, keyPath);
      this.default_openeds.push(key);
      console.log(111, this.$route);
      console.log(222, this.$router.options.routes);
    },
    handleClose(key, keyPath) {
      console.log(444, key, keyPath);
      var index = this.default_openeds.indexOf(key);
      this.default_openeds.splice(index, 1);
    },
    controlCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
