export function autobind(
  // target: any,
  _: any,
  // methodName: string, ( fails because param never used, need special names) see the _ and _2 because we need the third param
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    }
  }
  return adjustedDescriptor;
}