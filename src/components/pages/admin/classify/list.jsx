import { useState, useEffect } from "react";
import { Space, Button, Modal, Form, Input } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import MyTable from "@components/Table/index";
import { api } from "@api/index";
import "./index.less";

export default function Classify() {
  const [list, setList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const columns = [
    {
      title: "类型",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "描述",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "操作",
      key: "action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <a
              href="javascript:;"
              onClick={() => {
                showModal(record);
              }}
            >
              修改
            </a>
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
  const getList = async () => {
    const { data, code } = await api.type.getList.request();
    if (code === 0) {
      setList(data);
    }
  };
  // 新建
  const saveType = () => {
    form.validateFields().then(async (value) => {
      const { code } = await api.type[value.id ? "updateById" : "save"].request(
        null,
        {
          data: {
            ...value,
          },
        }
      );
      if (code === 0) {
        setIsModalVisible(false);
        form.resetFields();
        getList();
      }
    });
  };
  // 打开modal
  const showModal = (item) => {
    form.setFieldsValue(item);
    setIsModalVisible(true);
  };
  const closeModal = () => {
    form.resetFields();
    setIsModalVisible(false);
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
        const { code } = await api.type.removeById.request({ id });
        if (code === 0) {
          getList();
        }
      },
    });
  };
  return (
    <div className="classify">
      <div className="mark-list">
        <MyTable
          columns={columns}
          data={list}
          option={{
            title: () => (
              <div>
                <Button type="primary" onClick={showModal}>
                  新建类型
                </Button>
              </div>
            ),
          }}
        />
      </div>
      <Modal
        title="类型"
        visible={isModalVisible}
        onOk={saveType}
        onCancel={closeModal}
      >
        <Form form={form} size="large" autoComplete="off" onFinish={saveType}>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="类型" />
          </Form.Item>
          <Form.Item name="description">
            <Input placeholder="描述" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
