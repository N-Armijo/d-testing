// __tests__/HomeView.spec.js
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue'; // ajustar ruta a componente HomeView
import ParentComponent from '@/components/ParentComponent.vue'; // ajustar ruta a componente ParentComponent

describe('HomeView.vue', () => {
  it('debe hacer render del ParentComponent', () => {
    // montar componente HomeView
    const wrapper = shallowMount(HomeView);

    // verificar ParentComponent se ha renderizado en DOM
    expect(wrapper.findComponent(ParentComponent).exists()).toBe(true);
  });
});
