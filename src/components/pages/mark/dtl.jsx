import { useState, useEffect } from "react";
import { Divider, Row, Col } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "md-editor-rt";
import moment from "moment";
import BraftEditor from "braft-editor";
import ColorPicker from "braft-extensions/dist/color-picker";
import { api } from "@api/index";
import { useSelector } from "react-redux";
import IconFont from "@components/Icon/index";

import "braft-extensions/dist/color-picker.css";
import "md-editor-rt/lib/style.css";
import "braft-editor/dist/index.css";
import "./index.less";

BraftEditor.use(ColorPicker());
const Dtl = () => {
  const searchParams = useParams();
  const navigate = useNavigate();
  const masterInfo = useSelector((state) => state.types);
  const [user, setUser] = useState({});
  const [dtl, setDtl] = useState({});
  const [html, setHtml] = useState("");
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );
  useEffect(() => {
    const userInfo = localStorage.getItem("h-userInfo");
    setUser(userInfo ? JSON.parse(userInfo) : {});
    getDtl(searchParams.id);
  }, [searchParams.id]);
  // 获取文章内容
  const getDtl = async (id) => {
    const { code, data } = await api.article.getById.request({ id });
    if (code === 0) {
      setHtml(data.content);
      setDtl(data);
    }
  };
  return (
    <div className="mark-dtl">
      <div
        className="mark-title"
        onClick={() => {
          navigate(-1);
        }}
      >
        <div>返回列表</div>
      </div>
      <div className="mark-dtl-all">
        <h1>{dtl.title}</h1>
        <div className="mark-dtl-title">
          <IconFont type="h-shijian" />
          {moment(dtl.createTime).format("YYYY-MM-DD HH:mm")}
          <Divider type="vertical" />
          <IconFont type="h-wenjianjia" />
          {dtl.typeName}
        </div>
        <div className="mark-dtl-cont">
          <Editor
            editorClass="mark-markdown-cls mark-dtl-editor"
            previewOnly="true"
            modelValue={html}
            previewTheme="github"
          />
        </div>
      </div>
      <div className="mark-dtl-CC opacity6 h-card">
        <div>
          版权属于：<a href={location.href}>@{masterInfo.nickname}</a>
        </div>
        <div>
          本文链接：<a href={location.href}>{location.href}</a>
        </div>
        <div>
          作品采用采用{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
          >
            CC BY-NC-SA 4.0
          </a>
          许可协议，转载请注明来自
          <a href={location.href}>@{masterInfo.nickname}</a>
        </div>
      </div>
      <div className="mark-dtl-support">
        <Row justify="center">
          <Col span={4}>
            <IconFont type="h-fenxiang" className="mark-fenxiang" />
          </Col>
        </Row>
      </div>
      <div>
        <Divider plain>
          <span className="mark-dtl-tip">
            <IconFont type="h-claw" />
            收到回复会有邮件提醒呦~
          </span>
        </Divider>
        <div className="mark-user">
          <Row wrap={false}>
            <Col flex="none">
              <div
                className="mark-user-msg"
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
              <div className="mark-user-comment">
                <BraftEditor value={editorState} onChange={setEditorState} />
                <div className="mark-user-comment-btn">发布评论</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Dtl;
