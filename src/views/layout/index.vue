<template>
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside style="background-color:rgb(48, 65, 86)">
      <!-- 菜单 -->
      <el-menu
        :default-openeds="default_openeds"
        :default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(48, 65, 86)"
        text-color="#fff"
      >
        <template >
          <router-link :to="{path:'/home'}" >
            <el-menu-item :index="'/home'" :class="'el-menu-oneItem'">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
        </template>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-price-tag"></i>
            <span slot="title">用户标签管理</span>
          </template>
          <router-link to="/taglist">
            <el-menu-item index="/taglist">标签管理</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">用户管理</span>
          </template>
          <router-link :to="'/userlist'">
            <el-menu-item index="/userlist">用户信息</el-menu-item>
          </router-link>
          <router-link to="/usercase">
            <el-menu-item index="/usercase">上报案件情况</el-menu-item>
          </router-link>
          <router-link to="/usersigin">
            <el-menu-item index="/usersigin">用户签到</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 顶栏容器 -->
      <el-header style="border-bottom:1px solid #eee">header</el-header>
      <!-- 主要区域容器 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 底栏容器 -->
      <el-footer style="border-top:1px solid #eee">footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      default_openeds: [1],
      userid: "zenghui",
      routes: []
    };
  },
  computed: {
    options() {
      return this.$router.options.routes;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.default_openeds.push(key);

      console.log(this.$route);
      console.log(this.$router.options.routes);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      var index = this.default_openeds.indexOf(key);
      this.default_openeds.splice(index, 1);
    }
  }
};
</script>
