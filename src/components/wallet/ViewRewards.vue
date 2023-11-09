<template>
  <div id="viewrewards">
    <div class="wallethttp-center">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <span>{{ $t("lang.Friend") }}：{{ item.user.substr(0,4) + "****" + item.user.substr(38) }}</span>
          <span>{{ $t("lang.Consumption") }}：{{ item.cost / 1000000000000000000 }}</span>
          <span>{{ $t("lang.Splitaccounts") }}：{{ item.inviteReward / 1000000000000000000 }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//封装调用合约
import { connectMetamask, friendsAccount } from "../../abi/index";

export default {
  name: "ViewRewards",
  data() {
    return {
      dataList: [
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
        // {
        //   user: "u19",
        //   cost: "1000",
        //   inviteReward: "999",
        // },
      ],
    };
  },
  methods: {
    //初始化
    async init() {
      await connectMetamask();

      const data = await friendsAccount();
      console.log(data);

      data.forEach((item) => {
        this.dataList.push(item);
      });

    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="less" scoped>
#viewrewards {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 1000px;
  .wallethttp-center {
    padding: 20px 20px;

    background: url("../../assets/img/iamge5.png") no-repeat;
    background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    ul {
      padding: 10px 10px;
      background: rgba(0, 0, 1, 0.7);
      border-radius: 20px;

      display: flex;
      flex-direction: column;
      li {
        margin-bottom: 10px;
        padding: 20px 60px;
        background: url("../../assets/img/iamge5.png") no-repeat;
        background-size: 100% 100%;

        display: flex;
        justify-content: space-between;
        span {
          font-size: 20px;
          color: #ffffff;
          font-family: "JDZY";
        }
      }
    }
  }
}
</style>