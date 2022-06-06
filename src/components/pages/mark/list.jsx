import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Divider, Pagination } from "antd";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { setMarkListTop } from "@/store";

import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import { scroll } from "@utils";

import "./index.less";

export default function List() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const topList = useSelector(({ markListTop }) => markListTop);
  const params = useParams();
  const [mark, setMark] = useState([]);
  const [pageList, setPageList] = useState({ current: 1, size: 6 });
  useEffect(() => {
    getList(pageList, params.type);
  }, [params]);
  useEffect(() => {
    scroll(0, topList);
  }, []);
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
    }
  };
  const jumpDtl = (type, id) => {
    navigate("/mark/" + type + "/" + id);
    const top = document.documentElement.scrollTop;
    dispatch(setMarkListTop(top));
  };
  return (
    <div>
      {params.type && (
        <div
          className="mark-title"
          onClick={() => {
            navigate("/mark");
          }}
        >
          点击返回全部
        </div>
      )}
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
  );
}
