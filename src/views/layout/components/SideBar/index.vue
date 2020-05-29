<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="sidebar.opened"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item
        v-for="route in permission_routers"
        :key="route.path"
        :item="route"
        :basePath="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script>
import SidebarItem from "./SidebarItem";

export default {
  components: { SidebarItem },
  computed: {
    permission_routers() {
      console.log(this.$router.options.routes);
      return this.$router.options.routes;
    },
    sidebar() {
      return { opened: this.$parent.isCollapse };
    }
  }
};
</script>

