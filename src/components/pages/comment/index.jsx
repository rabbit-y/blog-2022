import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import BraftEditor from "braft-editor";
import ColorPicker from "braft-extensions/dist/color-picker";
import { api } from "@api/index";

import "braft-extensions/dist/color-picker.css";
import "braft-editor/dist/index.css";
import "./index.less";

BraftEditor.use(ColorPicker());
export default function Comment() {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const { code, data } = await api.comment.getList.request({
      current: 1,
      size: 10,
    });
    if (code === 0) {
      console.log(data);
    }
  };
  // const save = async () => {
  //   const { code, data } = await api.comment.save.request(null,{
  //     data:{}
  //   });
  // };
  return <div className="comment"></div>;
}
