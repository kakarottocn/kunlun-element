import { makeInstaller } from '@kunlun/utils/install'
import components from './components'
import "@kunlun/theme-chalk/index.css"

const installer = makeInstaller(components)

export * from '@kunlun/components'
export default installer