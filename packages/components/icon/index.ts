import _Icon from './icon.vue'
import { withInstall } from '@kunlun/utils/with-install'

const Icon = withInstall(_Icon)

export default Icon

export * from './icon'

// 支持编译器类型推断
declare module 'vue' {
  export interface GlobalComponents {
    KIcon: typeof Icon
  }
}
