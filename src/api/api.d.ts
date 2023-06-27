type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace api {
  export class ArticleCountVODX {
    /** total */
    total?: number;

    /** typeId */
    typeId?: string;

    /** typeName */
    typeName?: string;
  }

  export class ArticleDX {
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

  export class ArticleVODX {
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

  export class CommentDX {
    /** 评论人头像 */
    avatar?: string;

    /** 评论人博客地址 */
    blogUrl?: string;

    /** content */
    content?: string;

    /** createTime */
    createTime?: string;

    /** 评论人邮箱 */
    email?: string;

    /** id */
    id?: number;

    /** 评论人昵称 */
    nickName?: string;

    /** replyArticleId */
    replyArticleId?: number;

    /** 回复评论的id */
    replyCmId?: number;
  }

  export class ElogDX {
    /** id */
    id?: number;

    /** info */
    info?: string;
  }

  export class IPage<T0 = any> {
    /** current */
    current?: number;

    /** pages */
    pages?: number;

    /** records */
    records: Array<T0>;

    /** size */
    size?: number;

    /** total */
    total?: number;
  }

  export class JsonResult<T0 = any> {
    /** code */
    code?: number;

    /** data */
    data: T0;

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

  export class MoodDX {
    /** content */
    content?: string;

    /** createTime */
    createTime?: string;

    /** id */
    id?: number;
  }

  export class TypeDX {
    /** description */
    description?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class UserDX {
    /** articleCounts */
    articleCounts?: Array<defs.api.ArticleCountVODX>;

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

  export class UserDX0 {
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

  export class UserDX1 {
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

declare namespace api {
  /**
   * Article Controller
   */
  export namespace article {
    /**
     * 文章列表
     * /article
     */
    export namespace getList {
      export class Params {
        /** content */
        content?: string;
        /** countId */
        countId?: string;
        /** createTime */
        createTime?: string;
        /** current */
        current?: number;
        /** description */
        description?: string;
        /** id */
        id?: number;
        /** maxLimit */
        maxLimit?: number;
        /** optimizeCountSql */
        optimizeCountSql?: boolean;
        /** asc */
        asc?: boolean;
        /** column */
        column?: string;
        /** pages */
        pages?: number;
        /** records */
        records?: Array<object>;
        /** searchCount */
        searchCount?: boolean;
        /** size */
        size?: number;
        /** title */
        title?: string;
        /** total */
        total?: number;
        /** typeId */
        typeId?: string;
        /** typeName */
        typeName?: string;
      }

      export type Response = defs.api.JsonResult<
        defs.api.IPage<defs.api.ArticleVODX>
      >;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新文章
     * /article
     */
    export namespace updateById {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.ArticleDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增文章
     * /article
     */
    export namespace save {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.ArticleDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 文章详情
     * /article/{id}
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.api.JsonResult<defs.api.ArticleVODX>;

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
        id: number;
      }

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Basic Error Controller
   */
  export namespace basicError {
    /**
     * errorHtml
     * /error
     */
    export namespace errorHtml {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * errorHtml
     * /error
     */
    export namespace putError {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * errorHtml
     * /error
     */
    export namespace postError {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * errorHtml
     * /error
     */
    export namespace deleteError {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * errorHtml
     * /error
     */
    export namespace optionsError {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * errorHtml
     * /error
     */
    export namespace headError {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * errorHtml
     * /error
     */
    export namespace patchError {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * errorHtml
     * /error
     */
    export namespace traceError {
      export class Params {}

      export type Response = defs.api.ModelAndView;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Comment Controller
   */
  export namespace comment {
    /**
     * 评论列表
     * /comment
     */
    export namespace getList {
      export class Params {
        /** current */
        current?: number;
        /** size */
        size?: number;
        /** replyArticleId */
        replyArticleId?: number;
      }

      export type Response = defs.api.JsonResult<
        defs.api.IPage<defs.api.CommentDX>
      >;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新评论
     * /comment
     */
    export namespace updateById {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.CommentDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增评论
     * /comment
     */
    export namespace save {
      export class Params {}

      export type Response = defs.api.JsonResult<string>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.CommentDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 删除评论
     * /comment/{id}
     */
    export namespace removeById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Elog Controller
   */
  export namespace elog {
    /**
     * 日志列表
     * /log
     */
    export namespace getList {
      export class Params {}

      export type Response = defs.api.JsonResult<Array<defs.api.ElogDX>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增日志
     * /log
     */
    export namespace uploadLog {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: ObjectMap<any, string>,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * Mood Controller
   */
  export namespace mood {
    /**
     * 说说列表
     * /mood
     */
    export namespace getList {
      export class Params {
        /** current */
        current?: number;
        /** size */
        size?: number;
      }

      export type Response = defs.api.JsonResult<
        defs.api.IPage<defs.api.MoodDX>
      >;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新说说
     * /mood
     */
    export namespace updateById {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.MoodDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增说说
     * /mood
     */
    export namespace save {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.MoodDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 说说详情
     * /mood/{id}
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.api.JsonResult<defs.api.MoodDX>;

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
        id: number;
      }

      export type Response = defs.api.JsonResult<boolean>;

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
     * 随机获取一张二次元图片
     * /img
     */
    export namespace getImg {
      export class Params {
        /** type */
        type: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 随机获取一张二次元图片
     * /img/{type}
     */
    export namespace getImgByType {
      export class Params {
        /** type */
        type: string;
      }

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
        email: string;
        /** pwd */
        pwd: string;
      }

      export type Response = defs.api.JsonResult<string>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取主人用户信息
     * /masterInfo
     */
    export namespace getMasterInfo {
      export class Params {}

      export type Response = defs.api.JsonResult<defs.api.UserDX>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 注册
     * /reg
     */
    export namespace register {
      export class Params {}

      export type Response = defs.api.JsonResult<string>;

      export const init: Response;

      export function request(
        params: Params,
        body: ObjectMap<any, string>,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 注册并登录
     * /reg_login
     */
    export namespace doRegAndLogin {
      export class Params {}

      export type Response = defs.api.JsonResult<string>;

      export const init: Response;

      export function request(
        params: Params,
        body: ObjectMap<any, string>,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 设置站长信息
     * /saveMaster
     */
    export namespace saveMaster {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.UserDX0,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 发送邮件验证码
     * /sendVerifyCode
     */
    export namespace sendVerifyCode {
      export class Params {}

      export type Response = defs.api.JsonResult;

      export const init: Response;

      export function request(
        params: Params,
        body: ObjectMap<any, string>,
        options?: any,
      ): Promise<Response>;
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

      export type Response = defs.api.JsonResult<string>;

      export const init: Response;

      export function request(
        params: Params,
        body: string,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 获取当前登录用户信息
     * /userInfo
     */
    export namespace getUserInfo {
      export class Params {}

      export type Response = defs.api.JsonResult<defs.api.UserDX>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * Type Controller
   */
  export namespace type {
    /**
     * 类型列表
     * /type
     */
    export namespace getList {
      export class Params {}

      export type Response = defs.api.JsonResult<Array<defs.api.TypeDX>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新类型
     * /type
     */
    export namespace updateById {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.TypeDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增类型
     * /type
     */
    export namespace save {
      export class Params {}

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.api.TypeDX,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 类型详情
     * /type/{id}
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.api.JsonResult<defs.api.TypeDX>;

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
        id: number;
      }

      export type Response = defs.api.JsonResult<boolean>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }
}
