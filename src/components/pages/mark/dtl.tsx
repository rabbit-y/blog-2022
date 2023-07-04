import { useState, useEffect, lazy, Suspense } from 'react';
import { Row, Col, Divider, Skeleton, Anchor, message, Button, Spin } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { MdPreview, MdCatalog } from 'md-editor-rt';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import IconFont from '@components/Icon';
import CommentList from '@components/CommentList';
import { scroll } from '@utils/index';
import { COS_URL } from '@utils/config';
import { api } from '@api/index';
const HComment = lazy(() => import('@components/Comment'));

import 'md-editor-rt/lib/style.css';
const Dtl = () => {
  const searchParams = useParams();
  const navigate = useNavigate();
  const masterInfo = useSelector(({ types }) => types);
  const [avatar] = useState(COS_URL + 'blog/headers/3');
  const [articleId, setArticleId] = useState<string>();
  const [editorShow, setEditorShow] = useState<boolean>(false);
  const [dtl, setDtl] = useState<MarkDtl>();
  const [html, setHtml] = useState('');
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState<Page>({ current: 1, size: 30 });
  const [reply, setReply] = useState<ReplyDtl>();
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
    const params = reply.nickName ? { ...reply, replyCmId: reply.id, ...param } : param;
    delete params.id;
    const str = reply.nickName
      ? `<div style='font-size:12px'>回复 <a style='padding-rigth:20px'>@${reply.nickName}</a></div>`
      : '';
    const { code } = await api.comment.save.request(null, {
      data: {
        replyArticleId: articleId,
        ...params,
        content: str + content,
      },
    });
    if (code === 0) {
      message.success('发布成功');
      getCommentList(articleId);
      setReply({});
      fn();
      document.getElementById('goCommentList').scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="mark-dtl">
      <div className="mark-dtl-all h-content h-card-shadow">
        <div
          className="mark-dtl-btn h-link-cur"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Button type="primary">返回列表</Button>
        </div>
        <h1>{dtl?.title}</h1>
        <div className="mark-dtl-title">
          <IconFont type="h-rili" />
          {dayjs(dtl?.createTime).format('YYYY-MM-DD HH:mm')}
          <Divider type="vertical" />
          <IconFont type="h-gouwu" />
          {dtl?.typeName}
        </div>
        <div className="mark-dtl-cont">
          {!editorShow && <Skeleton active paragraph={{ rows: 15 }} />}
          <MdPreview
            className="mark-markdown-cls mark-dtl-editor"
            editorId="my-editor"
            modelValue={html}
            previewTheme="github"
            onHtmlChanged={() => {
              setEditorShow(true);
            }}
          />
          {/* <div className="mark-catalog">
            <Anchor>
              <div className="mark-catalog-list">
                <div className="mark-catalog-title">目录</div>
                <MdCatalog editorId="my-editor" scrollElement={document.documentElement} />
              </div>
            </Anchor>
          </div> */}
        </div>
      </div>
      <div className="mark-dtl-CC">
        <div>
          版权属于：<a href={location.href}>@{masterInfo?.nickname}</a>
        </div>
        <div>
          本文链接：<a href={location.href}>{location.href}</a>
        </div>
        <div>
          作品采用采用
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
            CC BY-NC-SA 4.0
          </a>
          许可协议，转载请注明来自
          <a href={location.href}>@{masterInfo?.nickname}</a>
        </div>
      </div>
      <CommentList pageList={pageList} list={list} setReply={setReply} />
      <div id="goComment">
        <Suspense fallback={<Spin />}>
          <HComment
            bindClick={saveComment}
            reply={reply}
            className="mark-comment-comment"
            onClose={() => {
              setReply({});
            }}
          />
        </Suspense>
      </div>
    </div>
  );
};
export default Dtl;
