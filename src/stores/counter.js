import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    console.log('TODO:')
    count.value++
    console.log('count.value:', count.value)
    
  }

  return { count, doubleCount, increment }
})
