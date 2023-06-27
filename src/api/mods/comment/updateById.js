/**
 * @desc 更新评论
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.api.JsonResult();

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/comment', params, 'PUT'), {
    method: 'PUT',

    body,
    ...options,
  });
}
