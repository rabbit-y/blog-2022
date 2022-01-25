/**
 * @desc 文章列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** content */
  content;
  /** countId */
  countId;
  /** createTime */
  createTime;
  /** current */
  current;
  /** description */
  description;
  /** id */
  id;
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
  /** title */
  title;
  /** total */
  total;
  /** typeId */
  typeId;
  /** typeName */
  typeName;
}

export const init = new defs.api.JsonResult();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/article/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
