import Aplayer from "react-aplayer";
import { LISTENLIST } from "@utils/variable";

import "./index.less";

export default function Listen() {
  const cofig = {
    theme: "#666",
    listFolded: true,
    listMaxHeight: "100px",
    lrcType: 3,
    audio: LISTENLIST,
  };
  return (
    <div className="listen h-text-card">
      <div id="listenBox">
        <Aplayer {...cofig} />
      </div>
    </div>
  );
}
