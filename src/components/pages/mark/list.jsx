import { useEffect, useState } from "react";
import { PageHeader, Divider, Pagination } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import moment from "moment";
import { getTypeName } from "@/utils";

import "./index.less";

export default function List() {
  const navigate = useNavigate();
  const searchParams = useParams();
  const [mark, setMark] = useState([]);
  const [typeId, setTypeId] = useState();
  const [pageList, setPageList] = useState({ current: 1, size: 10 });
  useEffect(() => {
    setTypeId(searchParams.type);
    getList(pageList, "", searchParams.type);
  }, [searchParams.type]);
  const getList = async (page, type = "", typeId = "") => {
    const {
      code,
      data: { records, total, current },
    } = await api.article.getList.request({
      typeId: typeId,
      ...pageList,
      ...page,
    });
    if (code === 0) {
      if (type && type === "add") {
        setMark(mark.concat(records));
      } else {
        setMark(records);
      }
      setPageList({ ...pageList, total, current });
    }
  };
  return (
    <div>
      {typeId && (
        <div className="mark-title">
          {/* title={getTypeName(typeId)} */}
          <PageHeader onBack={() => navigate(-1)} />
        </div>
      )}
      <div className="mark-list">
        {mark?.map((item, index) => (
          <div
            className="mark-list-page h-card opacity8"
            key={index}
            onClick={() => {
              navigate("/mark/" + item.typeId + "/" + item.id);
            }}
          >
            <div className="mark-list-page-title">{item.title}</div>
            <div className="mark-list-page-msg">
              <IconFont type="h-shijian" />
              {moment(item.createTime).format("YYYY-MM-DD HH:mm")}
              <Divider type="vertical" />
              <IconFont type="h-wenjianjia" />
              {item.typeName}
            </div>
            <div className="mark-list-page-dec">{item.description}</div>
          </div>
        ))}
      </div>
      {mark.length < pageList.total && (
        <div className="mark-list-more">
          <div
            onClick={() => {
              getList({ current: pageList.current + 1 }, "add");
            }}
          >
            more
          </div>
        </div>
      )}
    </div>
  );
}
