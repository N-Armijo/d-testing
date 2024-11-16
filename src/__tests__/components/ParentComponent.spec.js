import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ParentComponent.vue', () => {
  it('debería enviar un mensaje al hijo y recibir el texto de vuelta', async () => {
    const wrapper = mount(ParentComponent)
    expect(wrapper.findComponent(ChildComponent).text()).toContain('Mensaje del padre:')

    const inputPadre = wrapper.find('input')
    await inputPadre.setValue('Hola desde el padre')

    expect(wrapper.findComponent(ChildComponent).text()).toContain('Mensaje del padre: Hola desde el padre')

    const inputHijo = wrapper.findComponent(ChildComponent).find('input')
    const buttonHijo = wrapper.findComponent(ChildComponent).find('button')
    await inputHijo.setValue('respuesta desde el hijo')
    await buttonHijo.trigger('click')

    expect(wrapper.text()).toContain('Mensaje recibido del hijo: respuesta desde el hijo')
  })
})
