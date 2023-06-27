/**
 * @desc 随机获取一张二次元图片
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** type */
  type;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/img/{type}', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
