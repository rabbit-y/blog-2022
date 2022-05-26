import { useState, useEffect } from "react";
import { Row, Col, Divider, message, Button, Pagination, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import BraftEditor from "braft-editor";
import ColorPicker from "braft-extensions/dist/color-picker";
import moment from "moment";
import { api } from "@api/index";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import "./index.less";
BraftEditor.use(ColorPicker());
export default function Say() {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );
  const [list, setList] = useState([]);
  const [pageList, setPage] = useState({ current: 1 });
  const [id, setId] = useState();
  useEffect(() => {
    getList({ current: 1, size: 5 });
  }, []);
  const getList = async (param) => {
    const {
      code,
      data: { records, total, current, size },
    } = await api.mood.getList.request({ ...pageList, ...param });
    if (code === 0) {
      setList(records);
      setPage({ total, current, size });
    }
  };
  const editor = async (item) => {
    setId(item.id);
    setEditorState(BraftEditor.createEditorState(item.content));
  };
  const newEditor = () => {
    setId("");
    setEditorState(BraftEditor.createEditorState(null));
  };
  const pageChange = (page) => {
    setPage({ current: page, size: 5 });
    getList({ current: page });
  };
  const save = async (e) => {
    const { code } = await api.mood[id ? "updateById" : "save"].request(null, {
      data: {
        id,
        content: editorState.toHTML(),
      },
    });
    if (code === 0) {
      message.success("success");
      getList({ current: 1, size: 5 });
    }
  };

  // 删除
  const delect = (id) => {
    Modal.confirm({
      title: "提示",
      icon: <ExclamationCircleOutlined />,
      content: "是否确认删除",
      okText: "确认",
      cancelText: "取消",
      onOk: async () => {
        const { code } = await api.mood.removeById.request({ id });
        if (code === 0) {
          getList();
        }
      },
    });
  };
  return (
    <div className="admin-say">
      <Row wrap={false}>
        <Col flex="500px">
          <div className="admin-say-btn">
            <Button type="primary" onClick={newEditor}>
              新建
            </Button>
          </div>
          <div className="admin-say-editor">
            <BraftEditor value={editorState} onChange={setEditorState} />
          </div>
          <div className="admin-say-btn">
            <Button onClick={save}>提交</Button>
          </div>
        </Col>
        <Col flex="auto" className="admin-say-list">
          {pageList?.total && (
            <Pagination
              pageSize={pageList.size}
              current={pageList.current}
              total={pageList.total}
              onChange={pageChange}
            />
          )}
          <div>
            {list?.map((item, index) => {
              return (
                <div key={index}>
                  <Divider orientation="left">
                    <div className="admin-say-list-title">
                      <span>
                        {moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")}
                      </span>
                      <span
                        onClick={() => {
                          editor(item);
                        }}
                      >
                        编辑
                      </span>
                      <span
                        onClick={() => {
                          delect(item.id);
                        }}
                      >
                        删除
                      </span>
                    </div>
                  </Divider>
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}
