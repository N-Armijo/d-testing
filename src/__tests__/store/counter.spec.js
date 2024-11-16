import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('useCounter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contador inicial 0', () => {
    const counterStore = useCounterStore()

    expect(counterStore.count).toBe(0)
  })
  it('Verificar que puede aumentar y disminuir el contador', () => {
    const counterStore = useCounterStore()

    //suma 1
    counterStore.increment()
    expect(counterStore.count).toBe(1)

    //disminuye 1
    counterStore.decrement()
    expect(counterStore.count).toBe(0)
  })
})
