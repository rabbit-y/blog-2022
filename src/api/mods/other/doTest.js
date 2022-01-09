/**
     * @desc 测试
用于测试后台是否可被访问
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/test', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
