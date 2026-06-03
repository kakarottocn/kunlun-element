import _Icon from './icon.vue'
import { withInstall } from '@kunlun/utils/install'

export const Icon = withInstall(_Icon)

export * from './icon.ts'

// 支持编译器类型推断
declare module 'vue' {
  export interface GlobalComponents {
    KlIcon: typeof Icon
  }
}
