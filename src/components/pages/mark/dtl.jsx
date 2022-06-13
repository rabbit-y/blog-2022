import { useState, useEffect } from "react";
import { Row, Col, Divider } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "md-editor-rt";
import moment from "moment";
import { api } from "@api/index";
import { useSelector } from "react-redux";
import IconFont from "@components/Icon";
import { scroll } from "@utils";
import HComment from "@components/Comment";
import config from "@utils/config";

import "md-editor-rt/lib/style.css";
import "./index.less";

const Dtl = () => {
  const searchParams = useParams();
  const navigate = useNavigate();
  const masterInfo = useSelector((state) => state.types);
  const [avatar] = useState(config.COS_URL + "blog/headers/3");
  const [articleId, setArticleId] = useState();
  const [dtl, setDtl] = useState({});
  const [html, setHtml] = useState("");
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState({ current: 1, size: 5 });
  useEffect(() => {
    getDtl(searchParams.id);
    getCommentList(searchParams.id);
    setArticleId(searchParams.id);
    scroll(0, 0);
  }, []);
  // 获取文章内容
  const getDtl = async (id) => {
    const { code, data } = await api.article.getById.request({ id });
    if (code === 0) {
      setHtml(data.content);
      setDtl(data);
    }
  };
  // 获取评论列表
  const getCommentList = async (id) => {
    const {
      code,
      data: { records, total, current },
    } = await api.comment.getList.request({
      current: 1,
      size: 10,
      replyArticleId: id,
    });
    if (code === 0) {
      setList(records);
      setPageList({ ...pageList, total, current });
    }
  };
  // 发表评论
  const saveComment = async (param, content, fn) => {
    const { code } = await api.comment.save.request(null, {
      data: { replyArticleId: articleId, ...param, content },
    });
    if (code === 0) {
      getCommentList(articleId);
      fn();
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
        {/* <Row justify="center">
          <Col span={4}>
            <IconFont type="h-fenxiang" className="mark-fenxiang" />
          </Col>
        </Row> */}
      </div>
      <div className="mark-comment">
        <HComment bindClick={saveComment} />
        <div className="mark-comment-title">{pageList.total}条评论</div>
        <div className="mark-comment-list">
          {list?.map((item, index) => (
            <Row
              wrap={false}
              gutter={[20]}
              key={index}
              className="mark-comment-item"
            >
              <Col flex="none">
                <img
                  className="mark-comment-avatar"
                  src={item.avatar ? item.avatar : avatar}
                />
              </Col>
              <Col flex="auto">
                <div>
                  <span className="mark-comment-name">{item.nickName}</span>
                  <span className="mark-comment-time">
                    {moment(item.createTime).startOf().fromNow()}
                  </span>
                </div>
                <div
                  className="mark-comment-content h-card"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dtl;
