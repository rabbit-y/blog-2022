import { useState, useEffect } from "react";
import { Divider, Form, Input, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "md-editor-rt";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import Liked from "@components/Liked/index";
import moment from "moment";

import "md-editor-rt/lib/style.css";
import "./index.less";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 },
};
const Dtl = () => {
  const [form] = Form.useForm();
  const searchParams = useParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [dtl, setDtl] = useState({});
  const [html, setHtml] = useState("");
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
      <div className="mark-dtl-support">
        {/* <div>
          <Liked />
          <p>(80)</p>
        </div> */}
      </div>
      <div>
        <Divider plain>
          <span className="mark-dtl-tip">
            <IconFont type="h-xiaoxiong" />
            收到回复会有邮件提醒呦~
          </span>
        </Divider>
        <div className="mark-user opacity8">
          <div className="mark-user-msg">
            <img src={user?.avatar} alt="头像" />
            <span>@ {user?.nickname}</span>
          </div>
          <div className="mark-user-comment"></div>
        </div>
      </div>
    </div>
  );
};
export default Dtl;
