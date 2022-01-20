class ArticleVOObject {
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

class JsonResult {
  /** code */
  code = undefined;

  /** data */
  data = new ArticleVOObject();

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

class MoodObject {
  /** content */
  content = '';

  /** createTime */
  createTime = '';

  /** id */
  id = undefined;
}

class TheArticleObject {
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

class TheTypeObject {
  /** description */
  description = '';

  /** id */
  id = undefined;

  /** name */
  name = '';
}

class TheUserObject {
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
  ArticleVOObject,
  JsonResult,
  ModelAndView,
  MoodObject,
  TheArticleObject,
  TheTypeObject,
  TheUserObject,
  View,
};
