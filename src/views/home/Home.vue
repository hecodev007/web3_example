<template>
  <!-- 首页 -->
  <div id="home">
    <!-- 导航栏 -->
    <NavBar />

    <div class="home-center">
      <ul>
        <li @click="linkClick(0)">
          <img src="../../assets/img/home-f.png" alt="" />
        </li>
        <li @click="linkClick(1)">
          <img src="../../assets/img/home-t.png" alt="" />
        </li>
        <li @click="linkClick(2)">
          <img src="../../assets/img/home-p.png" alt="" />
        </li>
      </ul>
    </div>

    <!-- 内容 -->
    <Homes />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Homes from "../../components/home/Homes.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Homes,
  },
  data() {
    return {};
  },
  methods: {
    linkClick(value) {
      if (value === 0) {
        window.open("https://t.me/MekaWarrior", "_blank");
      } else if (value === 1) {
        window.open("https://twitter.com/Mekawarrior", "_blank");
      } else {
        window.open("https://discord.gg/ESfxGs79", "_blank");
      }
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  .home-center {
    position: fixed;
    right: 30px;
    top: 40%;
    z-index: 999;
    ul {
      padding: 10px 10px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50px;
      display: flex;
      flex-direction: column;
      li {
        margin: 10px 0;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    ul li:nth-child(2) img {
      width: 40px;
      height: 30px;
    }
    ul li:nth-child(3) img {
      width: 40px;
      height: 35px;
    }
  }
}
</style>