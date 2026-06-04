import type { Icon } from './Icon'
import type { Button, ButtonGroup } from './Button'

export * from './Icon'
export * from './Button'

// 支持编译器类型推断
declare module 'vue' {
  export interface GlobalComponents {
    KlIcon: typeof Icon
    KlButton: typeof Button
    KlBUttonGroup: typeof ButtonGroup
  }
}
