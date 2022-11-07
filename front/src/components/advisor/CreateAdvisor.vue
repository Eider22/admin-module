<template>
  <div>
    <div>
      <el-button type="primary" @click="openModal()"
        ><i class="fa-solid fa-plus"></i
      ></el-button>
    </div>
    <el-dialog v-model="dialogVisible" width="55%" title="Crear cliente">
      <el-form
        ref="registerForm"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="Primer nombre" prop="fisrtsName">
          <el-input v-model="form.fisrtsName" />
        </el-form-item>
        <el-form-item label="Segundo nombre" prop="secondtName">
          <el-input v-model="form.secondtName" />
        </el-form-item>
        <el-form-item label="Apellido" prop="lastName">
          <el-input v-model="form.lastName" />
        </el-form-item>
        <el-form-item label="Edad" prop="age">
          <el-input v-model="form.age" />
        </el-form-item>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="form.email" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="saveAdvisor('registerForm')"
            >Crear</el-button
          >
          <el-button @click="resetForm('registerForm')">Limpiar</el-button>
          <el-button>Cancelar</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import {postData} from "../../request/request.js";

export default {
  name: "CreateAdvisor",
  components: {},
  data() {
    return {
      dialogVisible: false,
      form: {
        fisrtsName: "",
        secondtName: "",
        lastName: "",
        age: "",
        email: "",
      },
      rules: {
        fisrtsName: [
          {
            required: true,
            message: "Porfavor ingrese su nombre",
            trigger: "blur",
          },
        ],
        secondtName: [
          {
            message: "Porfavor ingrese su segundo nombre",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Porfavor ingrese su apellido",
            trigger: "blur",
          },
        ],
        age: [
          {
            type: "number",
            asyncValidator: this.checkAge,
          },
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "Porfavor ingrese su email",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async validateForm(formName) {
      let res;
      await this.$refs[formName].validate((valid) => {
        res = valid;
      });
      return res;
    },

    checkAge(rule, value) {
      const regex = new RegExp("^[0-9]+$");
      return new Promise((resolve, reject) => {
        if (!value) {
          reject("Por favor ingresa tu edad");
          return;
        }
        if (!regex.test(value)) {
          reject("Debe ser un número");
          return;
        }
        if (value < 18) {
          reject("Tu edad debe ser mayor a 18");
          return;
        }
        resolve(true);
        return;
      });
    },

    async saveAdvisor(formName) {
      if (!this.$refs[formName]) return;
      const formIsValid = await this.validateForm(formName);
      if (!formIsValid) return;
      console.log("pasó la validación");
      const res = await postData('advisors', this.form, true);
      console.log(res);
      this.dialogVisible = false;
      
    },

    resetForm(formName) {
      if (!this.$refs[formName]) return;
      !this.$refs[formName].resetFields();
    },

    openModal() {
      this.dialogVisible = true;
      this.cleanForm();
    },
    cleanForm() {
      this.active = 0;
      let form = this.$refs["form"];
      if (form) {
        form.resetFields();
      }

      this.form.fisrtsName = "";
      this.form.secondtName = "";
      this.form.lastName = "";
      this.form.age = "";
      this.form.email = "";
    },
  },
};
</script>
<style scoped></style>
