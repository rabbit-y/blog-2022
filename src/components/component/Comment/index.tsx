import { useState, useEffect } from 'react';
import { Divider, Row, Col, Form, Input, Button, message, Tag } from 'antd';
import { MailOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import BraftEditor, { ControlType } from 'braft-editor';
import { COS_URL } from '@utils/config';
import 'braft-editor/dist/index.css';

export default function HComment({ bindClick, className = '', reply, onClose }) {
  const [form] = Form.useForm();
  const [editorInstance, setEditorInstance] = useState(null);
  const [avatar, setAvatar] = useState(COS_URL + 'blog/headers/3');
  const [content, setContent] = useState(BraftEditor.createEditorState(null));
  const controls: ControlType[] = [
    'text-color',
    'bold',
    'italic',
    'underline',
    'strike-through',
    'hr',
    'separator',
    'list-ul',
    'list-ol',
    'blockquote',
    'code',
    'separator',
    'emoji',
    'link',
    'separator',
    'clear',
  ];
  useEffect(() => {
    const userInfo = localStorage.getItem('h-userInfo');
    if (userInfo) {
      const userObj = JSON.parse(userInfo);
      setAvatar(userObj.avatar);
      form.setFieldsValue({
        ...userObj,
      });
    }
  }, []);
  const numberChange = () => {
    const num = form.getFieldValue('nickName');
    const reg = /^[1-9][0-9]{4,9}$/gim;
    const bool = reg.test(num);
    if (bool) {
      const newImg = ` https://q1.qlogo.cn/g?b=qq&nk=${num}&s=100`;
      form.setFieldsValue({
        email: `${num}@qq.com`,
        avatar: newImg,
        nickName: '',
      });
      setAvatar(newImg);
    } else {
      message.warning('啊哦 这个QQ号好像不对哦');
    }
  };
  const saveSuccess = () => {
    const userObj = form.getFieldsValue();
    userObj.avatar = avatar;
    localStorage.setItem('h-userInfo', JSON.stringify(userObj));
    editorInstance.clearEditorContent();
  };
  return (
    <div className={`h-comment ${className}`}>
      <div className="h-comment-divider">
        <Divider orientation="right" orientationMargin="0">
          <span className="h-comment-tip">在「昵称」处填写QQ号，Enther获取「头像」和「QQ邮箱」</span>
        </Divider>
      </div>
      <Row wrap={false} gutter={[20, 20]}>
        <Col flex="none">
          <img className="h-comment-img" src={avatar} />
        </Col>
        <Col flex="auto">
          <Form form={form} size="large" layout="vertical">
            <Row gutter={[20, 20]}>
              <Col span={8}>
                <Form.Item
                  name="nickName"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} onPressEnter={numberChange} placeholder="昵称" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="邮箱" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="blogUrl">
                  <Input prefix={<HomeOutlined />} placeholder="站点" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item wrapperCol={{ span: 24 }} name="content">
                  {/* <Input.TextArea
                    placeholder="在「昵称」处填写QQ号，Enther获取「头像」和「QQ邮箱」"
                    autoSize={{ minRows: 6, maxRows: 6 }}
                  /> */}
                  <BraftEditor
                    ref={(instance) => setEditorInstance(instance)}
                    className="h-comment-editor"
                    controls={controls}
                    value={content}
                    onChange={setContent}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                {reply?.nickName && (
                  <Tag closable onClose={onClose}>
                    回复 @{reply?.nickName}
                  </Tag>
                )}
                <Button
                  className="h-comment-btn"
                  type="primary"
                  onClick={() => {
                    bindClick(form.getFieldsValue(), content.toHTML(), saveSuccess);
                  }}
                >
                  发布
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
