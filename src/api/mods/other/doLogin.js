/**
 * @desc 登录
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** email */
  email;
  /** pwd */
  pwd;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/login', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
