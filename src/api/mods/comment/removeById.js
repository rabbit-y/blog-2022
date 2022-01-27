/**
 * @desc 删除评论
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/comment/{id}', params, 'DELETE'), {
    method: 'DELETE',

    ...options,
  });
}
