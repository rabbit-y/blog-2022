import { useEffect, useState } from "react";
import moment from "moment";
import IconFont from "../../component/Icon/index";
import { STATION } from "@utils/variable";

import "./index.less";

export default function Footer() {
  const [cityInfo, setCityInfo] = useState();
  useEffect(() => {
    setCityInfo(window.cityInfo);
  }, []);
  return (
    <div className="footer">
      <div>
        @{moment().format("yyyy")}
        <IconFont type="h-xiaoxiong" />
        {STATION.name}
        <IconFont type="h-xiaoxiong" />
        {STATION.putOnRecord}
      </div>
      <div>
        来自{cityInfo?.cname}
        <IconFont type="h-xiaoxiong" />
        IP为{cityInfo?.cip}的小伙伴
      </div>
    </div>
  );
}
