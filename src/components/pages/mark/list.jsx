import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KeepAlive from "react-activation";
import { Divider, Pagination, Tag } from "antd";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { setMarkListPage } from "@/store";

import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import { scroll } from "@utils";

import "./index.less";

const { CheckableTag } = Tag;
export default function List() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const typeList = useSelector((state) => state.types.articleCounts);
  const page = useSelector((state) => state.markListPage);
  const params = useParams();
  const [mark, setMark] = useState([]);
  const [pageList, setPageList] = useState({ current: 1, size: 6 });

  useEffect(() => {
    getList(page ? page : pageList, params.type);
  }, [params]);
  // 获取文档列表
  const getList = async (page, typeId = "") => {
    const {
      code,
      data: { records, total, current },
    } = await api.article.getList.request({
      typeId: typeId,
      ...pageList,
      ...page,
    });
    if (code === 0) {
      setMark(records);
      setPageList({ ...pageList, total, current });
      dispatch(setMarkListPage({ ...pageList, total, current }));
    }
  };
  const jumpDtl = (type, id) => {
    navigate("/mark/" + type + "/" + id);
  };
  return (
    <KeepAlive when={true} saveScrollPosition="screen">
      <div>
        <div className="mark-classify">
          <CheckableTag
            checked={!params.type}
            onChange={() => {
              navigate("/mark");
            }}
          >
            全部
          </CheckableTag>
          {typeList.map((tag) => (
            <CheckableTag
              key={tag.typeId}
              checked={params.type == tag.typeId}
              onChange={() => {
                navigate("/mark/" + tag.typeId);
              }}
            >
              {tag.typeName}
            </CheckableTag>
          ))}
        </div>
        <div className="mark-list">
          {mark?.map((item, index) => (
            <div
              className="mark-list-page h-card opacity8"
              key={index}
              onClick={() => {
                jumpDtl(item.typeId, item.id);
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
        <Pagination
          current={pageList.current}
          total={pageList.total}
          pageSize={pageList.size}
          onChange={(page) => {
            getList({ current: page });
            scroll(0, 0);
          }}
        />
      </div>
    </KeepAlive>
  );
}
