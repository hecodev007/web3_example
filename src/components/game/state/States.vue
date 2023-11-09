<template>
  <div id="states">
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        <img
          src="../../../assets/img/jijia-1.png"
          alt=""
          v-if="item.cover_resource === '1'"
        />
        <img
          src="../../../assets/img/jijia-2.png"
          alt=""
          v-if="item.cover_resource === '2'"
        />
        <img
          src="../../../assets/img/jijia-3.png"
          alt=""
          v-if="item.cover_resource === '3'"
        />
        <img
          src="../../../assets/img/jijia-4.png"
          alt=""
          v-if="item.cover_resource === '4'"
        />
        <img
          src="../../../assets/img/jijia-5.png"
          alt=""
          v-if="item.cover_resource === '5'"
        />
        <span>{{ $t("lang.Mekapower") }}:{{ item.total.sword }}</span>
        <span v-if="item.use_type === 1">{{ $t("lang.State") }}:{{ $t("lang.Battle") }}</span>
        <span v-if="item.use_type === 0">{{ $t("lang.State") }}:{{ $t("lang.Waiting") }}</span>
        <span v-if="item.use_type === 2">{{ $t("lang.State") }}:{{ $t("lang.Miningset") }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
//接口请求
import { postRoleinfo } from "api/index";

export default {
  name: "States",
  data() {
    return {
      dataList: [
        {
          id: 1,
          name: "全能机甲", //机甲名
          en_name: "Mobile Meka",
          user_id: 1,
          use_type: 1, //使用类别 0-未使用 1-上阵，2-质押
          cover_resource: "4",
          total: {
            life: 2940, //每个机甲总生命值
            attack: 1040, //每个机甲总火力值
            armor: 300, //每个机甲总肩甲值
            maneuver: 400, //每个机甲总机动值
            reply: 1800, //每个机甲总回复值
            sword: 14000, //每个机甲总战力值
          },
          create_time: "2022-06-21 17:28:51",
        },
      ],
    };
  },
  methods: {
    init() {
      postRoleinfo(4).then((res) => {
        this.dataList = res.data.data.rows;
      });
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="less" scoped>
#states {
  height: 100%;
  padding-top: 56px;
  padding-bottom: 800px;

  background: url("../../../assets/img/image2.png") no-repeat;
  background-size: 100% 100%;
  ul {
    width: 60%;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    li {
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid #eee;
      border-radius: 25px;
      display: flex;
      img {
          padding: 10px 10px;
          width: 100px;
          height: 100px;
      }
      span {
        margin: auto 50px;
        font-size: 20px;
        color: #ffffff;
        font-family: "JDZY";
      }
    }
  }
}
</style>