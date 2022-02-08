import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import "./index.less";

export default function Index() {
  const navigate = useNavigate();
  const [mark, setMark] = useState([]);
  const [say, setSay] = useState({});
  useEffect(() => {
    getList({ current: 1, size: 6 });
    getSay({ current: 1, size: 1 });
  }, []);
  const getList = async (params) => {
    const { code, data } = await api.article.getList.request(params);
    if (code === 0) {
      setMark(data);
    }
  };
  const getSay = async (params) => {
    const {
      code,
      data: { records },
    } = await api.mood.getList.request(params);
    if (code === 0) {
      setSay(records[0]);
    }
  };
  return (
    <div className="index">
      {say && (
        <>
          <div className="index-title">
            <IconFont type="h-xiaoxiong1" />
            <div>
              我想说
              <div>{moment(say.createTime).fromNow()}</div>
            </div>
          </div>
          <div className="index-say opacity8">
            <Row align="middle">
              <Col flex="auto">
                <div className="index-say-cont">
                  <div dangerouslySetInnerHTML={{ __html: say.content }}></div>
                </div>
              </Col>
              <Col flex="100px">
                <div className="index-say-right">
                  <IconFont type="h-icon" />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
      <div className="index-title">
        <IconFont type="h-xiaoxiong1" />
        <div>我学了</div>
      </div>
      <div>
        <Row justify="start" gutter={20}>
          {mark.records?.map((item, index) => (
            <Col
              span={8}
              key={index}
              onClick={() => {
                navigate("/mark/pmp/" + item.id);
              }}
            >
              <div className="index-page h-card opacity8">
                <div className="index-page-title">{item.title}</div>
                <div className="index-page-msg">
                  <IconFont type="h-shijian" />
                  {moment(item.createTime).format("YYYY/MM/DD HH:mm")}
                </div>
                <div className="index-page-msg">
                  <IconFont type="h-wenjianjia" />
                  {item.typeName}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
