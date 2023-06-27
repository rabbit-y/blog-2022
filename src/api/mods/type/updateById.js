/**
 * @desc 更新类型
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.api.JsonResult();

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/type', params, 'PUT'), {
    method: 'PUT',

    body,
    ...options,
  });
}
