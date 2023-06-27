import { FloatButton } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import IconFont from '@components/Icon';

export default function Footer() {
  const info = useSelector(({ info }) => info);
  return (
    <div className="footer">
      <div>
        <a href={location.origin}>
          @2019 - {dayjs().format('yyyy')}
          <span className="footerIcon">
            <IconFont type="h-claw" />
            {info.stationName}
          </span>
        </a>
      </div>
      <div>
        <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">
          {info.stationPutOnRecord}
        </a>
      </div>
      <FloatButton.Group shape="circle" style={{ right: 20 }}>
        <FloatButton
          icon={<SyncOutlined />}
          onClick={() => {
            window.location.reload();
          }}
        />
        <FloatButton.BackTop type="primary" />
      </FloatButton.Group>
    </div>
  );
}
