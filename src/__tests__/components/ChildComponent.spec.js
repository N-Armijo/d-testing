import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ChildComponent.vue', () => {
  it('debería mostrar el mensaje recibido desde el padre', () => {
    const wrapper = mount(ChildComponent, {
      props: {
        mensajePadre: 'Mensaje de prueba'
      }
    })
    expect(wrapper.text()).toContain('Mensaje del padre: Mensaje de prueba')
  })

  it('debería emitir el texto ingresado al hacer clic en el botón', async () => {
    const wrapper = mount(ChildComponent)

    await wrapper.find('input').setValue('texto ingresado')
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('enviar-texto')[0]).toEqual(['texto ingresado'])
  })
})
