/**
 * @desc 新增说说
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/mood', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
