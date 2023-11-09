<template>
  <div id="submenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <template v-for="item in navbarList">
        <el-submenu
          v-if="item.childList.length"
          :key="item.index"
          :index="item.path"
          @click="clickMen(item.path)"
        >
          <template slot="title">
            <span @click="clickMen(item.path)">{{ item.name }}</span>
          </template>
          <el-menu-item
            class="el-menu-item-child"
            v-for="item1 in item.childList"
            :key="item1.index"
            :index="item1.path"
            @click="clickMen(item1.path)"
          >
            <span>{{ item1.name }}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :index="item.path"
          :key="item.index"
          @click="clickMen(item.path)"
        >
          {{ item.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Submenu",
  props: {
    navbarList: {
      type: Array,
      default() {
        return [];
      },
    },
    activeIndex: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    clickMen(path) {
      
      if (path === "/WhitePaper") {
        window.open("https://docs.mekawarrior.io", "_blank");
      }

      if (path === "/PlayerMarket") {
        window.open(
          "https://element.market/collections/mekawarrior-nft",
          "_blank"
        );
      }

      window.sessionStorage.setItem("path", path);
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
#submenu {
  font-family: "JDZY";
  display: flex;
  flex-direction: column;
  justify-content: center;
  /deep/.el-menu.el-menu--horizontal {
    border: none;
  }
  /deep/.el-menu {
    font-family: "JDZY";
    font-size: 20px;
    background: transparent;
  }
  /deep/.el-menu-item {
    font-size: 20px;
    padding: 0;
    color: #ffffff;
  }
  /deep/.is-opened .el-submenu__title {
    background: transparent;
    color: #ffffff;
  }
  /deep/.el-submenu .el-submenu__title:hover {
    background: transparent;
    color: #ffffff;
  }
  /deep/.el-menu-item:hover {
    background: transparent;
  }
  /deep/.el-menu--horizontal > .el-menu-item {
    margin: 0 20px;
  }
  /deep/.el-submenu__title {
    padding: 0;
    margin: 0 20px;
  }
  /deep/.el-menu--horizontal > .el-menu-item {
    background: transparent;
    color: #ffffff;
    height: 56px;
    line-height: 56px;
  }
  /deep/.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 56px;
    line-height: 56px;
  }
  /deep/.el-menu--horizontal .el-menu .el-menu-item.is-active {
    color: #ffffff !important;
  }
  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    color: #ffffff;
  }
  .el-menu-item-child {
    background: transparent;
  }
}
@media screen and (max-width: 1700px) {
  #submenu {
    font-family: "JDZY";
    display: flex;
    flex-direction: column;
    justify-content: center;
    /deep/.el-menu.el-menu--horizontal {
      border: none;
    }
    /deep/.el-menu {
      font-family: "JDZY";
      font-size: 18px;
      background: transparent;
    }
    /deep/.el-menu-item {
      font-size: 18px;
      padding: 0;
      color: #ffffff;
    }
    /deep/.is-opened .el-submenu__title {
      background: transparent;
      color: #ffffff;
    }
    /deep/.el-submenu .el-submenu__title:hover {
      background: transparent;
      color: #ffffff;
    }
    /deep/.el-menu-item:hover {
      background: transparent;
    }
    /deep/.el-menu--horizontal > .el-menu-item {
      margin: 0 15px;
    }
    /deep/.el-submenu__title {
      padding: 0;
      margin: 0 20px;
    }
    /deep/.el-menu--horizontal > .el-menu-item {
      background: transparent;
      color: #ffffff;
      height: 56px;
      line-height: 56px;
    }
    /deep/.el-menu--horizontal > .el-submenu .el-submenu__title {
      height: 56px;
      line-height: 56px;
    }
    /deep/.el-menu--horizontal .el-menu .el-menu-item.is-active {
      color: #ffffff !important;
    }
    .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
      color: #ffffff;
    }
    .el-menu-item-child {
      background: transparent;
    }
  }
}
</style>