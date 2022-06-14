import IconFont from "../../component/Icon/index";
import Aplayer from "react-aplayer";
import { LISTENLIST } from "@utils/variable";

import "./index.less";

export default function Listen() {
  const cofig = {
    theme: "#1DA57A",
    listFolded: true,
    listMaxHeight: "100px",
    lrcType: 3,
    audio: LISTENLIST,
  };
  return (
    <div className="listen h-text-card">
      <div className="listen-title h-text-title">
        <IconFont type="h-a-aiqingxihuansebiaoqingxiaolian" />
        <b>想听</b>
      </div>
      <div id="listenBox">
        <Aplayer {...cofig} />
      </div>
    </div>
  );
}
