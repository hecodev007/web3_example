<template>
  <div id="roleconsumes">
    <div class="levels-center-num">
      <div class="levels-center-div">
        <img src="../../../assets/img/levels-energy.png" alt="" />
        <span>1119</span>
      </div>
    </div>
    <div class="levels-center">
      <div class="levels-center-back">
        <p>{{ $t("lang.Return") }}</p>
        <ul>
          <li v-for="item in dataList" :key="item">
            <div>
              <a href="javascript:void(0)">{{ $t("lang.Combatpowers") }}:{{ item.num }}</a>
              <img src="../../../assets/img/home-back3.png" alt="" />
            </div>
            <span v-if="item.status.value === 0" class="span1">{{ item.status.title }}</span>
            <span v-else class="span2">{{ item.status.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roleconsumes",
  data() {
    return {
      dataList: [
        {
          num: 99999,
          status: {
            value: 0,
            title: this.$i18n.t("lang.Chosen"),
          },
        },
        {
          num: 99999,
          status: {
            value: 1,
            title: this.$i18n.t("lang.Choose"),
          },
        },
        {
          num: 99999,
          status: {
            value: 1,
            title: this.$i18n.t("lang.Choose"),
          },
        },
        {
          num: 99999,
          status: {
            value: 1,
            title: this.$i18n.t("lang.Choose"),
          },
        },
        {
          num: 99999,
          status: {
            value: 1,
            title: this.$i18n.t("lang.Choose"),
          },
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
#roleconsumes {
  padding-top: 56px;
  padding-bottom: 150px;

  background: url("../../../assets/img/levels-back-image.png") no-repeat;
  background-size: 100% 100%;
  .levels-center-num {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    .levels-center-div {
      margin-top: 50px;
      width: 90px;
      padding: 5px 5px;
      display: flex;
      justify-content: space-evenly;

      background: url("../../../assets/img/levels-back.png") no-repeat;
      background-size: 100% 100%;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        color: #ffffff;
        font-size: 18px;
        font-family: "JDZY";
      }
    }
  }
  .levels-center {
    width: 80%;
    height: 700px;
    margin: 150px auto;
    margin-bottom: 0;

    background: url("../../../assets/img/levels-back-center-b.png") no-repeat;
    background-size: 100% 100%;
    .levels-center-back {
      //   padding: 30px 30px;
      margin: 3px 3px;
      height: 100%;

      background: url("../../../assets/img/levels-back-center.png") no-repeat;
      background-size: 100% 100%;

      display: flex;
      flex-direction: column;
      p {
        position: relative;
        top: -10px;
        text-align: center;
        width: 10%;
        margin-top: 10px;
        padding: 10px 20px;
        color: #3a3a3b;
        font-size: 20px;
        font-weight: bold;
        font-family: "JDZY";

        background: url("../../../assets/img/btn-image2.png") no-repeat;
        background-size: 100% 100%;
      }
      ul {
        margin: auto 0;
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        li {
          margin: 0 15px;
          width: 12%;
          display: flex;
          flex-direction: column;
          div {
            width: 100%;
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;

            background: url("../../../assets/img/levels-consume-item.png")
              no-repeat;
            background-size: 100% 100%;
            img {
              width: 100%;
              height: 100%;
            }
            a {
              position: absolute;
              bottom: 0;
              right: 0;
              left: 0;

              padding: 10px 10px;
              margin: 5px 10px;
              text-align: center;
              background: url("../../../assets/img/levels-back-op.png");
              background-size: 100% 100%;
              color: #ffffff;
              font-size: 18px;
              font-family: "JDZY";
            }
          }
          .span2 {
            text-align: center;
            margin-top: 10px;
            padding: 10px 20px;
            color: #3a3a3b;
            font-size: 20px;
            font-weight: bold;
            font-family: "JDZY";

            background: url("../../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 100%;
          }
          .span1 {
            text-align: center;
            margin-top: 10px;
            padding: 10px 20px;
            color: #FFFFFF;
            font-size: 20px;
            font-weight: bold;
            font-family: "JDZY";

            background: url("../../../assets/img/btn-image1.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>