<template>
  <!-- 导航栏 -->
  <div id="navbar">
    <div class="tabbar-left">
      <img src="../../assets/img/navbar.png" alt="" />
      <!-- 公共封装submenu组件 -->
      <SyqSubmenu :navbarList="navbarList" :activeIndex="activeIndex" class="hidden-xs-only" />
    </div>
    <div class="tabbar-right">
      <!-- <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-button @click="loginAdd">登录</el-button> -->
      <!-- <el-button @click="link">Demo</el-button> -->
      <!-- 全局语言选择器select组件 -->
      <i class="el-icon-menu hidden-sm-and-up" @click="drawer = true"></i>
      <SyqLanguage class="hidden-xs-only" />
      <span
        class="navbar-right-span hidden-xs-only"
        @click="getWallet"
        v-if="wallet === '****'"
        >{{ $t("lang.Wallet") }}</span
      >
      <span class="navbar-right-span2 hidden-xs-only" v-else >{{ wallet + "" }}</span>
    </div>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      direction="ttb"
      :with-header="false">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </el-drawer>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

import SyqSubmenu from "../common/Submenu.vue";
import SyqLanguage from "../common/Language.vue";

//封装调用合约
import { connectMetamask, getPersonalSign } from "../../abi/index";

//接口请求
import { getIndex } from "api/login";
//接口请求
import { postUserinfo } from "api/index";

export default {
  name: "",
  components: {
    SyqSubmenu,
    SyqLanguage,
  },
  data() {
    return {
      drawer: false,
      //用户名
      userName: "james",
      //tabbar数据栏
      navbarList: [],
      //tabbar被选中下标
      activeIndex: "/Home",

      //签名message
      message: "coder-syq-message",

      //钱包地址
      wallet: "",
      addressList: [],
    };
  },
  methods: {
    link() {
      // this.$router.push('/Game/Fighting')
      // window.open("http://mekawarrior.qiniu.gamecf.cn/Knapsack_H5_04/index.html", "_blank");
      window.location.href = "/Knapsack_H5/index.html";
    },

    //导航栏数据同步
    init() {
      var navabr = [
        {
          path: "/Home",
          index: "1",
          name: this.$i18n.t("lang.Frontpage"),
          childList: [],
        },
        {
          path: "",
          index: "2",
          name: this.$i18n.t("lang.Game"),
          childList: [
            {
              // /Null
              path: "/Game/Mech",
              index: "2-1",
              name: this.$i18n.t("lang.Mech"),
            },
            {
              // /Null2
              path: "/Game/Mining",
              index: "2-2",
              name: this.$i18n.t("lang.Mining"),
            },
            {
              // /Null3
              path: "/Game/Fighting",
              index: "2-3",
              name: this.$i18n.t("lang.Fighting"),
            },
            {
              // /Null3
              path: "/Game/State",
              index: "2-4",
              name: this.$i18n.t("lang.Mekastate"),
            },
          ],
        },
        {
          // /Null4
          path: "/NetMarket",
          index: "3",
          name: this.$i18n.t("lang.NETmarket"),
          childList: [],
        },
        {
          // /Null5
          path: "/PlayerMarket",
          index: "4",
          name: this.$i18n.t("lang.Playermarket"),
          childList: [],
        },
        {
          path: "/WhitePaper",
          index: "5",
          name: this.$i18n.t("lang.Whitepaper"),
          childList: [],
        },
        {
          // /Null6
          path: "/Wallet",
          index: "6",
          name: this.$i18n.t("lang.Usercenter"),
          childList: [],
        },
        {
          // /PrivatePlacement
          path: "/Null7",
          index: "7",
          name: this.$i18n.t("lang.Privateplacement"),
          childList: [],
        },
        {
          // / Null6
          path: "/Exchange",
          index: "8",
          name: this.$i18n.t("lang.Exchange"),
          childList: [],
        },
        {
          // /Null7
          path: "/FAQ",
          index: "9",
          name: this.$i18n.t("lang.FAQ"),
          childList: [],
        },
      ];
      this.navbarList = navabr;
    },

    async getLogin(address, sign) {
      await getIndex(address + "", sign.signature, sign.message).then((res) => {
        var metamask = address + "";
        this.wallet = metamask.substr(0, 4) + "****" + metamask.substr(38);

        // this.wallet = address;
        window.sessionStorage.setItem("wallet", address);

        const data = res.data;
        console.log(data);
        //状态码200 (正常)
        if (data.code === 0) {
          //缓存token
          window.sessionStorage.setItem("token", data.data.token);
          window.sessionStorage.setItem("invite", data.data.invite);

          this.$message({
            message: this.$i18n.t("lang.Loginsuccessful"),
            type: "success",
          });

          setTimeout(() => {
            history.go(0);
          }, 1000);
        } else {
          this.$message({
            message: data.msg,
            type: "error",
          });
        }
      });
    },

    //web3连接钱包 签名 登录
    async getWallet() {
      var address = await connectMetamask();

      const status = JSON.parse(window.sessionStorage.getItem(address))
      console.log(status);

      if(status === null) {
        const sign = await getPersonalSign(this.message, address + "");
        console.log(sign);
        window.sessionStorage.setItem(address, JSON.stringify(sign))
        
        await this.getLogin(address, sign);
      }else {
        
        await this.getLogin(address, status);
      }
    },

    async fn() {
      await ethereum.on("accountsChanged", (accounts) => {
        // alert(accounts[0])//一旦切换账号这里就会执行
        this.getWallet();
      });
    },

  },
  mounted() {
    this.fn();
  },
  created() {
    //在下次 DOM 更新循环结束之后执行延迟回调
    this.$nextTick(() => {
      this.init();
    });

    if (
      window.sessionStorage.getItem("wallet") === null ||
      window.sessionStorage.getItem("token") === null
    ) {
      this.getWallet();
    }

    var wallet =
      window.sessionStorage.getItem("wallet") === null
        ? ""
        : window.sessionStorage.getItem("wallet");
    this.wallet = wallet.substr(0, 4) + "****" + wallet.substr(38);

    this.activeIndex =
      window.sessionStorage.getItem("path") === null
        ? "/Home"
        : window.sessionStorage.getItem("path");

    if (
      window.sessionStorage.getItem("path") === "/WhitePaper" ||
      window.sessionStorage.getItem("path") === "/PlayerMarket"
    ) {
      this.activeIndex = "/Home";
    }

    setInterval(async () => {
      await postUserinfo().then((res) => {
        window.sessionStorage.setItem("invite", res.data.data.invite);
      });
    }, 3000);
  },
};
</script>

<style lang="less" scoped>
#navbar {
  background: transparent;
  height: 76px;

  background-image: linear-gradient(black, transparent);
  // opacity: 0.75;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0 10px;

  display: flex;
  .tabbar-left {
    width: 80%;
    display: flex;
    margin-left: 60px;
    // justify-content: center;
    img {
      margin: auto 0;
      margin-right: 30px;
      width: 100px;
      height: 70px;
    }
  }
  .tabbar-right {
    flex: 1;
    display: flex;
    text-align: right;
    justify-content: flex-end;

    margin: auto 0;
    /deep/.el-input {
      width: 150px !important;
    }
    .el-icon-menu {
      font-size: 30px;
    }
    .v-modal {
      z-index: 9 !important;
    }
    /deep/.el-input__inner {
      background: transparent;
      border: none;
      width: 150px !important;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      font-family: "JDZY";
    }
    /deep/.el-button {
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      margin: 0 30px;
    }
    /deep/.el-input__icon {
      line-height: 30px;
    }

    .navbar-right-span {
      margin: auto 20px;
      font-size: 20px;
      font-family: "JDZY";
      color: #ffffff;
      cursor: pointer;
    }
    .navbar-right-span2 {
      width: 150px;
      margin: auto 20px;
      font-size: 20px;
      font-family: "JDZY";
      color: #ffffff;
      cursor: pointer;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .navbar-right-span:hover {
      color: #00e4ff;
    }
  }
}

@media screen and (max-width: 1700px) {
  #navbar {
    background: transparent;
    height: 76px;

    background-image: linear-gradient(black, transparent);
    // opacity: 0.75;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    padding: 0 10px;

    display: flex;
    .tabbar-left {
      width: 80%;
      display: flex;
      margin-left: 0;
      // justify-content: center;
      img {
        margin: auto 0;
        margin-right: 0;
        width: 100px;
        height: 70px;
      }
    }
    .tabbar-right {
      flex: 1;
      display: flex;
      text-align: right;
      justify-content: flex-end;

      margin: auto 0;
      /deep/.el-input {
        width: 150px !important;
      }
      /deep/.el-input__inner {
        background: transparent;
        border: none;
        width: 150px !important;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        font-family: "JDZY";
      }
      /deep/.el-button {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        margin: 0 30px;
      }
      /deep/.el-input__icon {
        line-height: 30px;
      }

      .navbar-right-span {
        margin: auto 20px;
        font-size: 18px;
        font-family: "JDZY";
        color: #ffffff;
        cursor: pointer;
      }
      .navbar-right-span2 {
        width: 130px;
        margin: auto 0;
        font-size: 18px;
        font-family: "JDZY";
        color: #ffffff;
        cursor: pointer;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .navbar-right-span:hover {
        color: #00e4ff;
      }
    }
  }
}
</style>