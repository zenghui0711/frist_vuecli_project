<template>
  <div v-if="!item.hidden&&item.children" class="menu-wrapper">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <router-link :to="{path:onlyOneChild.path}">
        <el-menu-item :index="onlyOneChild.path" :class="'el-menu-oneItem'">
          <i class="el-icon-s-home"></i>
          <span slot="title">{{onlyOneChild.mate.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
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
  mounted() {
    // console.log(this.item);
    // var mm = this.hasOneShowingChild(this.item.children, this.item);
    // console.log("mm", mm);

    // if (
    //   mm &&
    //   (!this.onlyOneChild.children || this.onlyOneChild.noShowingChildren)
    // ) {
    //   console.log("onlyOneChild", this.onlyOneChild.value);
    //   console.log("onlyOneChild2", !this.onlyOneChild.children);
    // }
  },
  methods: {
    hasOneShowingChild(children, parent) {
      var showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });
      console.log("showingChildren", showingChildren);

      if (showingChildren.length === 1 && parent.path == "") {
        return true;
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: "",
          noShowingChildren: true
        };

        return true;
      }
      console.log("this.onlyOneChild", this.onlyOneChild);

      return false;
    }
  }
};
</script>