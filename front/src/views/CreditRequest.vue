<template>
  <div class="container-wrap">
    <el-container>
      <el-main>
        <div>
          <div class="credit-list-wraper">
            <CreditRequestList/>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CreditRequestList from "../components/credit/CreditRequestList.vue";
import SimpleCard from "../components/SimpleCard.vue";

export default {
  name: "CreditRequest",
  components: {
    CreditRequestList,
    SimpleCard
  },
};
</script>
<style scoped>
.credit-list-wraper {
  margin-top: 2rem;
}

.container-wrap {
  position: sticky;
  top: 0;
  max-height: 80vh;
}
</style>
