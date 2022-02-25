import { createFromIconfontCN } from "@ant-design/icons";
import { ICON_URL } from "@utils/variable";
export default function IconFont({ type, style }) {
  const IconFonts = createFromIconfontCN({
    scriptUrl: ICON_URL,
  });
  return <IconFonts type={type} style={style} />;
}
