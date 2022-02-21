import { Table } from "antd";
export default function MyTable({ columns, data, option }) {
  return (
    <Table
      bordered
      size="small"
      key={data.id}
      columns={columns}
      dataSource={data}
      {...option}
    />
  );
}
