import { useState, useEffect } from "react";
import { Tag, Space, Button, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import MyTable from "@components/Table/index";
import { api } from "@api/index";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./index.less";
export default function Mark() {
  const navigate = useNavigate();
  const [mark, setMark] = useState([]);
  const [pagination, setPagination] = useState({
    defaultPageSize: 18,
    size: 18,
  });
  const columns = [
    {
      title: "标题",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "类型",
      key: "typeName",
      dataIndex: "typeName",
      render: (tags) => (tags ? <Tag>{tags}</Tag> : ""),
    },
    {
      title: "创建日期",
      key: "createTime",
      dataIndex: "createTime",
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "操作",
      key: "action",
      dataIndex: "action",
      render: (text, record) => {
        const id = "/admin/mark/" + record.id;
        return (
          <Space size="middle">
            <Link to={id}>修改</Link>
            <span
              onClick={() => {
                delect(record.id);
              }}
            >
              删除
            </span>
          </Space>
        );
      },
    },
  ];
  useEffect(() => {
    getList();
  }, []);
  const getList = async (e) => {
    const {
      code,
      data: { records, total, current },
    } = await api.article.getList.request({
      ...pagination,
      current: e ? e : 1,
    });
    if (code === 0) {
      setMark(records);
      setPagination({ ...pagination, total, current });
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
        const { code } = await api.article.removeById.request({ id });
        if (code == 0) {
          getList(1);
        }
      },
    });
  };
  const jumpDtl = () => {
    navigate("/admin/mark/creat");
  };
  return (
    <div className="mark-list">
      <MyTable
        columns={columns}
        data={mark}
        option={{
          pagination: {
            ...pagination,
            onChange: (page, pageSize) => {
              getList(page);
            },
          },
          title: () => (
            <div>
              <Button type="primary" onClick={jumpDtl}>
                新建文档
              </Button>
            </div>
          ),
        }}
      />
    </div>
  );
}
