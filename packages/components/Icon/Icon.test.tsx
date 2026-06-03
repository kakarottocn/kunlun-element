import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Icon } from './index'
import IconComponent from './Icon.vue/index.js'

describe('Icon', () => {
  it('renders correctly', () => {
    const wrapper = mount(Icon)
    expect(wrapper.find('i').exists()).toBe(true)
  })

  it('has correct default class', () => {
    const wrapper = mount(Icon)
    expect(wrapper.find('i').classes()).toContain('kl-icon')
  })

  it('applies color prop to style', () => {
    const wrapper = mount(Icon, {
      props: {
        color: '#ff0000',
      },
    })
    expect(wrapper.find('i').attributes('style')).toContain('color: rgb(255, 0, 0)')
  })

  it('applies size prop as number to font-size', () => {
    const wrapper = mount(Icon, {
      props: {
        size: 24,
      },
    })
    expect(wrapper.find('i').attributes('style')).toContain('font-size: 24px')
  })

  it('applies size prop as string to font-size', () => {
    const wrapper = mount(Icon, {
      props: {
        size: '32',
      },
    })
    expect(wrapper.find('i').attributes('style')).toContain('font-size: 32px')
  })

  it('renders slot content', () => {
    const wrapper = mount(Icon, {
      slots: {
        default: '<span class="icon-content">icon</span>',
      },
    })
    expect(wrapper.find('.icon-content').exists()).toBe(true)
    expect(wrapper.find('.icon-content').text()).toBe('icon')
  })

  it('has correct component name', () => {
    expect(IconComponent.name).toBe('kl-icon')
  })

  it('can be installed via withInstall', () => {
    const app = {
      component: (name: string, component: any) => {
        expect(name).toBe('kl-icon')
        expect(component).toBe(IconComponent)
      },
    }
    Icon.install!(app as any)
  })
})
