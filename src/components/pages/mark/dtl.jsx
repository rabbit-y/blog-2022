import { useState, useEffect } from "react";
import { Row, Col, Divider, Skeleton, Drawer, message, Pagination } from "antd";
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
  const [show, setShow] = useState(false);
  const [editorShow, setEditorShow] = useState(false);
  const [dtl, setDtl] = useState({});
  const [html, setHtml] = useState("");
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState({ current: 1, size: 30 });
  const [reply, setReply] = useState({});
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
    } = await api.comment.getList.request({ ...pageList, replyArticleId: id });
    if (code === 0) {
      setList(records);
      setPageList({ ...pageList, total, current });
    }
  };
  // 发表评论
  const saveComment = async (param, content, fn) => {
    const params = reply.nickName
      ? { ...reply, replyCmId: reply.id, ...param }
      : param;
    delete params.id;
    const str = reply.nickName
      ? `<div style='font-size:12px'>回复 <a style='padding-rigth:20px'>@${reply.nickName}</a></div>`
      : "";
    const { code } = await api.comment.save.request(null, {
      data: {
        replyArticleId: articleId,
        ...params,
        content: str + content,
      },
    });
    if (code === 0) {
      message.success("发布成功");
      getCommentList(articleId);
      setReply({});
      fn();
      document.getElementById("goCommentList").scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="mark-dtl">
      <div className="mark-dtl-btn">
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          返回
        </div>
        <Divider />
        <div
          onClick={() => {
            setShow(!show);
          }}
        >
          目录
        </div>
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
          {!editorShow && <Skeleton active paragraph={{ rows: 10 }} />}
          <Editor
            className="mark-markdown-cls mark-dtl-editor"
            editorId="my-editor"
            modelValue={html}
            previewTheme="github"
            onHtmlChanged={() => {
              setEditorShow(true);
            }}
            previewOnly
          />
          <Drawer
            title="目录"
            placement="right"
            onClose={() => {
              setShow(false);
            }}
            visible={show}
            mask={false}
          >
            <Editor.Catalog
              editorId="my-editor"
              scrollElement={document.documentElement}
            />
          </Drawer>
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
        <div className="mark-comment-title">{pageList.total}条评论</div>
        <div className="mark-comment-list" id="goCommentList">
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
                <div className="mark-comment-reply">
                  <div className="mark-comment-reply-top">
                    <span className="mark-comment-name">{item.nickName}</span>
                    <span className="mark-comment-time">
                      {moment(item.createTime).startOf().fromNow()}
                    </span>
                    <a
                      className="mark-comment-btn"
                      onClick={() => {
                        setReply({
                          ...item,
                        });
                        document.getElementById("goComment").scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        });
                      }}
                    >
                      回复
                    </a>
                  </div>
                  <div
                    className="mark-comment-content"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                </div>
              </Col>
            </Row>
          ))}
          <div id="goComment">
            <HComment
              bindClick={saveComment}
              reply={reply}
              className="mark-comment-comment"
              onClose={() => {
                setReply({});
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dtl;
