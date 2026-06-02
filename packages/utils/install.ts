import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin

export function withInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const {name} = component as unknown as { name: string } 
    app.component(name, component as Plugin);
  };
  return component as SFCWithInstall<T>;
}

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => components.forEach(item => app.use(item))

  return installer as Plugin
}