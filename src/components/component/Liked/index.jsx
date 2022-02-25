import { useState } from "react";
import "./index.less";
export default function Liked({ type = "false", fn }) {
  const [active, setActive] = useState(false);
  const classChange = () => {
    if (type) {
      setActive(true);
      fn && fn();
    }
  };
  return (
    <div
      className={`h-liked ${active && "h-liked-active"}`}
      onClick={classChange}
    ></div>
  );
}
