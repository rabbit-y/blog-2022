/**
 * @desc 评论列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** countId */
  countId;
  /** current */
  current;
  /** maxLimit */
  maxLimit;
  /** optimizeCountSql */
  optimizeCountSql;
  /** asc */
  asc;
  /** column */
  column;
  /** pages */
  pages;
  /** records */
  records;
  /** searchCount */
  searchCount;
  /** size */
  size;
  /** total */
  total;
}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/comment', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
