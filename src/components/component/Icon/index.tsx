import { createFromIconfontCN } from '@ant-design/icons';
import { ICON_URL } from '@utils/config';
const IconFont = ({ type, style = null, className = null }) => {
  const IconFonts = createFromIconfontCN({
    scriptUrl: ICON_URL,
  });
  return <IconFonts type={type} style={style} className={className} />;
};
export default IconFont;
