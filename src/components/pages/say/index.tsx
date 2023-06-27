import { useEffect, useState } from 'react';
import { Divider, Button } from 'antd';
import dayjs from 'dayjs';
import { api } from '@api/index';

const Say = () => {
  const [list, setList] = useState([]);
  const [pageList, setPage] = useState<Page>({ current: 1, size: 14 });
  useEffect(() => {
    getList();
  }, []);
  const getList = async (page = pageList.current, type = null) => {
    const {
      code,
      data: { records, total, size, current },
    } = await api.mood.getList.request({ ...pageList, current: page });
    if (code === 0) {
      if (type && type === 'add') {
        setList(list.concat(records));
      } else {
        setList(records);
      }
      setPage({ total, size, current });
    }
  };
  const more = () => {
    getList(pageList.current + 1, 'add');
  };
  return (
    <div className="say">
      {list?.map((item, index) => (
        <div className="say-list" key={index}>
          <div className="say-list-time">💕 {dayjs(item.createTime).fromNow()}</div>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </div>
      ))}
      {list.length < pageList.total && (
        <Divider>
          <div className="say-list-more h-link-cur" onClick={more}>
            <Button type="primary">查看更多</Button>
          </div>
        </Divider>
      )}
    </div>
  );
};

export default Say;
