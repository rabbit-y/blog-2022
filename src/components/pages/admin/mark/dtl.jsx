import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import "./index.less";
const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const Dtl = () => {
  const searchParams = useParams();
  const [id, setId] = useState();
  useEffect(() => {
    const ids = searchParams.id;
    if (ids == "creat") {
    } else {
      setId(ids);
    }
  }, []);
  const onFinish = () => {};
  return (
    <div className="mark-dtl">
      <div className="mark-dtl-all">
        <Form {...layout} onFinish={onFinish}>
          <Form.Item name="name" label="标题" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="type" label="类型">
            <Select allowClear>
              <Option value="male">male</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Dtl;
