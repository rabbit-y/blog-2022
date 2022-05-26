import { useEffect, useState } from "react";
import { BackTop } from "antd";
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
        <a href={location.href}>
          @2019-@{moment().format("yyyy")}
          <IconFont type="h-claw" />
          {STATION.name}
        </a>
      </div>
      <div>
        <a
          href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
          target="_blank"
        >
          {STATION.putOnRecord}
        </a>
      </div>
      <div>
        来自{cityInfo?.cname}
        <IconFont type="h-claw" />
        IP为{cityInfo?.cip}的小伙伴
      </div>
      <BackTop target={() => document.getElementsByClassName("layout")[0]}>
        <IconFont type="h-fanhuidingbu" className="footer-back" />
      </BackTop>
    </div>
  );
}
