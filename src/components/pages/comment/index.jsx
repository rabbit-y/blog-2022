import { useEffect, useState } from "react";
import { Row, Col, message, Pagination, Card, Avatar } from "antd";
import { useSelector } from "react-redux";
import Texty from "rc-texty";
import moment from "moment";
import HComment from "@components/Comment";
import { api } from "@api/index";

import "rc-texty/assets/index.css";
import "./index.less";

export default function Comment() {
  const friends = useSelector((state) => state.info.friend);
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState({ current: 1, size: 20 });
  const [reply, setReply] = useState({});
  useEffect(() => {
    getList();
  }, []);

  const getList = async (page) => {
    const {
      code,
      data: { records, total, current },
    } = await api.comment.getList.request({
      ...pageList,
      ...page,
      replyArticleId: 0,
    });
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
        ...params,
        content: str + content,
        replyArticleId: 0,
      },
    });
    if (code === 0) {
      message.success("发布成功");
      getList();
      setReply({});
      fn();
      document.getElementById("goCommentList").scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };
  const getEnter = (e) => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0,
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0,
        };
      case 3:
        return {
          y: 60,
          opacity: 0,
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0,
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: "set",
            },
            { scale: 1.2, opacity: 1, duration: 300 },
            { scale: 0.9, duration: 200 },
            { scale: 1.05, duration: 150 },
            { scale: 1, duration: 100 },
          ],
          leave: {
            opacity: 0,
            scale: 0,
          },
        };
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0,
        };
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0,
        };
      default:
        return {
          opacity: 0,
        };
    }
  };
  return (
    <div className="comment">
      <div className="comment-dec">
        <div>昵称: 花贝</div>
        <div>链接: https://han96.com</div>
        <div>头像: https://cos.han96.com/blog/upload/96211653576399721.jpg</div>
        <div>描述: 一个社恐的前端开发从业者</div>
        <div className="comment-dec-cont">
          <Texty enter={getEnter}>交换友链成为邻居吧</Texty>
        </div>
        <div className="comment-friend h-link-cur">
          <Card>
            {friends?.map((item, index) => (
              <Card.Grid
                key={index}
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <Row wrap={false}>
                  <Col flex="none">
                    <Avatar size={50} src={item.avatar} />
                  </Col>
                  <Col flex="auto">
                    <div className="comment-friend-name">{item.name}</div>
                    <div className="comment-friend-dec">{item.dec}</div>
                  </Col>
                </Row>
              </Card.Grid>
            ))}
          </Card>
        </div>
      </div>
      <div id="goComment">
        <HComment
          bindClick={saveComment}
          reply={reply}
          className="comment-list-comment"
          onClose={() => {
            setReply({});
          }}
        />
      </div>
      <div className="comment-list" id="goCommentList">
        <div className="comment-list-title">{pageList?.total}条留言</div>
        {list?.map((item, index) => (
          <Row
            wrap={false}
            gutter={[20]}
            key={index}
            className="comment-list-item"
          >
            <Col flex="none">
              <img
                className="comment-list-avatar"
                src={item.avatar ? item.avatar : avatar}
              />
            </Col>
            <Col flex="auto">
              <div className="comment-list-reply">
                <div className="comment-list-reply-top">
                  <span className="comment-list-name">{item.nickName}</span>
                  <span className="comment-list-time">
                    {moment(item.createTime).startOf().fromNow()}
                  </span>
                  <a
                    className="comment-list-btn h-link-cur"
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
                  className="comment-list-content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
                {item.children.length > 0 && (
                  <div className="comment-list-child">
                    {item.children?.map((items, indexs) => (
                      <Row
                        wrap={false}
                        gutter={[20]}
                        key={indexs}
                        className="comment-list-item"
                      >
                        <Col flex="none">
                          <img
                            className="comment-list-avatar"
                            src={items.avatar ? items.avatar : avatar}
                          />
                        </Col>
                        <Col flex="auto">
                          <div className="comment-list-reply">
                            <div className="comment-list-reply-top">
                              <span className="comment-list-name">
                                {items.nickName}
                              </span>
                              <span className="comment-list-time">
                                {moment(items.createTime).startOf().fromNow()}
                              </span>
                            </div>
                            <div
                              className="comment-list-content"
                              dangerouslySetInnerHTML={{
                                __html: items.content,
                              }}
                            ></div>
                          </div>
                        </Col>
                      </Row>
                    ))}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        ))}
        <div className="comment-page">
          <Pagination
            hideOnSinglePage
            current={pageList.current}
            total={pageList.total}
            pageSize={pageList.size}
            onChange={(page) => {
              getList({ current: page });
              document.getElementById("goComment").scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
