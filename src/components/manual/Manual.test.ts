import { mount } from '@vue/test-utils'
import OnDemand from './index.vue'

describe('on demand', () => {
  it('should work', () => {
    const wrapper = mount(OnDemand, {
      attachTo: document.body,
    })
    const canvas = wrapper.find('canvas')
    expect(canvas).toBeDefined()
    console.log(canvas.attributes('__spector_context_type'))
    /* const canvas = wrapper.find('canvas')

        expect(canvas.attributes('__spector_context_type')).toBe('webgl2') */
  })
})
