<template>
  <q-page padding>
    <q-form @submit.prevent="handleLogin" class="row justify-center q-pt-lg">
      <p class="col-12 text-center text-h5">Login</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="form.email" type="email" label="Email" lazy-rules :rules="[val => (val && val.length > 0) || 'Por favor digite o email']" />
        <q-input v-model="form.password" type="password" label="Password" lazy-rules :rules="[val => (val && val.length > 0) || 'Por favor digite a senha']" />

        <div>
          <q-btn size="sm" color="primary" label="Cadastro" flat class="full-width" type="submit" to="/register" />
          <q-btn size="sm" color="primary" label="Esqueceu sua senha?" flat class="full-width" type="submit" :to="{name: 'forgot-password'}" />
        </div>

        <div class="q-pt-xs">
          <q-btn size="sm" color="primary" label="Login" class="full-width" type="submit" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthUser from 'src/composables/useAuthUser';
import useNotify from 'src/composables/useNotify';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();
    const { notifySuccess, notifyDanger } = useNotify();
    const { login, isLoggedIn } = useAuthUser();

    const form = ref({
      email: '',
      password: '',
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({name: 'me'})
      } catch (error) {
        // alert(error.message)
        notifyDanger(error.message)
      }
    }

    onMounted(() => {
      if (isLoggedIn) {
        router.push('/me')
      }
    })

    return {
      form,
      handleLogin,
    }
  }
});
</script>
