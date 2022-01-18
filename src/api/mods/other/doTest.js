/**
 * @desc 测试
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/test', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
