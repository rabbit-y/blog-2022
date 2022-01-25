import { useEffect, useState } from "react";
import { Row, Col, Divider, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import { getTypeName } from "@/utils";
import "./index.less";

export default function Index() {
  const navigate = useNavigate();
  const [mark, setMark] = useState([]);
  const [pageSize, setPageSize] =  useState(2);
  const [pageCurrent, setPageCurrent] =  useState(1);
  useEffect(() => {
    getList({current:1, size:2});
  }, []);
  const getList = async (params) => {
    const { code, data } = await api.article.getList.request(params);
    if (code === 0) {
      console.log(111, data)
      setMark(data);
    }
  };

const onChange = (current, size)=>{
  setPageSize(size)
  setPageCurrent(current)
  getList({current, size});
}
  return (
    <div className="index">
      <div className="index-say h-card opacity8">
        <Row align="middle">
          <Col flex="60px">
            <div className="index-say-icon">
              <IconFont type="h-xiaoxiong1" />
            </div>
          </Col>
          <Col flex="auto">
            <div className="index-say-cont">
              <div>-- 2022-01-03 --</div>
              随便说说吧The tough road often leads to the top.
              艰难的道路经常通往高处！
            </div>
          </Col>
          <Col flex="100px">
            <div className="index-say-right">
              <IconFont type="h-icon" />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        {mark.records?.map((item, index) => (
          <div className="index-page h-card opacity8" key={index}>
            <div className="index-page-title">{item.title}</div>
            <div className="index-page-msg">
              <IconFont type="h-shijian" />
              {item.createTime}
              <Divider type="vertical" />
              <IconFont type="h-wenjianjia" />
              {getTypeName(item.typeId)}
            </div>
            <div
              className="index-page-dec"
              onClick={() => {
                navigate("/mark/pmp/" + item.id);
              }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <Pagination current={pageCurrent} total={mark.total} pageSizeOptions={[2,5,10]} onChange={onChange} showSizeChanger pageSize={pageSize}/>
    </div>
  );
}
