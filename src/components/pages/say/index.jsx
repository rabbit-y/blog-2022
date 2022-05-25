import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Timeline } from "antd";
import moment from "moment";
import { api } from "@api/index";
import IconFont from "../../component/Icon/index";
import "./index.less";

export default function Say() {
  const USER = useSelector((state) => state.types);
  const [list, setList] = useState([]);
  const [pageList, setPage] = useState({});
  useEffect(() => {
    getList({ current: 1, size: 6 });
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
      <div>
        {/* {USER.avatar} */}
        {/* {USER.nickname} */}
      </div>
      <Timeline>
        {list?.map((item, index) => {
          return (
            <Timeline.Item
              key={index}
              dot={<IconFont type="h-xiaoxiong" style={{ fontSize: 20 }} />}
            >
              <div className="say-list-time">
                {moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")}
              </div>
              <div className="say-list-cont">
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
              {/* <div className="say-list-other">
                <div>
                  <IconFont type="h-icon" style={{ fontSize: 18 }} />
                  <span> 24人点赞</span>
                </div>
              </div> */}
            </Timeline.Item>
          );
        })}
        {list.length < pageList.total && (
          <Timeline.Item
            dot={<IconFont type="h-xiaoxiong1" style={{ fontSize: 28 }} />}
          >
            <div className="say-list-more" onClick={more}>
              ... 查看更多 ...
            </div>
          </Timeline.Item>
        )}
      </Timeline>
    </div>
  );
}
