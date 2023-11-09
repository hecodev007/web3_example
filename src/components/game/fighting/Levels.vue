<template>
  <div id="levels">
    <div class="levels-center-num">
      <div class="levels-center-div">
        <img src="../../../assets/img/levels-energy.png" alt="" />
        <span>1119</span>
      </div>
    </div>
    <div class="levels-center">
      <ul>
        <li v-for="item in dataList" :key="item.name" @click="combatreaClick(item.name)">
          <div v-if="item.status.value === 1">
            <img src="../../../assets/img/levels-new.png" alt="" />
            <span>{{ item.name }}</span>
          </div>
          <div v-if="item.status.value === 0">
            <img src="../../../assets/img/levels-old.png" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Levels",
  data() {
    return {
      dataList: [
        {
          name: 1,
          status: {
            value: 1,
            title: "开放",
          },
        },
        {
          name: 2,
          status: {
            value: 1,
            title: "开放",
          },
        },
        {
          name: 3,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 4,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 5,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 6,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 7,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 8,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 9,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 10,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 11,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 12,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 13,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 14,
          status: {
            value: 0,
            title: "未开放",
          },
        },
        {
          name: 15,
          status: {
            value: 0,
            title: "未开放",
          },
        },
      ],
    };
  },
  methods: {
    combatreaClick(value) {
      this.$router.push({
        path: "/Game/CombatRea",
        query: { id: value },
      });
    }
  },
};
</script>

<style lang="less" scoped>
#levels {
  padding-top: 56px;
  padding-bottom: 150px;

  background: url("../../../assets/img/image-back23.png") no-repeat;
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
        color: #FFFFFF;
        font-size: 18px;
        font-family: "JDZY";
      }
    }
  }
  .levels-center {
    // height: 100%;
    width: 80%;
    height: 700px;
    margin: 150px auto;
    margin-bottom: 0;

    background: url("../../../assets/img/image-levels.png") no-repeat;
    background-size: 100% 100%;

    ul {
      width: 100%;
      // height: 100%;
      li {
        img {
        }
        span {
          padding: 25px 30px;
          color: #3a3a3b;
          font-size: 18px;
          font-weight: bold;
          font-family: "JDZY";

          background: url("../../../assets/img/levels.back.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    ul li:nth-child(1) {
      img {
        position: relative;
        top: 530px;
        left: 3%;
      }
      span {
        position: relative;
        top: 555px;
        left: -6%;
      }
    }
    ul li:nth-child(2) {
      img {
        position: relative;
        top: 477px;
        left: 30%;
      }
      span {
        position: relative;
        top: 500px;
        left: 21%;
      }
    }
    ul li:nth-child(3) {
      img {
        position: relative;
        top: 520px;
        left: 48%;
      }
      span {
        position: relative;
        top: 540px;
        left: 43%;
      }
    }
    ul li:nth-child(4) {
      img {
        position: relative;
        top: 210px;
        left: 38%;
      }
      span {
        position: relative;
        top: 255px;
        left: 33%;
      }
    }
    ul li:nth-child(5) {
      img {
        position: relative;
        top: 10px;
        left: 20%;
      }
      span {
        position: relative;
        top: 100px;
        left: 13%;
      }
    }
    ul li:nth-child(6) {
      img {
        position: relative;
        top: -300px;
        left: 0%;
      }
      span {
        position: relative;
        top: -170px;
        left: -5%;
      }
    }
    ul li:nth-child(7) {
      img {
        position: relative;
        top: -530px;
        left: 28%;
      }
      span {
        position: relative;
        top: -365px;
        left: 23%;
      }
    }
    ul li:nth-child(8) {
      img {
        position: relative;
        top: -370px;
        left: 43%;
      }
      span {
        position: relative;
        top: -160px;
        left: 38%;
      }
    }
    ul li:nth-child(9) {
      img {
        position: relative;
        top: -200px;
        left: 67%;
      }
      span {
        position: relative;
        top: 50px;
        left: 62%;
      }
    }
    ul li:nth-child(10) {
      img {
        position: relative;
        top: -130px;
        left: 76%;
      }
      span {
        position: relative;
        top: 165px;
        left: 70%;
      }
    }
    ul li:nth-child(11) {
      img {
        position: relative;
        top: -450px;
        left: 85%;
      }
      span {
        position: relative;
        top: -100px;
        left: 80%;
      }
    }
    ul li:nth-child(12) {
      img {
        position: relative;
        top: -770px;
        left: 73%;
      }
      span {
        position: relative;
        top: -385px;
        left: 68%;
      }
    }
    ul li:nth-child(13) {
      img {
        position: relative;
        top: -980px;
        left: 59%;
      }
      span {
        position: relative;
        top: -550px;
        left: 54%;
      }
    }
    ul li:nth-child(14) {
      img {
        position: relative;
        top: -1200px;
        left: 73%;
      }
      span {
        position: relative;
        top: -737px;
        left: 66%;
      }
    }
    ul li:nth-child(15) {
      img {
        position: relative;
        top: -1130px;
        left: 97%;
      }
      span {
        position: relative;
        top: -600px;
        left: 92%;
      }
    }
  }
}
</style>