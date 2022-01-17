import { Tag, Space, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import MyTable from "@components/Table/index";
import "./index.less";
export default function Mark() {
  const navigate = useNavigate();
  const columns = [
    {
      title: "标题",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "类型",
      key: "type",
      dataIndex: "type",
      render: (tags) => <Tag>PMP</Tag>,
    },
    {
      title: "创建日期",
      key: "creat",
      dataIndex: "creat",
    },
    {
      title: "修改日期",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to="/admin/mark/creat">修改</Link>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const jumpDtl = () => {
    navigate("/admin/mark/creat");
  };
  return (
    <div className="mark-list">
      <MyTable
        columns={columns}
        data={[
          {
            key: "1",
            name: "CESHIDE YITAN",
            type: "PMP",
          },
        ]}
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
