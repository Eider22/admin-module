<template>
  <div class="card-wrap">
    <el-card class="box-card">
      <div class="information-card-wrap">
        <h3 class="title-card">{{ title }}</h3>
        <span class="span-card">{{ description }}</span>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "SimpeCard",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.box-card {
  min-width: 250px;
  max-width: 400px;
  min-height: 100px;
}

.title-card {
  font-weight: 700;
  margin-top: 0;
}

.information-card-wrap {
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.span-card {
  display: block;
}
.card-wrap {
  margin-right: 2rem;
}
</style>
