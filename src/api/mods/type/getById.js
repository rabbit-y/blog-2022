/**
 * @desc 类型详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/type/{id}', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
