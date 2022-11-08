<template>
  <div class="ul-wraper">
    <ul class="ul">
      <li v-for="item in itemsMenu" :key="item.id" class="li">
        <router-link tag="a" :to="{ name: item.pathName }">
          <span class="item-name">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideNav",
  data() {
    return {
      itemsMenu: [
        {
          id: 1,
          iconName: "",
          label: "Usuarios",
          pathName: "User",
        },
        {
          id: 2,
          iconName: "",
          label: "Mi ahorro mensual",
          pathName: "MonthlySaving",
        },
        {
          id: 2,
          iconName: "",
          label: "Crowd funding",
          pathName: "CrowdFunding",
        },
      ],
    };
  },
  methods: {
    isSelected() {
      let path = this.$route.fullPath;
      console.log("Path → ", path);
    },
  },
};
</script>
<style scoped>
.ul-wraper {
  margin-top: 3rem;
  margin-right: 0.5rem;
  height: 100%;
}
.item-name {
  color: #ffff;
  font-size: 1.2rem;
  font-family: inherit;
  width: 100%;
}

.li {
  list-style: none;
  margin-top: 1rem;
}

.li:hover {
  border-bottom: var(--color-gray-transparent) 0.5px solid;
}

.li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
}
</style>
