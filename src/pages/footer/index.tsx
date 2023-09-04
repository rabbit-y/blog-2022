import { Space } from 'antd';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import IconFont from '@components/Icon';

export default function Footer() {
  const info = useSelector(({ info }) => info);
  return (
    <div className="footer">
      <Space size={20}>
        <span>
          <IconFont type="h-claw" />
          2019 - {dayjs().format('YYYY')}
        </span>
        <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">
          {info.stationPutOnRecord}
          <IconFont type="h-claw" />
        </a>
      </Space>
    </div>
  );
}
