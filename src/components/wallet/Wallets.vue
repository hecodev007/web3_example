<template>
  <div id="wallets">
    <div class="wallets-top">
      <div
        v-for="(item, index) in titleList"
        :key="index"
        @click="selectClick(item.id)"
        :class="{
          active: selectIndex === item.id,
          ceneter: selectIndex != item.id,
        }"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- 钱包 -->
    <WalletHttp v-if="selectIndex === 0" />
    <!-- 查看奖励 -->
    <ViewRewards v-else-if="selectIndex === 1" />
    <!-- 储值 -->
    <StoredValue v-else-if="selectIndex === 2" />
    <!-- 邀请代码 -->
    <InvitationCode v-else-if="selectIndex === 3" @childClick="childClick" />
    <!-- 底部版权 -->
    <CopyRight />
  </div>
</template>

<script>
import WalletHttp from "./WalletHttp";
import ViewRewards from "./ViewRewards";
import StoredValue from "./StoredValue";
import InvitationCode from "./InvitationCode";
import CopyRight from "../common/CopyRight.vue";

export default {
  name: "Wallets",
  components: {
    WalletHttp,
    ViewRewards,
    StoredValue,
    InvitationCode,
    CopyRight,
  },
  data() {
    return {
      //顶部栏
      titleList: [
        {
          name: this.$i18n.t("lang.Wallets"),
          id: 0,
        },
        {
          name: this.$i18n.t("lang.Storedvalue"),
          id: 2,
        },
        {
          name: this.$i18n.t("lang.Invitationcode"),
          id: 3,
        },
      ],
      //被选择下标
      selectIndex: 0,
      invite: "0",
    };
  },
  methods: {
    //被点击的顶部栏
    selectClick(id) {
      this.selectIndex = id;
    },
    childClick(value) {
      // this.titleList = [
      //  {
      //     name: this.$i18n.t("lang.Wallets"),
      //     id: 0,
      //   },
      //   {
      //     name: this.$i18n.t("lang.Viewrewards"),
      //     id: 1,
      //   },
      //   {
      //     name: this.$i18n.t("lang.Storedvalue"),
      //     id: 2,
      //   },
      //   {
      //     name: this.$i18n.t("lang.Invitationcode"),
      //     id: 3,
      //   }
      // ];
      this.selectIndex = value;
    },
  },
  created() {
    var dataQuery = this.$route.query.code;

    // setInterval(async () => {
    //   this.invite = window.sessionStorage.getItem("invite");
    // }, 1000);

    if (dataQuery != undefined) {
      this.selectIndex = 3;
    }
    // setInterval(() => {
    //   if (this.invite === "1") {
    //     this.titleList = [
    //       {
    //         name: this.$i18n.t("lang.Wallets"),
    //         id: 0,
    //       },
    //       {
    //         name: this.$i18n.t("lang.Storedvalue"),
    //         id: 2,
    //       },
    //       {
    //         name: this.$i18n.t("lang.Invitationcode"),
    //         id: 3,
    //       },
    //     ];
    //   }
    // }, 1000);
  },
};
</script>

<style lang="less" scoped>
#wallets {
  // height: 100%;
  padding-top: 56px;

  background: url("../../assets/img/image2.png") no-repeat;
  background-size: 100% 100%;

  .wallets-top {
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;
    padding-bottom: 50px;

    display: flex;
    justify-content: flex-end;
    .ceneter {
      margin: 0 10px;
      cursor: pointer;

      text-align: center;
      width: 12%;
      padding: 15px 0;
      background: url("../../assets/img/btn-image1.png") no-repeat;
      background-size: 100% 84%;
      background-position-y: 4px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      font-size: 20px;
      // font-weight: bold;
      color: #fefefe;
      font-family: "JDZY";
    }
    .active {
      position: relative;
      top: 5px;

      margin: 0 10px;
      cursor: pointer;

      text-align: center;
      width: 12%;
      padding: 12px 0;
      background: url("../../assets/img/btn-image2.png") no-repeat;
      background-size: 100% 84%;

      font-size: 20px;
      font-weight: bold;
      color: #3a3a3b;
      font-family: "JDZY";
    }
  }
}
</style>