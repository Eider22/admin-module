<template>
  <div class="ul-wraper">
    <ul class="ul">
      <li
        v-for="item in itemsMenu"
        :key="item.id"
        class="li"
        v-bind:class="{ selected: isSelected(item.path) }"
      >
      <span class="icon">
        <i :class="item.iconName"></i>
      </span>
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
          iconName: "fa-solid fa-user",
          label: "Usuarios",
          pathName: "User",
          path: "/users",
        },
        {
          id: 2,
          iconName: "fa-solid fa-sack-dollar",
          label: "Mi ahorro mensual",
          pathName: "MonthlySaving",
          path: "/partner/monthly-saving",
        },
        {
          id: 3,
          iconName: "fa-solid fa-building",
          label: "Crowd funding",
          pathName: "CrowdFunding",
          path: "/partner/crowd-funding",
        },
        {
          id: 4,
          iconName: "fa-solid fa-money-check-dollar",
          label: "Mis créditos",
          pathName: "Credit",
          path: "/partner/credits",
        },
        {
          id: 5,
          iconName: "fa-solid fa-code-pull-request",
          label: "Solicitudes de crédito",
          pathName: "CreditRequest",
          path: "/advisor/credit-request",
        },
      ],
    };
  },
  methods: {
    isSelected(path) {
      let currentPath = this.$route.fullPath;
      if (path === currentPath) return true;
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
  display: block;
  width: 100%;

}

.li {
  list-style: none;
  margin-top: 1rem;
  width: 90%;
  display: flex;
}

.li:hover {
  border-bottom: var(--color-gray-transparent) 0.5px solid;
}

.li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
}

.selected {
  transition: 1.3s;
  border-bottom: var(--color-gray-transparent) 0.5px solid;
  color: #ffff;
}

.icon {
  margin-right: 10px;
}
</style>
