/**
 * @desc 获取主人用户信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/masterInfo', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
