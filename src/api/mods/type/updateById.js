/**
 * @desc 更新类型
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/type', params, 'PUT'), {
    method: 'PUT',

    ...options,
  });
}
