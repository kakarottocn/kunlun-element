import _Icon from './Icon.vue/index.js'
import { withInstall } from '@kunlun/utils/install'

export const Icon = withInstall(_Icon)

export * from './Icon.ts'

// 支持编译器类型推断
declare module 'vue' {
  export interface GlobalComponents {
    KlIcon: typeof Icon
  }
}
