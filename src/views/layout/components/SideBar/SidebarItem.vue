<template>
  <div v-if="!item.hidden&&item.children" class="menu-wrapper">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) 
      "
    >
      <router-link :to="{path:onlyOneChild.path}">
        <el-menu-item :index="onlyOneChild.path" :class="'el-menu-oneItem'">
          <i :class="'el-icon-'+onlyOneChild.mate.icon"></i>
          <span slot="title">{{onlyOneChild.mate.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.mate.icon"></i>
        <span slot="title">{{item.mate.title}}</span>
      </template>
      <template v-for="child in item.children">
        <template v-if="!child.hidden">
          <router-link :to="child.path">
            <el-menu-item :index="child.path">
              <!-- {{child.mate.title}} -->
              <i :class="'el-icon-'+child.mate.icon"></i>
              <span slot="title">{{child.mate.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </template>
    </el-submenu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onlyOneChild: {}
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  mounted() {},
  methods: {
    hasOneShowingChild(children, parent) {
      var showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      // console.log("showingChildren", showingChildren);

      if (
        showingChildren.length === 1 &&
        (parent.path == "" || parent.mate.onlyOne)
      ) {
        return true;
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          noShowingChildren: true
        };
        return true;
      }
      // console.log("this.onlyOneChild", this.onlyOneChild);
      return false;
    }
  }
};
</script>