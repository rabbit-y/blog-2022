import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import BraftEditor from "braft-editor";
import ColorPicker from "braft-extensions/dist/color-picker";
import { api } from "@api/index";

import "braft-extensions/dist/color-picker.css";
import "braft-editor/dist/index.css";
import "./index.less";

BraftEditor.use(ColorPicker());
export default function Comment() {
  const [user, setUser] = useState({});
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );
  useEffect(() => {
    const userInfo = localStorage.getItem("h-userInfo");
    setUser(userInfo ? JSON.parse(userInfo) : {});
    getList();
  }, []);
  const getList = async () => {
    const { code, data } = await api.comment.getList.request({
      current: 1,
      size: 10,
    });
    if (code === 0) {
      console.log(data);
    }
  };
  // const save = async () => {
  //   const { code, data } = await api.comment.save.request(null,{
  //     data:{}
  //   });
  // };
  return (
    <div className="comment">
      <div>
        <div className="comment-user">
          <Row wrap={false}>
            <Col flex="none">
              <div
                className="comment-user-msg"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <img
                  src={
                    user?.avatar
                      ? user?.avatar
                      : "https://cos.han96.com/blog/headers/3"
                  }
                  alt="头像"
                />
                <div>{user?.nickname ? "@ " + user?.nickname : "未登录"}</div>
              </div>
            </Col>
            <Col flex="atuo">
              <div className="comment-user-comment">
                <BraftEditor value={editorState} onChange={setEditorState} />
                <div className="comment-user-comment-btn">发布评论</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
