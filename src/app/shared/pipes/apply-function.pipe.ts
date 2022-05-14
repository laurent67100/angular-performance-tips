import { Pipe, PipeTransform } from '@angular/core';

/**
 * Takes in a function to apply to the value
 * That pipe helps with performance by avoid recalculations when change detection kicks in
 */

@Pipe({ name: 'applyFunction' })
export class ApplyFunctionPipe implements PipeTransform {
  transform<T, R>(value: T, functionToApply: (value: T, ...args) => R, functionArgs: any[] = [], functionContext: any = this): R {
    return functionToApply.bind(functionContext)(value, ...functionArgs);
  }
}
