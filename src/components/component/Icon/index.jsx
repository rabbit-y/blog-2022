import { createFromIconfontCN } from "@ant-design/icons";
import { ICON_URL } from "@utils/config";
export default function IconFont({ type, style, className }) {
  const IconFonts = createFromIconfontCN({
    scriptUrl: ICON_URL,
  });
  return <IconFonts type={type} style={style} className={className} />;
}
