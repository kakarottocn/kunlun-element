/**
 * BEM 类名构建器
 * 保证最终输出顺序确定：基类 → 修饰符（字母序） → 状态类（字母序）
 */

type ModifierInput = string | string[] | Record<string, boolean>;

export class Bem {
  private block: string = '';
  private element: string = '';
  private modifiers: Set<string> = new Set();
  private states: Set<string> = new Set();

  constructor(block: string = '', element: string = '') {
    this.block = block;
    this.element = element;
  }

  b(block: string): this {
    this.block = block;
    this.element = '';
    this.modifiers.clear();
    return this;
  }

  e(element: string): this {
    this.element = element;
    this.modifiers.clear();
    return this;
  }

  m(mod: ModifierInput): this {
    if (!mod) return this;
    if (typeof mod === 'string') {
      if (mod.trim()) this.modifiers.add(mod.trim());
    } else if (Array.isArray(mod)) {
      for (const item of mod) {
        if (item && typeof item === 'string' && item.trim()) {
          this.modifiers.add(item.trim());
        }
      }
    } else {
      for (const [key, value] of Object.entries(mod)) {
        if (value && key && typeof key === 'string' && key.trim()) {
          this.modifiers.add(key.trim());
        }
      }
    }
    return this;
  }

  is(state: string): this {
    if (state && typeof state === 'string' && state.trim()) {
      this.states.add(state.trim());
    }
    return this;
  }

  toString(): string {
    const classes: string[] = [];
    if (this.block) {
      const base = this.element ? `${this.block}__${this.element}` : this.block;
      classes.push(base);
      // 修饰符按字母序排序，保证输出顺序一致
      const sortedMods = Array.from(this.modifiers).sort();
      for (const mod of sortedMods) {
        classes.push(`${base}--${mod}`);
      }
    }
    // 状态类按字母序排序
    const sortedStates = Array.from(this.states).sort();
    for (const state of sortedStates) {
      classes.push(`is-${state}`);
    }
    return classes.join(' ');
  }

  valueOf(): string {
    return this.toString();
  }
}

export function bem(block?: string, element?: string): Bem {
  return new Bem(block, element);
}