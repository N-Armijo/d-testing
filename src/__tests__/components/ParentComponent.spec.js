import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ParentComponent.vue', () => {
  it('debería enviar un mensaje al hijo y recibir el texto de vuelta', async () => {
    const wrapper = mount(ParentComponent)

    // Verificar que el mensaje enviado al hijo se muestra correctamente
    expect(wrapper.findComponent(ChildComponent).text()).toContain('Hola desde el componente padre')

    // Encuentra el input y botón dentro del ChildComponent
    const input = wrapper.findComponent(ChildComponent).find('input')
    const button = wrapper.findComponent(ChildComponent).find('button')

    // Ingresa un texto y dispara el evento
    await input.setValue('respuesta desde el hijo')
    await button.trigger('click')

    // Verifica si el texto emitido se muestra en el padre
    expect(wrapper.text()).toContain('Texto recibido del hijo: respuesta desde el hijo')
  })
})
