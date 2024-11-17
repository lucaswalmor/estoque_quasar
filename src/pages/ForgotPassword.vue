<template>
  <q-page padding>
    <q-form @submit.prevent="handleForgotPassword" class="row justify-center q-pt-lg">
      <p class="col-12 text-center text-h5">Esqueceu sua senha?</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="email" label="Email" />

        <div class="q-pt-md">
          <q-btn color="primary" label="Alterar Senha" class="full-width" type="submit" />
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
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'forgot-password',
  setup() {
    const router = useRouter();
    const { sendPasswordRestEmail } = useAuthUser();

    const email = ref('')

    const handleForgotPassword = async () => {
      await sendPasswordRestEmail(email.value)
      router.push({name: 'login'})
    }

    return {
      email,
      handleForgotPassword,
    }
  }
});
</script>
