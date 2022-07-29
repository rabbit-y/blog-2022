import { useEffect, useState } from "react";
import axios from "axios";
import "./index.less";

export default function Welcome() {
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
    <div className="welcome h-card-shadow">
      <div className="welcome-day">
        <div>
          hi~欢迎你来自<span>{day.city}</span>的朋友
        </div>
        <div>
          今天是
          <span>{day.date}</span>
          <span>{day.week}</span>
        </div>
        <div>
          <span>{day.wea}</span>
          <span>{day.win}</span>
          <span>{day.win_speed}</span>
        </div>
      </div>
    </div>
  );
}
