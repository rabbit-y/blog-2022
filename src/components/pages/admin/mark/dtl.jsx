import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, PageHeader, message } from "antd";
import Editor from "md-editor-rt";
import { api } from "@api/index";
import { useSelector } from "react-redux";
import "md-editor-rt/lib/style.css";
import "./index.less";
const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const Dtl = () => {
  const typeList = useSelector((state) => state.types.articleCounts);
  const [form] = Form.useForm();
  const searchParams = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [text, setText] = useState("");
  useEffect(() => {
    const ids = searchParams.id;
    if (ids === "creat") {
    } else {
      setId(ids);
      getDtl(ids);
    }
  }, []);
  const getDtl = async (id) => {
    const {
      code,
      data: { content, typeId, title },
    } = await api.article.getById.request({ id });
    if (code === 0) {
      setText(content);
      form.setFieldsValue({ typeId, title });
    }
  };
  const onFinish = async (e) => {
    const { code } = await (id
      ? api.article.updateById.request(null, {
          data: {
            ...e,
            id,
            content: text,
          },
        })
      : api.article.save.request(null, {
          data: {
            ...e,
            content: text,
          },
        }));
    if (code === 0) {
      message.success("success");
      navigate(-1);
    }
  };
  return (
    <div className="mark-admin-dtl">
      <div className="mark-admin-header">
        <PageHeader onBack={() => navigate(-1)} title="返回" />
      </div>
      <div className="mark-dtl-all">
        <Form {...layout} form={form} onFinish={onFinish} labelAlign="left">
          <Form.Item name="title" label="标题" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="typeId" label="类型" rules={[{ required: true }]}>
            <Select allowClear>
              {typeList?.map((item) => (
                <Option value={item.typeId} key={item.typeId}>
                  {item.typeName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div className="mark-markdown">
            <Editor
              editorClass="mark-markdown-cls"
              modelValue={text}
              onChange={setText}
              toolbarsExclude={["catalog", "github"]}
              previewTheme="github"
            />
          </div>
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
