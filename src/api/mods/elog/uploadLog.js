/**
 * @desc 新增日志
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.api.JsonResult();

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/log', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
