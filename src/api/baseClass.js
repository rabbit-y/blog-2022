class ArticleCountVODX {
  /** total */
  total = undefined;

  /** typeId */
  typeId = '';

  /** typeName */
  typeName = '';
}

class ArticleDX {
  /** content */
  content = '';

  /** createTime */
  createTime = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** title */
  title = '';

  /** typeId */
  typeId = '';
}

class ArticleVODX {
  /** content */
  content = '';

  /** createTime */
  createTime = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** title */
  title = '';

  /** typeId */
  typeId = '';

  /** typeName */
  typeName = '';
}

class CommentDX {
  /** 评论人头像 */
  avatar = '';

  /** 评论人博客地址 */
  blogUrl = '';

  /** content */
  content = '';

  /** createTime */
  createTime = '';

  /** 评论人邮箱 */
  email = '';

  /** id */
  id = undefined;

  /** 评论人昵称 */
  nickName = '';

  /** replyArticleId */
  replyArticleId = undefined;

  /** 回复评论的id */
  replyCmId = undefined;
}

class ElogDX {
  /** id */
  id = undefined;

  /** info */
  info = '';
}

class IPage {
  /** current */
  current = undefined;

  /** pages */
  pages = undefined;

  /** records */
  records = [];

  /** size */
  size = undefined;

  /** total */
  total = undefined;
}

class JsonResult {
  /** code */
  code = undefined;

  /** data */
  data = new ArticleVODX();

  /** msg */
  msg = '';
}

class ModelAndView {
  /** empty */
  empty = false;

  /** model */
  model = undefined;

  /** modelMap */
  modelMap = undefined;

  /** reference */
  reference = false;

  /** status */
  status = 'ACCEPTED';

  /** view */
  view = new View();

  /** viewName */
  viewName = '';
}

class MoodDX {
  /** content */
  content = '';

  /** createTime */
  createTime = '';

  /** id */
  id = undefined;
}

class TypeDX {
  /** description */
  description = '';

  /** id */
  id = undefined;

  /** name */
  name = '';
}

class UserDX {
  /** articleCounts */
  articleCounts = [];

  /** avatar */
  avatar = '';

  /** blog */
  blog = '';

  /** email */
  email = '';

  /** id */
  id = undefined;

  /** nickname */
  nickname = '';

  /** other */
  other = '';

  /** pwd */
  pwd = '';

  /** role */
  role = '';
}

class UserDX0 {
  /** avatar */
  avatar = '';

  /** blog */
  blog = '';

  /** email */
  email = '';

  /** id */
  id = undefined;

  /** nickname */
  nickname = '';

  /** other */
  other = '';

  /** pwd */
  pwd = '';

  /** role */
  role = '';
}

class UserDX1 {
  /** avatar */
  avatar = '';

  /** blog */
  blog = '';

  /** email */
  email = '';

  /** id */
  id = undefined;

  /** nickname */
  nickname = '';

  /** other */
  other = '';

  /** pwd */
  pwd = '';

  /** role */
  role = '';
}

class View {
  /** contentType */
  contentType = '';
}

export const api = {
  ArticleCountVODX,
  ArticleDX,
  ArticleVODX,
  CommentDX,
  ElogDX,
  IPage,
  JsonResult,
  ModelAndView,
  MoodDX,
  TypeDX,
  UserDX,
  UserDX0,
  UserDX1,
  View,
};
