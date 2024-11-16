import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ParentComponent.vue', () => {
  it('debería enviar un mensaje al hijo y recibir el texto de vuelta', async () => {
    const wrapper = mount(ParentComponent)

    
    expect(wrapper.findComponent(ChildComponent).text()).toContain('Hola desde el componente padre')

    const input = wrapper.findComponent(ChildComponent).find('input')
    const button = wrapper.findComponent(ChildComponent).find('button')

    await input.setValue('respuesta desde el hijo')
    await button.trigger('click')

    
    expect(wrapper.text()).toContain('Texto recibido del hijo: respuesta desde el hijo')
  })
})
