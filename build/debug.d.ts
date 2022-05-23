/**
 * assembly/index/init
 */
export declare function init(): void;
/**
 * assembly/index/step
 * @returns `f64`
 */
export declare function step(): number;
/**
 * assembly/index/bench
 * @param steps `u32`
 */
export declare function bench(steps: number): void;
/**
 * assembly/index/getBody
 * @param index `i32`
 * @returns `assembly/index/Body | null`
 */
export declare function getBody(index: number): __Internref4 | null;
/** assembly/index/Body */
declare class __Internref4 extends Number {
  private __nominal4: symbol;
}
