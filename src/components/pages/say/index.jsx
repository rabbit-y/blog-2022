import { useEffect, useState } from "react";
import { Divider } from "antd";
import moment from "moment";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import "./index.less";

export default function Say() {
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
        {list?.map((item, index) => {
          return (
            <div key={index} className="say-list-item">
              <div className="say-list-tip"></div>
              <div className="say-list-msg">
                <div className="say-list-icon">
                  <IconFont type="h-xiangsu_mao" />
                </div>
                <div className="say-list-time">
                  {moment(item.createTime).fromNow()}
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          );
        })}
      </div>
      {list.length < pageList.total && (
        <Divider>
          <div className="say-list-more h-link-cur" onClick={more}>
            查看更多
          </div>
        </Divider>
      )}
    </div>
  );
}
