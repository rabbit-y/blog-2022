/**
 * @desc 文章列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/article/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
