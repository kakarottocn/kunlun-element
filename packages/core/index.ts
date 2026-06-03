import { makeInstaller } from '@xirang/utils/install'
import components from './components'
import "@xirang/theme-chalk/index.css"

const installer = makeInstaller(components)

export * from '../components'
export default installer