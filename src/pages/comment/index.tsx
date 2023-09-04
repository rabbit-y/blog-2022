import { useEffect, useState } from 'react';
import { Row, Col, message, Tag, Avatar, Typography } from 'antd';
import { useSelector } from 'react-redux';
import HComment from '@components/Comment';
import CommentList from '@components/CommentList';
import { api } from '@api/index';

const { Text } = Typography;
export default function Comment() {
  const friends = useSelector(({ info }) => info.friend);
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState<Page>({ current: 1, size: 20 });
  const [reply, setReply] = useState<ReplyDtl>();
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
      <div className="comment-box">
        <div className="comment-dec">
          <div className="comment-dec-me">
            <div>
              <b>const</b>
              <div>name =</div>'花贝'
            </div>
            <div>
              <b>const</b>
              <div>link =</div>'https://han96.com'
            </div>
            <div>
              <b>const</b>
              <div>header =</div>'https://cos.han96.com/blog/upload/96211653576399721.jpg'
            </div>
            <div>
              <b>const</b>
              <div>dec =</div>'一个社恐的前端开发从业者'
            </div>
          </div>
          <div className="comment-friend">
            <Row gutter={[20, 20]}>
              {friends?.map((item, index) => (
                <Col span={6} key={index}>
                  <div
                    className="comment-card h-card-shadow"
                    onClick={() => {
                      window.open(item.url);
                    }}
                  >
                    <Avatar size={60} src={item.avatar} />
                    <div className="comment-card-name">{item.name}</div>
                    <Text type="secondary">{item.dec}</Text>
                  </div>
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
        <CommentList pageList={pageList} list={list} setReply={setReply} hasPage getList={getList} />
      </div>
    </div>
  );
}
