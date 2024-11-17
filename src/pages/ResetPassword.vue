<template>
  <q-page padding>
    <q-form @submit.prevent="handlePasswordReset" class="row justify-center q-pt-lg">
      <p class="col-12 text-center text-h5">Resetar Senha</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="password" label="Nova senha" />

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
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'reset-password',
  setup() {
    const { resetPassword } = useAuthUser();
    const router = useRouter();
    const password = ref('')
    const route = useRoute();
    const token = route.query.token

    const handlePasswordReset = async () => {
      await resetPassword(token, password.value)
      router.push({name: 'login'})
    }

    return {
      password,
      handlePasswordReset,
    }
  }
});
</script>
