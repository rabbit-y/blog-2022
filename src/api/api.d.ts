type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace api {}

declare namespace api {
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
   * Other Controller
   */
  export namespace other {
    /**
        * 起始页
用于用查看后端服务是否启动
        * /
        */
    export namespace doHome {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 登录接口
用于用户登录
        * /login
        */
    export namespace doLogin {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 注册
用于用户注册
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
用于用户注册邮箱校验
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
用于测试后台是否可被访问
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
公共上传文件接口
        * /uploadFile
        */
    export namespace uploadFile {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }
}
