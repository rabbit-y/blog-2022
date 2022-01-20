import { useEffect, useState } from "react";
import { PageHeader, Divider } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";

import "./index.less";

export default function List() {
  const navigate = useNavigate();
  const searchParams = useParams();
  const [mark, setMark] = useState([]);
  useEffect(() => {
    getList(searchParams.type);
  }, [searchParams.type]);
  const getList = async (type) => {
    const { code, data } = await api.article.getList.request({ typeId: type });
    if (code === 0) {
      setMark(data);
    }
  };
  return (
    <div>
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
        />
      </div>
      <div className="mark-list">
        {mark?.map((item, index) => (
          <div className="mark-list-page opacity8" key={index}>
            <div className="mark-list-page-title">{item.title}</div>
            <div className="mark-list-page-msg">
              <IconFont type="h-shijian" />
              {item.createTime}
              <Divider type="vertical" />
              <IconFont type="h-wenjianjia" />
              PMP
            </div>
            <div
              className="mark-list-page-dec"
              onClick={() => {
                navigate("/mark/pmp/" + item.id);
              }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
