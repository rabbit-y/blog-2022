type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace api {}

declare namespace api {
  /**
   * Article Controller
   */
  export namespace article {
    /**
     * 更新文章
     * /article
     */
    export namespace updateById {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增文章
     * /article
     */
    export namespace save {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 文章列表
     * /article/list
     */
    export namespace getList {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 文章详情
     * /article/{id}
     */
    export namespace getById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 删除文章
     * /article/{id}
     */
    export namespace removeById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Basic Error Controller
   */
  export namespace basicError {
    /**
     * error
     * /error
     */
    export namespace error {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace putError {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace postError {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace deleteError {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace optionsError {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace headError {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace patchError {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace traceError {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Mood Controller
   */
  export namespace mood {
    /**
     * 更新说说
     * /mood
     */
    export namespace updateById {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增说说
     * /mood
     */
    export namespace save {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 说说列表
     * /mood/list
     */
    export namespace getList {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 说说详情
     * /mood/{id}
     */
    export namespace getById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 删除说说
     * /mood/{id}
     */
    export namespace removeById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Other Controller
   */
  export namespace other {
    /**
     * 起始页
     * /
     */
    export namespace doHome {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 登录
     * /login
     */
    export namespace doLogin {
      export class Params {
        /** email */
        email: any;
        /** pwd */
        pwd: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 注册
     * /reg
     */
    export namespace register {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 发送邮件验证码
     * /sendVerifyCode
     */
    export namespace sendVerifyCode {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 测试
     * /test
     */
    export namespace doTest {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 上传文件
     * /uploadFile
     */
    export namespace uploadFile {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取当前登录用户信息
     * /userInfo
     */
    export namespace getUserInfo {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Type Controller
   */
  export namespace type {
    /**
     * 更新类型
     * /type
     */
    export namespace updateById {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增类型
     * /type
     */
    export namespace save {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 类型列表
     * /type/list
     */
    export namespace getList {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 类型详情
     * /type/{id}
     */
    export namespace getById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 删除类型
     * /type/{id}
     */
    export namespace removeById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }
}
