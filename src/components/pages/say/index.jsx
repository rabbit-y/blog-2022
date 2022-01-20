import { useEffect } from "react";
import { api } from "@api/index";
// import "./index.less";

export default function Say() {
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const { code, data } = await api.mood.getList.request();
    if (code === 0) {
      console.log(data);
    }
  };
  return (
    <div className="">
      <div>say</div>
    </div>
  );
}
