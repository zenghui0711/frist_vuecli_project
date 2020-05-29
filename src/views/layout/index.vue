<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 侧边栏容器 -->
    <side-bar class="sidebar-container" />
    <!-- 主要区域容器 -->
    <div class="main-container">
      <nav-bar></nav-bar>
      <tags-view></tags-view>
      <app-main></app-main>
      <app-footer></app-footer>
    </div>
  </div>
</template>
 
<script>
import { SideBar, AppMain, NavBar, TagsView, AppFooter } from "./components";

export default {
  data() {
    return {
      userid: "zenghui",
      isCollapse: false
    };
  },
  components: {
    SideBar,
    AppMain,
    NavBar,
    TagsView,
    AppFooter
  },
  computed: {
    classObj() {
      return {
        hideSidebar: this.isCollapse,
        openSidebar: !this.isCollapse
      };
    }
  },
  mounted(){

    this.anag()
  },

  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(333, key, keyPath);
    //   this.default_openeds.push(key);
    //   console.log(111, this.$route);
    //   console.log(222, this.$router.options.routes);
    // },
    // handleClose(key, keyPath) {
    //   console.log(444, key, keyPath);
    //   var index = this.default_openeds.indexOf(key);
    //   this.default_openeds.splice(index, 1);
    // },

    anag() {
      this.$store.commit("CHANGE_COUNT");
      console.log("stroe2222222", this.$store.state.count);
    }
  }
};
</script>
