type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassObject
  | ClassValue[];

interface ClassObject {
  [key: string]: boolean | undefined | null;
}

/**
 * Utility function to conditionally join CSS class names together
 * @param args - Any number of class values (strings, objects, arrays)
 * @returns A string of joined class names
 * @example
 * cn('foo', 'bar') // => 'foo bar'
 * cn('foo', { bar: true }) // => 'foo bar'
 * cn({ foo: true, bar: false }) // => 'foo'
 * cn(['foo', 'bar']) // => 'foo bar'
 * cn('foo', undefined, null, false) // => 'foo'
 */
export function cn(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      const inner = cn(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (typeof arg === "object") {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.filter(Boolean).join(" ");
}
