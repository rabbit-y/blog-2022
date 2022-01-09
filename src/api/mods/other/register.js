/**
     * @desc 注册
用于用户注册
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/reg', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
