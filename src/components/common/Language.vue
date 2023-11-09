<template>
  <div id="language">
    <el-select
      v-model="value"
      :placeholder="$t('lang.Pleaseselectlanguage')"
      @change="changeSelect"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "Language",

  data() {
    return {
      //可选择语言
      options: [],
      //被选中的语言
      value: "",
    };
  },
  methods: {
    init() {
      var option = [
        {
          value: "zh-CN",
          label: this.$i18n.t("lang.Simplifiednoon"),
        },
        {
          value: "en-US",
          label: this.$i18n.t("lang.English"),
        },
        // {
        //   value: "jp-JP",
        //   label: this.$i18n.t("lang.JP"),
        // },
      ];
      this.options = option;
    },

    changeSelect(e) {
      window.sessionStorage.setItem("lang", e);
      this.value = window.sessionStorage.getItem("lang");

      if (this.value === "zh_TW" || this.value === "zh-CN") {
        this.$i18n.locale = "zh-CN";
      } else if (this.value === "en_US" || this.value === "en-US") {
        this.$i18n.locale = "us-US";
      } else if (this.value === "jp_JP" || this.value === "jp-JP") {
        this.$i18n.locale = "jp-JP";
      } else {
        this.$i18n.locale = "us-US";
      }

      this.$router.go(0);
    },
  },
  created() {
    //在下次 DOM 更新循环结束之后执行延迟回调
    this.$nextTick(() => {
      this.init();
    });

    let lang = window.sessionStorage.getItem("lang");
    this.value = lang != null ? lang : 'en-US';
    window.sessionStorage.setItem("lang", this.value);
    // console.log(navigator.language);
    if (
      this.value === "zh_TW" ||
      this.value === "zh-CN" ||
      this.value === "zh-TW"
    ) {
      this.$i18n.locale = "zh-CN";
      this.value = "zh-CN";
    } else if (
      this.value === "en_US" ||
      this.value === "en-US" ||
      this.value === "en"
    ) {
      this.$i18n.locale = "us-US";
      this.value = "en-US";
    } else if (
      this.value === "jp_JP" ||
      this.value === "jp-JP" ||
      this.value === "jp"
    ) {
      this.$i18n.locale = "jp-JP";
      this.value = "jp-JP";
    } else {
      this.$i18n.locale = "us-US";
    }
  },
};
</script>

<style lang="less" scoped>
#language {
}
</style>