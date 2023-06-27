/**
 * @desc 评论列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** current */
  current;
  /** size */
  size;
  /** replyArticleId */
  replyArticleId;
}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/comment', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
