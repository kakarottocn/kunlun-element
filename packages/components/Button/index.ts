import _Button from "./Button.vue";
import _ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from '@xirang/utils/install'

export const Button = withInstall(_Button);
export const ButtonGroup = withInstall(_ButtonGroup);

export * from "./Button.ts";
