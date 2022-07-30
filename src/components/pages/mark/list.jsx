import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KeepAlive from "react-activation";
import { Divider, Pagination, Tag, Row, Col } from "antd";
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
  const [pageList, setPageList] = useState({ current: 1, size: 8 });
  useEffect(() => {
    let paramObj = page.current ? page : pageList;
    if ((page.typeChange || params.type) && page.typeChange != params.type) {
      paramObj = { ...paramObj, current: 1 };
    }
    getList(paramObj, params.type);
  }, [params.type]);
  // 获取文档列表
  const getList = async (page, typeId = "") => {
    const paramObj = {
      typeId: typeId,
      ...pageList,
      ...page,
    };
    const {
      code,
      data: { records, total, current },
    } = await api.article.getList.request(paramObj);
    if (code === 0) {
      const obj = { ...pageList, total, current };
      setMark(records);
      setPageList(obj);
      dispatch(setMarkListPage({ ...obj, typeChange: paramObj.typeId }));
    }
  };
  const jumpDtl = (type, id) => {
    navigate("/mark/" + type + "/" + id);
  };
  return (
    <div>
      <KeepAlive when={true} id={params.type} saveScrollPosition="screen">
        <Row>
          <Col flex="auto">
            <div className="mark-list">
              {mark?.map((item, index) => (
                <div
                  className="mark-list-page h-link-cur"
                  key={index}
                  onClick={() => {
                    jumpDtl(item.typeId, item.id);
                  }}
                >
                  <div className="mark-list-page-msg">
                    <IconFont type="h-xiaoxiong" />
                    {moment(item.createTime).format("YYYY-MM-DD HH:mm")}
                    <Divider type="vertical" />
                    <IconFont type="h-xiaoxiong" />
                    {item.typeName}
                  </div>
                  <div className="mark-list-page-title">{item.title}</div>
                </div>
              ))}
            </div>
            <div className="mark-page">
              <Pagination
                hideOnSinglePage
                current={pageList.current}
                total={pageList.total}
                pageSize={pageList.size}
                onChange={(page) => {
                  getList({ current: page });
                  scroll(0, 0);
                }}
              />
            </div>
          </Col>
          <Col flex="200px">
            <CheckableTag
              className="mark-classify"
              checked={!params.type}
              onChange={() => {
                navigate("/mark");
              }}
            >
              全部
            </CheckableTag>
            {typeList.map((tag) => (
              <div key={tag.typeId}>
                <CheckableTag
                  className="mark-classify"
                  checked={params.type == tag.typeId}
                  onChange={() => {
                    navigate("/mark/" + tag.typeId);
                  }}
                >
                  {tag.typeName} ({tag.total})
                </CheckableTag>
              </div>
            ))}
          </Col>
        </Row>
      </KeepAlive>
    </div>
  );
}
