import { Row, Col, Pagination, Tooltip, Avatar } from 'antd';
import dayjs from 'dayjs';
import { COS_URL } from '@utils/config';

const avatar = COS_URL + 'blog/headers/3';
const CommentList = ({ pageList, list, setReply, hasPage = false, getList = null }) => {
  return (
    <div className="h-comment-list-box">
      <div className="h-comment-title">{pageList.total}条留言</div>
      <div className="h-comment-list" id="goCommentList">
        {list?.map((item, index) => {
          const qq = item.email.split('@qq');
          const qqAvatar =
            qq.length > 1 ? `https://q1.qlogo.cn/g?b=qq&nk=${qq[0]}&s=100` : item.avatar ? item.avatar : avatar;
          return (
            <Row wrap={false} gutter={[20, 20]} key={index} className="h-comment-item">
              <Col flex="none">
                <img className="h-comment-avatar" src={qqAvatar} />
              </Col>
              <Col flex="auto">
                <div className="h-comment-reply">
                  <div className="h-comment-reply-top">
                    <span className="h-comment-name">{item.nickName}</span>
                    <span className="h-comment-time">{dayjs(item.createTime).fromNow()}</span>
                    <a
                      className="h-comment-btn h-link-cur"
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
                  <div className="h-comment-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                  {item.children.length > 0 && (
                    <div className="h-comment-child">
                      {item.children.map((items, indexs) => {
                        const qq = items.email.split('@qq');
                        const myAvatar =
                          qq.length > 1
                            ? `https://q1.qlogo.cn/g?b=qq&nk=${qq[0]}&s=100`
                            : items.avatar
                            ? items.avatar
                            : avatar;
                        return (
                          <Row wrap={false} gutter={[20, 20]} key={indexs} className="h-comment-item">
                            <Col flex="none">
                              <img className="h-comment-avatar" src={myAvatar} />
                            </Col>
                            <Col flex="auto">
                              <div className="h-comment-reply">
                                <div className="h-comment-reply-top">
                                  <span className="h-comment-name">{items.nickName}</span>
                                  <span className="h-comment-time">{dayjs(items.createTime).fromNow()}</span>
                                </div>
                                <div
                                  className="h-comment-content"
                                  dangerouslySetInnerHTML={{
                                    __html: items.content,
                                  }}
                                ></div>
                              </div>
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          );
        })}
        {hasPage && (
          <div className="h-comment-page">
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
        )}
      </div>
    </div>
  );
};

export default CommentList;
