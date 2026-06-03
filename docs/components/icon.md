# Icon 图标

基于字体图标和 SVG 的图标组件，支持 `iconfont` 和 `Font Awesome` 两种图标体系，提供颜色、尺寸自定义能力。

## 基础用法

:::preview
demo-preview=../demo/icon/basis.vue
:::

## Font Awesome 图标

当传入fa-icon时，使用 `fortawesome` 图标，通过 `fa-icon` 属性传入 Font Awesome 图标对象。

:::preview
demo-preview=../demo/icon/fortawesome.vue
:::

## 使用插槽

通过默认插槽插入自定义 SVG 或 HTML 内容，覆盖默认图标渲染。

:::demo
icon/slot
:::

## Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `name` | 图标名称（`iconfont` 模式下使用） | `string` | — |
| `fa-icon` | Font Awesome 图标对象（`fortawesome` 模式下使用） | `IconDefinition` | — |
| `size` | 图标尺寸，数字默认单位为 `px` | `number \| string` | `inherit` |
| `color` | 图标颜色，支持任意 CSS 颜色值 | `string` | `inherit` |
| `namespace` | 图标库命名空间 | `'iconfont' \| 'fortawesome'` | `'iconfont'` |

### color 详细说明

| 传入值 | 效果 |
|--------|------|
| `#ff0000` | 十六进制红色 |
| `rgb(255, 0, 0)` | RGB 格式 |
| `var(--primary-color)` | CSS 变量，跟随主题切换 |
| `inherit` | 继承父元素颜色（默认） |

### size 详细说明

| 传入值 | 效果 |
|--------|------|
| `24` | 数字，自动转换为 `24px` |
| `'32'` | 数字字符串，转换为 `32px` |
| `'2em'` | 带单位的字符串，原样使用 |
| `'1.5rem'` | 带单位的字符串，原样使用 |

## 类型声明

```ts
import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
import type { IconProps } from '@xirang/components'

interface IconProps {
  name?: string
  faIcon?: IconDefinition
  size?: number | string
  color?: string
  namespace?: 'iconfont' | 'fortawesome'
}