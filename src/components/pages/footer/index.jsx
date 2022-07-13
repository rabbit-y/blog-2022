import { useEffect, useState } from "react";
import { BackTop } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import IconFont from "../../component/Icon/index";
import axios from "axios";

import "./index.less";

export default function Footer() {
  const info = useSelector((state) => state.info);
  const [day, setDay] = useState({});
  useEffect(() => {
    getIp();
  }, []);
  const getIp = async () => {
    const {
      data: { code, data },
    } = await axios.get(
      `https://www.mxnzp.com/api/ip/self?app_id=rgihdrm0kslojqvm&app_secret=WnhrK251TWlUUThqaVFWbG5OeGQwdz09`
    );
    if (code === 1) {
      getDay(data.city);
    }
  };
  const getDay = async (e) => {
    const { data } = await axios.get(
      `https://www.tianqiapi.com/free/day?appid=56761788&appsecret=ti3hP8y9&city=${e}`
    );
    setDay(data);
  };
  return (
    <div className="footer">
      <div>
        <a href={location.origin}>
          @2019 - {moment().format("yyyy")}
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
      <div className="footer-day">
        hi~欢迎你来自<span>{day.city}</span>的朋友
        <br />
        今天是
        <span>{day.date}</span>
        <span>{day.week}</span>
        <br />
        今日<span>{day.wea}</span>
        <span>{day.win}</span>
        <span>{day.win_speed}</span>
      </div>
      <BackTop>
        <IconFont type="h-fanhuidingbu" className="footer-back" />
      </BackTop>
    </div>
  );
}
