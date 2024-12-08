import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { setActivePinia, createPinia } from 'pinia'
import App from '@/App.vue'
import AboutView from '../../views/AboutView.vue'

// Configuración del router para pruebas
describe('Navegación y funcionalidad en AboutView', () => {
  let routerPrueba

  // Inicializar el router antes de las pruebas
  beforeEach(() => {
    routerPrueba = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/about',
          name: 'about',
          component: AboutView
        }
      ]
    })

    setActivePinia(createPinia()) // Activar Pinia para cada test
  })

  it('Navega a la vista AboutView y la renderiza correctamente', async () => {
    routerPrueba.push({ name: 'about' })
    await routerPrueba.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })

    // Verificar que AboutView está montado
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })

  it('Interacciones del contador en AboutView', async () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [createPinia()]
      }
    })

    // Verificar el estado inicial del contador
    expect(wrapper.text()).toContain('Contador: 0')

    // Simular clic en el botón de incrementar
    const incrementarBtn = wrapper.find('button:nth-of-type(2)')
    await incrementarBtn.trigger('click')
    expect(wrapper.text()).toContain('Contador: 1')

    // Simular clic en el botón de decrementar
    const decrementarBtn = wrapper.find('button:nth-of-type(1)')
    await decrementarBtn.trigger('click')
    expect(wrapper.text()).toContain('Contador: 0')
  })
})
