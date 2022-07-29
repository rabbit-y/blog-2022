import { useEffect } from "react";
import { Timeline } from "antd";
import IconFont from "@components/Icon/index";
import { TIMELINE } from "@utils/variable";
import "./index.less";

export default function Time() {
  useEffect(() => {}, []);

  return (
    <div className="time">
      <Timeline>
        {TIMELINE?.map((item, index) => {
          return (
            <Timeline.Item
              key={index}
              // dot={<IconFont type="h-xiangsu_mao" style={{ fontSize: 26 }} />}
            >
              <div className="time-list-time">{item.time}</div>
              <div className="h-card time-list-cont h-card-shadow">
                <div>{item.content}</div>
              </div>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
}
