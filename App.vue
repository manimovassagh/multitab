<template>
  <div class="content">
    <vue-tabs-chrome
      ref="tab"
      :minHiddenWidth="120"
      v-model="tab"
      :tabs="tabs"
      @contextmenu="handleClick"
    />
    <div class="btns">
      <button @click="addTab">New Tab</button>
      
    </div>
  </div>
</template>

<script>
import VueTabsChrome from "vue-tabs-chrome";
export default {
  components: {
    VueTabsChrome,
  },
  data() {
    return {
      tab: "/home",
      tabs: [
        {
          label: "Home",
          key: "/home",
        },
        {
          label: "About",
          key: "/about",
        },
      ],
    };
  },
  methods: {
    addTab() {
      let item = "/home"+ Date.now();
      let newTabs = [
        {
          label: "New Tab",
          key: item,
        },
      ];
      this.$refs.tab.addTab(...newTabs);
      this.tab = item;
    },
    removeTab() {
      this.$refs.tab.removeTab(this.tab);
    },
    handleClick(e, tab, i) {
      console.log(e, tab, i);
    },
  },
   watch: {
    tab: {
      handler(value) {
        this.$router.push(value);
      },
      immediate: true,
    },
  },
};
</script>
