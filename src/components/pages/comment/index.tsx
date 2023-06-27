import { useEffect, useState } from 'react';
import { Row, Col, message, Pagination, Avatar, Tag, Card, Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import HComment from '@components/Comment';
import { api } from '@api/index';

const { Meta } = Card;
export default function Comment() {
  const friends = useSelector(({ info }) => info.friend);
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState<Page>({ current: 1, size: 20 });
  const [reply, setReply] = useState<ReplyDtl>();
  const avatar = 'https://cos.han96.com/blog/headers/3';
  useEffect(() => {
    getList();
  }, []);

  const getList = async (page = pageList.current) => {
    const {
      code,
      data: { records, total, current },
    } = await api.comment.getList.request({
      ...pageList,
      replyArticleId: 0,
    });
    if (code === 0) {
      setList(records);
      setPageList({ ...pageList, total, current });
    }
  };
  // 发表评论
  const saveComment = async (param, content, fn) => {
    const params = reply.nickName ? { ...reply, replyCmId: reply.id, ...param } : param;
    delete params.id;
    const str = reply.nickName
      ? `<div style='font-size:12px'>回复 <a style='padding-rigth:20px'>@${reply.nickName}</a></div>`
      : '';
    const { code } = await api.comment.save.request(null, {
      data: {
        ...params,
        content: str + content,
        replyArticleId: 0,
      },
    });
    if (code === 0) {
      message.success('发布成功');
      getList();
      setReply({});
      fn();
      document.getElementById('goCommentList').scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="comment">
      <div className="comment-dec">
        <div className="comment-dec-me">
          <div>
            <Tag color="#666">昵称</Tag>花贝
          </div>
          <div>
            <Tag color="#666">链接</Tag>https://han96.com
          </div>
          <div>
            <Tag color="#666">头像</Tag>
            https://cos.han96.com/blog/upload/96211653576399721.jpg
          </div>
          <div>
            <Tag color="#666">描述</Tag>一个社恐的前端开发从业者
          </div>
        </div>
        <div className="comment-friend">
          <Row gutter={[20, 20]}>
            {friends?.map((item, index) => (
              <Col span={8} key={index}>
                <Card
                  className="h-link-cur comment-card"
                  style={{ backgroundImage: `url(${item.avatar})` }}
                  onClick={() => {
                    window.open(item.url);
                  }}
                >
                  <Meta title={item.name} description={item.dec} />
                </Card>
              </Col>
            ))}
          </Row>
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
          <Row wrap={false} gutter={[20, 20]} key={index} className="comment-list-item">
            <Col flex="none">
              <Tooltip
                placement="bottomLeft"
                title={item.blogUrl && `点击这里，去${item.nickName}那里看看吧～`}
                arrow={item.blogUrl}
              >
                <Avatar
                  onClick={() => {
                    item.blogUrl && window.open(item.blogUrl);
                  }}
                  shape="square"
                  size={60}
                >
                  {item.nickName}
                </Avatar>
              </Tooltip>
            </Col>
            <Col flex="auto">
              <div className="comment-list-reply">
                <div className="comment-list-reply-top">
                  <span className="comment-list-name">{item.nickName}</span>
                  <span className="comment-list-time">{dayjs(item.createTime).fromNow()}</span>
                  <a
                    className="comment-list-btn h-link-cur"
                    onClick={() => {
                      setReply({
                        ...item,
                      });
                      document.getElementById('goComment').scrollIntoView({
                        block: 'start',
                        behavior: 'smooth',
                      });
                    }}
                  >
                    回复
                  </a>
                </div>
                <div className="comment-list-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                {item.children.length > 0 && (
                  <div className="comment-list-child">
                    {item.children?.map((items, indexs) => (
                      <Row wrap={false} gutter={[20, 20]} key={indexs} className="comment-list-item">
                        <Col flex="none">
                          <img className="comment-list-avatar" src={items.avatar ?? avatar} />
                        </Col>
                        <Col flex="auto">
                          <div className="comment-list-reply">
                            <div className="comment-list-reply-top">
                              <span className="comment-list-name">{items.nickName}</span>
                              <span className="comment-list-time">{dayjs(items.createTime).fromNow()}</span>
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
              getList(page);
              document.getElementById('goComment').scrollIntoView({
                block: 'start',
                behavior: 'smooth',
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
