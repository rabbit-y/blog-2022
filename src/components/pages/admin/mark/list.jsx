import { useState } from "react";
import { Tag, Space, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import MyTable from "@components/Table/index";
import { api } from "@api/index";
import "./index.less";
import { useEffect } from "react";
export default function Mark() {
  const navigate = useNavigate();
  const [mark, setMark] = useState([]);
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
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        const id = "/admin/mark/" + record.id;
        return (
          <Space size="middle">
            <Link to={id}>修改</Link>
            <a>删除</a>
          </Space>
        );
      },
    },
  ];
  useEffect(() => {
    getList();
  }, []);
  const getList = async (type) => {
    const {
      code,
      data: { records },
    } = await api.article.getList.request({ typeId: type });
    if (code === 0) {
      setMark(records);
    }
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
