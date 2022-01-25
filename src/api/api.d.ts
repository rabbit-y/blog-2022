type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  namespace api {
    export class ArticleCountVOObject {
      /** total */
      total?: number;

      /** typeId */
      typeId?: string;

      /** typeName */
      typeName?: string;
    }

    export class ArticleVOObject {
      /** content */
      content?: string;

      /** createTime */
      createTime?: string;

      /** description */
      description?: string;

      /** id */
      id?: number;

      /** title */
      title?: string;

      /** typeId */
      typeId?: string;

      /** typeName */
      typeName?: string;
    }

    export class JsonResult<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: defs.api.ArticleVOObject;

      /** msg */
      msg?: string;
    }

    export class ModelAndView {
      /** empty */
      empty?: boolean;

      /** model */
      model?: object;

      /** modelMap */
      modelMap?: ObjectMap<any, object>;

      /** reference */
      reference?: boolean;

      /** status */
      status?:
        | 'ACCEPTED'
        | 'ALREADY_REPORTED'
        | 'BAD_GATEWAY'
        | 'BAD_REQUEST'
        | 'BANDWIDTH_LIMIT_EXCEEDED'
        | 'CHECKPOINT'
        | 'CONFLICT'
        | 'CONTINUE'
        | 'CREATED'
        | 'DESTINATION_LOCKED'
        | 'EXPECTATION_FAILED'
        | 'FAILED_DEPENDENCY'
        | 'FORBIDDEN'
        | 'FOUND'
        | 'GATEWAY_TIMEOUT'
        | 'GONE'
        | 'HTTP_VERSION_NOT_SUPPORTED'
        | 'IM_USED'
        | 'INSUFFICIENT_SPACE_ON_RESOURCE'
        | 'INSUFFICIENT_STORAGE'
        | 'INTERNAL_SERVER_ERROR'
        | 'I_AM_A_TEAPOT'
        | 'LENGTH_REQUIRED'
        | 'LOCKED'
        | 'LOOP_DETECTED'
        | 'METHOD_FAILURE'
        | 'METHOD_NOT_ALLOWED'
        | 'MOVED_PERMANENTLY'
        | 'MOVED_TEMPORARILY'
        | 'MULTIPLE_CHOICES'
        | 'MULTI_STATUS'
        | 'NETWORK_AUTHENTICATION_REQUIRED'
        | 'NON_AUTHORITATIVE_INFORMATION'
        | 'NOT_ACCEPTABLE'
        | 'NOT_EXTENDED'
        | 'NOT_FOUND'
        | 'NOT_IMPLEMENTED'
        | 'NOT_MODIFIED'
        | 'NO_CONTENT'
        | 'OK'
        | 'PARTIAL_CONTENT'
        | 'PAYLOAD_TOO_LARGE'
        | 'PAYMENT_REQUIRED'
        | 'PERMANENT_REDIRECT'
        | 'PRECONDITION_FAILED'
        | 'PRECONDITION_REQUIRED'
        | 'PROCESSING'
        | 'PROXY_AUTHENTICATION_REQUIRED'
        | 'REQUESTED_RANGE_NOT_SATISFIABLE'
        | 'REQUEST_ENTITY_TOO_LARGE'
        | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
        | 'REQUEST_TIMEOUT'
        | 'REQUEST_URI_TOO_LONG'
        | 'RESET_CONTENT'
        | 'SEE_OTHER'
        | 'SERVICE_UNAVAILABLE'
        | 'SWITCHING_PROTOCOLS'
        | 'TEMPORARY_REDIRECT'
        | 'TOO_EARLY'
        | 'TOO_MANY_REQUESTS'
        | 'UNAUTHORIZED'
        | 'UNAVAILABLE_FOR_LEGAL_REASONS'
        | 'UNPROCESSABLE_ENTITY'
        | 'UNSUPPORTED_MEDIA_TYPE'
        | 'UPGRADE_REQUIRED'
        | 'URI_TOO_LONG'
        | 'USE_PROXY'
        | 'VARIANT_ALSO_NEGOTIATES';

      /** view */
      view?: defs.api.View;

      /** viewName */
      viewName?: string;
    }

    export class MoodObject {
      /** content */
      content?: string;

      /** createTime */
      createTime?: string;

      /** id */
      id?: number;
    }

    export class TheArticleObject {
      /** content */
      content?: string;

      /** createTime */
      createTime?: string;

      /** description */
      description?: string;

      /** id */
      id?: number;

      /** title */
      title?: string;

      /** typeId */
      typeId?: string;
    }

    export class TheTypeObject {
      /** description */
      description?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;
    }

    export class TheUserObject {
      /** articleCounts */
      articleCounts?: Array<defs.api.ArticleCountVOObject>;

      /** avatar */
      avatar?: string;

      /** blog */
      blog?: string;

      /** email */
      email?: string;

      /** id */
      id?: number;

      /** nickname */
      nickname?: string;

      /** other */
      other?: string;

      /** pwd */
      pwd?: string;

      /** role */
      role?: string;
    }

    export class TheUserObject0 {
      /** avatar */
      avatar?: string;

      /** blog */
      blog?: string;

      /** email */
      email?: string;

      /** id */
      id?: number;

      /** nickname */
      nickname?: string;

      /** other */
      other?: string;

      /** pwd */
      pwd?: string;

      /** role */
      role?: string;
    }

    export class View {
      /** contentType */
      contentType?: string;
    }
  }
}

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

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增文章
     * /article
     */
    export namespace save {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 文章列表
     * /article/list
     */
    export namespace getList {
      export class Params {
        /** content */
        content?: any;
        /** countId */
        countId?: any;
        /** createTime */
        createTime?: any;
        /** current */
        current?: any;
        /** description */
        description?: any;
        /** id */
        id?: any;
        /** maxLimit */
        maxLimit?: any;
        /** optimizeCountSql */
        optimizeCountSql?: any;
        /** asc */
        asc?: any;
        /** column */
        column?: any;
        /** pages */
        pages?: any;
        /** records */
        records?: any;
        /** searchCount */
        searchCount?: any;
        /** size */
        size?: any;
        /** title */
        title?: any;
        /** total */
        total?: any;
        /** typeId */
        typeId?: any;
        /** typeName */
        typeName?: any;
      }

      export type Response = defs.api.JsonResult;

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

      export type Response = defs.api.JsonResult<defs.api.ArticleVOObject>;

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

      export type Response = defs.api.JsonResult;

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

      export type Response = ObjectMap<any, object>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace putError {
      export class Params {}

      export type Response = ObjectMap<any, object>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace postError {
      export class Params {}

      export type Response = ObjectMap<any, object>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace deleteError {
      export class Params {}

      export type Response = ObjectMap<any, object>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace optionsError {
      export class Params {}

      export type Response = ObjectMap<any, object>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace headError {
      export class Params {}

      export type Response = ObjectMap<any, object>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace patchError {
      export class Params {}

      export type Response = ObjectMap<any, object>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * error
     * /error
     */
    export namespace traceError {
      export class Params {}

      export type Response = ObjectMap<any, object>;

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

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增说说
     * /mood
     */
    export namespace save {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 说说列表
     * /mood/list
     */
    export namespace getList {
      export class Params {
        /** current */
        current?: any;
        /** size */
        size?: any;
      }

      export type Response = defs.api.JsonResult<Array<defs.api.MoodObject>>;

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

      export type Response = defs.api.JsonResult<defs.api.MoodObject>;

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

      export type Response = defs.api.JsonResult;

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

      export type Response = defs.api.ModelAndView;

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

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取主人用户信息
     * /masterInfo
     */
    export namespace getMasterInfo {
      export class Params {}

      export type Response = defs.api.JsonResult<defs.api.TheUserObject>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 注册
     * /reg
     */
    export namespace register {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 发送邮件验证码
     * /sendVerifyCode
     */
    export namespace sendVerifyCode {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 测试
     * /test
     */
    export namespace doTest {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 上传文件
     * /uploadFile
     */
    export namespace uploadFile {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取当前登录用户信息
     * /userInfo
     */
    export namespace getUserInfo {
      export class Params {}

      export type Response = defs.api.JsonResult<defs.api.TheUserObject>;

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

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增类型
     * /type
     */
    export namespace save {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 类型列表
     * /type/list
     */
    export namespace getList {
      export class Params {}

      export type Response = defs.api.JsonResult<Array<defs.api.TheTypeObject>>;

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

      export type Response = defs.api.JsonResult<defs.api.TheTypeObject>;

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

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }
}
