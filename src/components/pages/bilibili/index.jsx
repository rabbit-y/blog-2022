import { useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./index.less";

const Bilibili = () => {
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const data = await axios.get(
      `/bilibili/x/space/bangumi/follow/list?type=1&follow_status=0&pn=1&ps=15&vmid=458066744&ts=${moment().format(
        "X"
      )}`
    );
    console.log(data);
  };
  return <div className="">123</div>;
};
export default Bilibili;
