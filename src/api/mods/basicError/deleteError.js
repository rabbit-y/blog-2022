/**
 * @desc errorHtml
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.api.ModelAndView();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/error', params, 'DELETE'), {
    method: 'DELETE',

    ...options,
  });
}
