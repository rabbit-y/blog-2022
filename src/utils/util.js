import { createFromIconfontCN } from '@ant-design/icons';
import {ICON_URL} from './variable'

export const IconEle = (type = '') => {
  const IconFont = createFromIconfontCN({
    scriptUrl: ICON_URL,
  });
  return  <IconFont type={type} />
}