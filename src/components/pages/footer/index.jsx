import { FloatButton } from "antd";
import { SyncOutlined } from '@ant-design/icons'
import { useSelector } from "react-redux";
import moment from "moment";
import IconFont from "../../component/Icon/index";

import "./index.less";

export default function Footer() {
  const info = useSelector((state) => state.info);
  return (
    <div className="footer">
      <div>
        <a href={location.origin}>
          @2019 - {moment().format("yyyy")} 
          <span className="footerIcon">
          <IconFont type="h-claw" />{info.stationName}
          </span>
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
      <FloatButton.Group shape="circle"  style={{ right: 20 }}>
        <FloatButton icon={<SyncOutlined />} onClick={()=>{window.location.reload()}}/>
        <FloatButton.BackTop type='primary'/>
      </FloatButton.Group>
    </div>
  );
}
