import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Divider, Row, Col } from "antd";
import moment from "moment";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import "./index.less";

export default function Say() {
  const USER = useSelector((state) => state.types);
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
      <div className="say-list">
        <Row gutter={[20, 20]}>
          {list?.map((item, index) => {
            return (
              <Col key={index} xs={{ span: 24 }} lg={{ span: 8 }}>
                <div className="say-list-item h-card">
                  <div className="say-list-tip">
                    <div></div>
                  </div>
                  <div className="say-list-time">
                    {moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")}
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      {list.length < pageList.total && (
        <Divider>
          <div className="say-list-more" onClick={more}>
            查看更多
          </div>
        </Divider>
      )}
    </div>
  );
}
