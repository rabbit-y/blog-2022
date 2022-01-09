/**
     * @desc 发送邮件验证码
用于用户注册邮箱校验
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/sendVerifyCode', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
