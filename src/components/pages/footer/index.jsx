import { useEffect, useState } from "react";
import { BackTop } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import IconFont from "../../component/Icon/index";

import "./index.less";

export default function Footer() {
  const [cityInfo, setCityInfo] = useState();
  const info = useSelector((state) => state.info);
  useEffect(() => {
    setCityInfo(window.cityInfo);
  }, []);
  return (
    <div className="footer">
      <div>
        <a href={location.href}>
          @2019-@{moment().format("yyyy")}
          <IconFont type="h-claw" />
          {info.stationName}
        </a>
      </div>
      <div>
        <a
          href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
          target="_blank"
        >
          {info.stationPutOnRecord}
        </a>
      </div>
      <div>
        来自{cityInfo?.cname}
        <IconFont type="h-claw" />
        IP为{cityInfo?.cip}的小伙伴
      </div>
      <BackTop>
        <IconFont type="h-fanhuidingbu" className="footer-back" />
      </BackTop>
    </div>
  );
}
