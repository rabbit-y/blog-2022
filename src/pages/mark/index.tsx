import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Pagination, Tag, Row, Col } from 'antd';
import dayjs from 'dayjs';

import { useDispatch, useSelector } from 'react-redux';
import { setMarkListPage } from '@/store';
import Dtl from './dtl';
import { api } from '@api/index';
import IconFont from '@components/Icon';
import { scroll } from '@utils/index';

const Mark = () => {
  const dispatch = useDispatch();
  const typeList = useSelector(({ types }) => types.articleCounts);
  const page = useSelector(({ markListPage }) => markListPage);
  const params = useParams();
  const [mark, setMark] = useState([]);
  const [pageList, setPageList] = useState<Page>({ current: 1, size: 10 });
  const [id, setId] = useState('');
  useEffect(() => {
    let paramObj = page.current ? page : pageList;
    if ((page.typeChange || params.type) && page.typeChange != params.type) {
      paramObj = { ...paramObj, current: 1 };
    }
    getList(paramObj, params.type);
  }, [params.type]);
  // 获取文档列表
  const getList = async (page, typeId = '') => {
    const paramObj = {
      typeId: typeId,
      ...pageList,
      ...page,
    };
    const {
      code,
      data: { records, total, current },
    } = await api.article.getList.request(paramObj);
    if (code === 0) {
      const obj = { ...pageList, total, current };
      if (records.length > 0) {
        setId(records[0].id);
      }
      setMark(records);
      setPageList(obj);
      dispatch(setMarkListPage({ ...obj, typeChange: paramObj.typeId }));
    }
  };
  return (
    <Row className="mark" wrap={false}>
      <Col className="mark-list" flex="400px">
        <div className="mark-list-titles">Blogs</div>
        <div className="mark-list-cont" id="markList">
          {mark?.map((item, index) => (
            <div
              className={`mark-list-page h-link-cur ${id == item.id && 'mark-list-page-select'}`}
              key={index}
              onClick={() => {
                setId(item.id);
              }}
            >
              <div className="mark-list-page-title">{item.title}</div>
              <div className="mark-list-page-msg">
                <IconFont type="h-rili" />
                {dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}
                <Divider type="vertical" />
                <IconFont type="h-gouwu" />
                {item.typeName}
              </div>
            </div>
          ))}
          <Pagination
            hideOnSinglePage
            current={pageList.current}
            total={pageList.total}
            pageSize={pageList.size}
            onChange={(page) => {
              getList({ current: page });
              scroll(0, 0, document.getElementById('markList'));
            }}
          />
        </div>
      </Col>
      <Col flex="auto" className="mark-list mark-dtl">
        <Dtl id={id} />
      </Col>
      {/* <CheckableTag
              className="mark-classify"
              checked={!params.type}
              onChange={() => {
                navigate('/mark');
              }}
            >
              全部
            </CheckableTag>
            {typeList?.map((tag) => (
              <div key={tag.typeId}>
                <CheckableTag
                  className="mark-classify"
                  checked={params.type == tag.typeId}
                  onChange={() => {
                    navigate('/mark/' + tag.typeId);
                  }}
                >
                  {tag.typeName} ({tag.total})
                </CheckableTag>
              </div>
            ))} */}
    </Row>
  );
};
export default Mark;
