import { useEffect, useState } from "react";
import { Row, Col, Pagination, Tag } from "antd";
import axios from "axios";
import moment from "moment";
import { scroll } from "@utils";

import "./index.less";

const { CheckableTag } = Tag;
const typeList = [
  { name: "看过", status: 3 },
  { name: "在看", status: 2 },
  { name: "想看", status: 1 },
];
const Bilibili = () => {
  const [myList, setList] = useState([]);
  const [current, setCurrent] = useState({ pn: 1 });
  const [status, setStatus] = useState(3);
  useEffect(() => {
    getList();
  }, []);
  const getList = async (page, follow_status) => {
    const {
      data: {
        code,
        data: { list, total, pn },
      },
    } = await axios.get(
      `/bilibili/x/space/bangumi/follow/list?type=1&follow_status=${
        follow_status ? follow_status : status
      }&ps=20&vmid=458066744&ts=${moment().format("X")}&pn=${
        page ? page : current.pn
      }`
    );
    if (code === 0) {
      setList(list);
      setCurrent({ total, pn });
    }
  };
  return (
    <div>
      <div className="bili-tag">
        {typeList.map((tag) => (
          <CheckableTag
            key={tag.status}
            checked={status == tag.status}
            onChange={() => {
              setStatus(tag.status);
              getList(1, tag.status);
            }}
          >
            {tag.name}
          </CheckableTag>
        ))}
      </div>
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
                <div
                  className="bili-list-imgbg"
                  style={{
                    backgroundImage: `url(/bimg${item.cover.slice(
                      19
                    )}@198w_264h.webp)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
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
