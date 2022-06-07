import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Button, Form, Input, Upload, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { fetchTypes } from "@/store";
import { api } from "@api";

import "./index.less";

export default function Profile() {
  const info = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    const otherObj = JSON.parse(info.other);
    const arr = info.other ? otherArr(otherObj) : [];
    const newInfo = {
      ...info,
      others: arr,
      friend: otherObj.friend,
      plugins: otherObj.plugins,
      website: otherObj.website,
    };
    form.setFieldsValue(newInfo);
    setImageUrl(info.avatar);
  }, []);
  const onFinish = async (value) => {
    const newOther = othersObj(value.others);
    newOther.friend = value.friend;
    newOther.plugins = value.plugins;
    newOther.website = value.website;
    value.other = JSON.stringify(newOther);
    delete value.others;
    value.avatar = imageUrl;
    const { code } = await api.other.saveMaster.request(null, { data: value });
    if (code === 0) {
      dispatch(fetchTypes());
    }
  };
  // 处理获得的other数据
  const otherArr = (e) => {
    const arr = [];
    for (const item in e) {
      if (item != "friend" || item != "plugins" || item != "website") {
        arr.push({ key: item, value: e[item] });
      }
    }
    return arr;
  };
  // 处理保存的other数据
  const othersObj = (e) => {
    const obj = {};
    e.map((item) => {
      obj[item.key] = item.value;
    });
    return obj;
  };
  // 上传头像
  const customRequest = async ({ file }) => {
    const fd = new FormData();
    fd.append("file", file);
    const { data } = await api.other.uploadFile.request(null, { data: fd });
    setImageUrl(data);
  };
  return (
    <div className="profile">
      <Form onFinish={onFinish} form={form} layout="horizontal" size="large">
        <div className="profile-info">
          <Divider orientation="left">基本信息</Divider>
          <Form.Item label="头像">
            <Upload
              showUploadList={false}
              listType="picture-card"
              name="avatar"
              customRequest={customRequest}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                <div>上传头像</div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item name="nickname" label="昵称">
            <Input />
          </Form.Item>
          <Form.List name="others">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item label="key" name={[name, "key"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="value" name={[name, "value"]}>
                      <Input />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    添加新扩展
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        <div className="profile-fd">
          <Divider orientation="left">添加友链</Divider>
          <Form.List name="friend">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item label="头像" name={[name, "avatar"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="昵称" name={[name, "name"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="站点" name={[name, "url"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="描述" name={[name, "dec"]}>
                      <Input />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    添加新友链
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        <div className="profile-fd">
          <Divider orientation="left">添加插件</Divider>
          <Form.List name="plugins">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item label="名字" name={[name, "name"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="地址" name={[name, "url"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="标签" name={[name, "tab"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="描述" name={[name, "dec"]}>
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="颜色" name={[name, "color"]}>
                      <Input />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    添加新插件
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        <div className="profile-fd">
          <Divider orientation="left">添加网站</Divider>
          <Form.List name="website">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item label="名字" name={[name, "name"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="地址" name={[name, "url"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="标签" name={[name, "tab"]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="描述" name={[name, "dec"]}>
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="颜色" name={[name, "color"]}>
                      <Input />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    添加新网站
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        <Button type="primary" htmlType="submit">
          更新
        </Button>
      </Form>
    </div>
  );
}
