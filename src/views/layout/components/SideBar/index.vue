<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      class="el-menu-vertical"
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
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
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    permission_routers() {
      console.log(this.$router.options.routes);
      return this.$router.options.routes;
    }
  }
};
</script>

