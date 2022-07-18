import { useEffect, useState } from "react";
import { Divider, List, Avatar } from "antd";
import moment from "moment";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import "./index.less";

export default function Say() {
  const [list, setList] = useState([]);
  const [pageList, setPage] = useState({});
  useEffect(() => {
    getList({ current: 1, size: 14 });
  }, []);
  const getList = async (param, type) => {
    const {
      code,
      data: { records, total, size, current },
    } = await api.mood.getList.request({ ...pageList, ...param });
    if (code === 0) {
      if (type && type === "add") {
        setList(list.concat(records));
      } else {
        setList(records);
      }
      setPage({ total, size, current });
    }
  };
  const more = () => {
    getList({ current: pageList.current + 1 }, "add");
  };
  return (
    <div className="say">
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<IconFont type="h-xiangsu_mao" />}
              description={moment(item.createTime).fromNow()}
              title={
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              }
            />
          </List.Item>
        )}
      />
      {list.length < pageList.total && (
        <Divider>
          <div className="say-list-more h-link-cur" onClick={more}>
            查看更多
          </div>
        </Divider>
      )}
    </div>
  );
}
