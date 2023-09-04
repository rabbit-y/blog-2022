import { useEffect, useState } from 'react';
import { Divider, Button, Timeline } from 'antd';
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
      const myList = records.map((item, index) => {
        return {
          children: (
            <div key={index}>
              <div className="say-list-time">💕 {dayjs(item.createTime).fromNow()}</div>
              <div className="say-list" dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          ),
        };
      });
      if (type && type === 'add') {
        setList(list.concat(myList));
      } else {
        setList(myList);
      }
      setPage({ total, size, current });
    }
  };
  const more = () => {
    getList(pageList.current + 1, 'add');
  };
  return (
    <div className="say">
      <div className="say-box">
        <Timeline items={list} />
        {list.length < pageList.total && (
          <Divider>
            <div className="say-list-more h-link-cur" onClick={more}>
              <Button type="primary">查看更多</Button>
            </div>
          </Divider>
        )}
      </div>
    </div>
  );
};

export default Say;
