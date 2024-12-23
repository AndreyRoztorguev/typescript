export {};

declare global {
  interface Array<T> {
    customMethod(): T[];
  }
}

Array.prototype.customMethod = function customMethod<T>(): T[] {
  console.log("customMethod");
  return this;
};
