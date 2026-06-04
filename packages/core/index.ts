import { makeInstaller } from '@xirang/utils/install'
import components from './components'
import "@xirang/theme-chalk/index.css"

const installer = makeInstaller(components)

// export * from '@xirang/components' // 打包产物路径指向不对
 export * from '../components'
export default installer