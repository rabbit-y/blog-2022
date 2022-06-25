import { useEffect, useState } from "react";
import { Row, Col, Pagination } from "antd";
import axios from "axios";
import moment from "moment";
import { scroll } from "@utils";

import "./index.less";

const Bilibili = () => {
  const [myList, setList] = useState([]);
  const [current, setCurrent] = useState({ pn: 1 });
  useEffect(() => {
    getList();
  }, []);
  const getList = async (page) => {
    const {
      data: {
        code,
        data: { list, total, pn },
      },
    } = await axios.get(
      `/bilibili/x/space/bangumi/follow/list?type=1&follow_status=0&ps=12&vmid=458066744&ts=${moment().format(
        "X"
      )}&pn=${page ? page : current.pn}`
    );
    if (code === 0) {
      setList(list);
      setCurrent({ total, pn });
    }
  };
  return (
    <div>
      <Row justify="start" gutter={[36, 24]}>
        {myList?.map((item, index) => (
          <Col key={index} xs={{ span: 12 }} lg={{ span: 6 }}>
            <div
              className="bili-list"
              onClick={() => {
                return window.open(item.url);
              }}
            >
              <div className="bili-list-img">
                <img
                  src={"/bimg" + item.cover.slice(19) + "@198w_264h.webp"}
                ></img>
                <div className="bili-list-img-ep">{item.new_ep.index_show}</div>
                <div className="bili-list-img-type">
                  {item.season_type_name}
                </div>
              </div>
              <div className="bili-list-name">{item.title}</div>
              <div className="bili-list-dec">{item.subtitle_14}</div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="bili-list-page">
        <Pagination
          hideOnSinglePage
          current={current.pn}
          onChange={(page) => {
            getList(page);
            scroll(0, 0);
          }}
          total={current.total}
          defaultPageSize={12}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
export default Bilibili;
