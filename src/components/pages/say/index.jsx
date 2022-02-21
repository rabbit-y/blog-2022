import { useEffect, useState, createElement } from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";
import moment from "moment";
import { useSelector } from "react-redux";
import { api } from "@api/index";
// import "./index.less";

export default function Say() {
  const USER = useSelector((state) => state.types);
  const [list, setList] = useState([]);
  const [pageList, setPage] = useState({});
  useEffect(() => {
    getList({ current: 1, size: 10 });
  }, []);
  const getList = async (param) => {
    const {
      code,
      data: { records, total, size },
    } = await api.mood.getList.request(param);
    if (code === 0) {
      setList(records);
      setPage({ total, size });
    }
  };
  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div className="">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            getList({ current: page, size: 10 });
          },
          pageSize: pageList.size ? pageList.size : 10,
          total: pageList.total,
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={LikeOutlined}
                text={moment(item.createTime).fromNow()}
                key="list-time"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={USER.avatar} />}
              title={USER.nickname}
            />
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          </List.Item>
        )}
      />
    </div>
  );
}
