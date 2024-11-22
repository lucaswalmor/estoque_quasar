import { useQuasar } from 'quasar'

export default function useNotify() {
  const $q = useQuasar();

  return {
    notifySuccess (message) {
      $q.notify({
        type: 'positive',
        message: message
      })
    },
    notifyDanger (message) {
      $q.notify({
        type: 'negative',
        message: message
      })
    },
  }
}
