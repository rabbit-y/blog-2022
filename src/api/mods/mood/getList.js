/**
 * @desc 说说列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** current */
  current;
  /** size */
  size;
}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/mood/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
