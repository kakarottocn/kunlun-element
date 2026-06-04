import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./Button";

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> =
  Symbol("buttonGroupContext");
