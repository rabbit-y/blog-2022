import { useEffect, useState } from "react";
import { PageHeader, Divider } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import { getTypeName } from "@/utils";

import "./index.less";

export default function List() {
  const navigate = useNavigate();
  const searchParams = useParams();
  const [mark, setMark] = useState([]);
  const [typeId, setTypeId] = useState();
  useEffect(() => {
    setTypeId(searchParams.type);
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
      <div className="mark-title">
        <PageHeader onBack={() => navigate(-1)} title={getTypeName(typeId)} />
      </div>
      <div className="mark-list">
        {mark?.map((item, index) => (
          <div className="mark-list-page h-card opacity8" key={index}>
            <div className="mark-list-page-title">{item.title}</div>
            <div className="mark-list-page-msg">
              <IconFont type="h-shijian" />
              {item.createTime}
              <Divider type="vertical" />
              <IconFont type="h-wenjianjia" />
              {getTypeName(item.typeId)}
            </div>
            <div
              className="mark-list-page-dec"
              onClick={() => {
                navigate("/mark/" + typeId + "/" + item.id);
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
