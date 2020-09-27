<template>
  <div class="hello">
    <input v-model="email" placeholder="Email" type="text" />
    <br />
    <input v-model="senha" placeholder="Senha" type="text" />
    <br />
    <br />
    <button @click="realizarCadastro()">Cadastrar</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return { email: null, senha: null };
  },
  methods: {
    realizarCadastro() {
      if (!this.email || !this.senha)
        alert('Por favor, preencha email e senha.')
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.senha)
          .then((res) => {
            alert("Cadastro Realizado");
            this.$router.push({name:'login'})
            console.log(res);
          })
          .catch(function (error) {
            alert("Cadastro Incorreto - " + error.message);
            console.log(error);
          });
    },
  },
  name: "siginUp",
  props: {
    msg: String,
  },
};
</script>