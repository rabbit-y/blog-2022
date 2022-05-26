/**
 * @desc 日志列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/log', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
