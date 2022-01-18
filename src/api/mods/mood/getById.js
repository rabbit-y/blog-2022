/**
 * @desc 说说详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/mood/{id}', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
