/**
 * @desc 说说列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/mood/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
