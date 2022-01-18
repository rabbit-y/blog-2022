/**
 * @desc 更新文章
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/article', params, 'PUT'), {
    method: 'PUT',

    ...options,
  });
}
