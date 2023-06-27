interface Store {
  types: any;
  info: any;
  markListPage: any;
  routerKey: string;
}
interface Page {
  current: number;
  size: number;
  total?: number;
}

// -------------------------mark-------------------------

interface MarkDtl {
  title: string;
  createTime: number;
  typeName: string;
}

// -------------------------reply-------------------------
interface ReplyDtl {
  nickName?: string;
  id?: string;
}
