<template>
  <q-page padding>
    <q-form @submit.prevent="handleRegister" class="row justify-center q-pt-lg">
      <p class="col-12 text-center text-h5">Cadastro</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="form.name" label="Nome" lazy-rules :rules="[val => (val && val.length > 0) || 'Por favor digite o Nome']" />
        <q-input v-model="form.email" type="email" label="Email" lazy-rules :rules="[val => (val && val.length > 0) || 'Por favor digite o email']" />
        <q-input v-model="form.password" type="password" label="Password" lazy-rules :rules="[val => (val && val.length > 0) || 'Por favor digite o password']" />

        <div class="q-pt-md">
          <q-btn color="primary" label="Register" class="full-width" type="submit" />
        </div>

        <div class="q-pt-sm">
          <q-btn color="dark" label="Voltar" flat class="full-width" type="submit" to="/login" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import useAuthUser from 'src/composables/useAuthUser';
import useNotify from 'src/composables/useNotify';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'register',
  setup() {
    const router = useRouter();
    const { register } = useAuthUser();
    const { notifySuccess, notifyDanger } = useNotify();

    const form = ref({
      name: '',
      email: '',
      password: '',
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess('Cadastro Realizado com sucesso');
        router.push({name: 'email-confirmation', query: {email: form.value.email}})
      } catch (error) {
        notifyDanger(error.message)
      }
    }

    return {
      form,
      handleRegister,
    }
  }
});
</script>
