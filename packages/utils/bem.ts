/**
 * BEM 类名构建器（支持前缀 & 无 block 场景）
 * - 前缀默认 'el-'，可通过构造函数或 .prefix() 修改
 * - 若无 block 仅有 element，则 element 作为普通类名输出（无前缀）
 * - 修饰符和状态类按字母序排序，输出顺序恒为：基类 → 修饰符 → 状态类
 */

type ModifierInput = string | string[] | Record<string, boolean>;

export class Bem {
  private block: string = '';
  private element: string = '';
  private modifiers: Set<string> = new Set();
  private states: Set<string> = new Set();
  private prefix: string;

  constructor(block: string = '', element: string = '', prefix: string = 'zx-') {
    this.block = block;
    this.element = element;
    this.prefix = prefix;
  }

  /** 设置块名（清空元素和修饰符） */
  b(block: string): this {
    this.block = block;
    this.element = '';
    this.modifiers.clear();
    return this;
  }

  /** 设置元素名（清空修饰符） */
  e(element: string): this {
    this.element = element;
    this.modifiers.clear();
    return this;
  }

  /** 添加修饰符 */
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

  /** 添加独立状态类 is-xxx */
  is(state: string): this {
    if (state && typeof state === 'string' && state.trim()) {
      this.states.add(state.trim());
    }
    return this;
  }

  /** 设置前缀（链式） */
  setPrefix(p: string): this {
    this.prefix = p;
    return this;
  }

  toString(): string {
    const classes: string[] = [];

    // 1. 决定基类
    let base: string;
    if (this.block) {
      const prefixedBlock = this.prefix + this.block;
      base = this.element ? `${prefixedBlock}__${this.element}` : prefixedBlock;
      classes.push(base);
      // 修饰符（按字母序）
      const sortedMods = Array.from(this.modifiers).sort();
      for (const mod of sortedMods) {
        classes.push(`${base}--${mod}`);
      }
    } else if (this.element) {
      // 无 block，仅 element → 直接输出 element（无前缀）
      base = this.element;
      classes.push(base);
      const sortedMods = Array.from(this.modifiers).sort();
      for (const mod of sortedMods) {
        // 此时修饰符也基于 element 本身
        classes.push(`${base}--${mod}`);
      }
    }
    // 无 block 且无 element → 不输出 BEM 部分，只输出状态类

    // 2. 状态类（按字母序）
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

export function bem(block?: string, element?: string, prefix?: string): Bem {
  return new Bem(block, element, prefix);
}