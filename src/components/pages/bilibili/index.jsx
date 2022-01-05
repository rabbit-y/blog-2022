import { Row, Col, Divider } from "antd";
import { useEffect } from "react";
import { getBilibili } from "@api/thirdApi";
import IconFont from "../../component/Icon/index";

import "./index.less";

const Bilibili = () => {
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const { data } = await getBilibili({ pn: 1, ps: 5 });
    console.log(data);
  };
  return <div className="">123</div>;
};
export default Bilibili;
