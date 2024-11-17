<template>
  <q-page padding>
    <q-form @submit.prevent="handleLogin" class="row justify-center q-pt-lg">
      <p class="col-12 text-center text-h5">Login</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="form.email" label="Email" />
        <q-input v-model="form.password" label="Password" />

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
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthUser from 'src/composables/useAuthUser';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();
    const { login } = useAuthUser();

    const form = ref({
      email: '',
      password: '',
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({name: 'me'})
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin,
    }
  }
});
</script>
