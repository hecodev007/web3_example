<template>
  <div id="privateplacements">
    <div class="privateplacements-center">
      <ul>
        <li v-for="(item, index) in titleList" :key="index" @click="selectClick(item.id)">
          {{ item.name }}
        </li>
      </ul>

      <Buy v-if="selectIndex === 0"/>
      
      <Receive v-else/>

    </div>
  </div>
</template>

<script>
import Buy from "./Buy.vue"
import Receive from "./Receive.vue"

export default {
  name: "PrivatePlacements",
  components: {
    Buy,
    Receive
  },
  data() {
    return {
      titleList: [
        {
          id: 0,
          name: "购买",
        },
        {
          id: 1,
          name: "领取",
        },
      ],
      
      selectIndex: 0
    };
  },
  methods: {
    selectClick(id) {
      this.selectIndex = id
    }
  },
};
</script>

<style lang="less" scoped>
#privateplacements {
  padding-bottom: 200px;
  padding-top: 56px;

  background: url("../../assets/img/image2.png") no-repeat;
  background-size: 100% 100%;
  .privateplacements-center {
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
    ul {
      display: flex;
      justify-content: flex-end;
      li {
        margin: 0 10px;
        border-radius: 5px;
        background: #468b9e;
        padding: 10px 40px;

        color: #ffffff;
        font-size: 18px;
        font-family: "JDZY";
      }
    }
    
  }
}
</style>