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
        <el-form-item label="Primer nombre" prop="firstName">
          <el-input v-model="form.firstName" />
        </el-form-item>
        <el-form-item label="Segundo nombre" prop="secondtName">
          <el-input v-model="form.secondtName" />
        </el-form-item>
        <el-form-item label="Primer apellido" prop="lastName">
          <el-input v-model="form.lastName" />
        </el-form-item>
        <el-form-item label="Segundo apellido" prop="secondLastName">
          <el-input v-model="form.secondLastName" />
        </el-form-item>
        <el-form-item label="F. Nacimiento" prop="dateOfBirth">
          <el-col :span="11">
            <el-date-picker
              v-model="form.dateOfBirth"
              type="date"
              placeholder="Selecciona tu fecha de nacimiento"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Identificación" prop="identification">
          <el-input v-model="form.identification" />
        </el-form-item>
        <el-form-item label="Rol" prop="role">
          <el-select
            v-model="form.role"
            class="m-2"
            placeholder="Selecccione el rol"
            size="large"
          >
            <el-option
              v-for="role in roles"
              :key="role.id"
              :label="role.name"
              :value="role.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="saveUser('registerForm')"
            >Crear</el-button
          >
          <el-button @click="cleanForm">Limpiar</el-button>
          <el-button @click="closeModal">Cancelar</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { postData } from "../../request/request.js";
import { getData } from "../../request/request.js";
import { emitter } from "../../main";

export default {
  name: "CreateUser",
  components: {},
  data() {
    return {
      dialogVisible: false,
      roles: [],
      form: {
        firstName: "",
        secondtName: "",
        lastName: "",
        secondLastName: "",
        role: "",
        dateOfBirth: "",
        email: "",
        identification: "",
      },
      rules: {
        firstName: [
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
        secondLastName: [{}],
        dateOfBirth: [
          {
            type: "date",
            required: true,
            message: "Porfavor ingrese su fecha de nacimiento",
            trigger: "blur",
          },
        ],
        identification: [
          {
            type: "number",
            asyncValidator: this.checkidentIfication,
          },
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "Porfavor asegurese de ingresar un correo válido",
          },
        ],
        role: [
          {
            required: true,
            message: "Por favor seleccione el role",
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

    checkidentIfication(rule, value) {
      const regex = new RegExp("^[0-9]+$");
      return new Promise((resolve, reject) => {
        if (!value) {
          reject("Por favor ingresa tu número de identificación");
          return;
        }
        if (!regex.test(value)) {
          reject("Solo se admiten números");
          return;
        }
        resolve(true);
        return;
      });
    },

    async saveUser(formName) {
      if (!this.$refs[formName]) return;
      const formIsValid = await this.validateForm(formName);
      if (!formIsValid) return;

      try {
        const res = await postData("users", this.form, true);
        emitter.emit("onUpdateData");
        console.log(res);
        this.dialogVisible = false;
      } catch (err) {
        console.log(err);
      }
    },

    async loadRoles() {
      try {
        const response = await getData("users/roles");
        this.roles = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    openModal() {
      this.dialogVisible = true;
      if (!this.$refs["registerForm"]) return;
      this.cleanForm();
    },
    closeModal() {
      if (!this.$refs["registerForm"]) return;
      this.cleanForm();
      this.dialogVisible = false;
    },
    cleanForm() {
      if (!this.$refs["registerForm"]) return;
      !this.$refs["registerForm"].resetFields();
      this.form.firstName = "";
      this.form.secondtName = "";
      this.form.lastName = "";
      this.form.secondLastName = "";
      this.form.dateOfBirth = "";
      this.form.email = "";
      this.form.identification = "";
      this.form.role = "";
      return;
    },
  },
  created() {
    this.loadRoles();
  },
};
</script>
<style scoped></style>
