import { lazy } from 'react';

export const RoutersList = [
  {
    path: '/say',
    element: lazy(() => import("@pages/say/index"))
  },
  {
    path: 'mark',
    element: lazy(() => import("@pages/mark/index")),
    child: [{
      path: '/mark',
      element: lazy(() => import("@pages/mark/list"))
    }, {
      path: ':type',
      element: lazy(() => import("@pages/mark/list"))
    }, {
      path: ':type/:id',
      element: lazy(() => import("@pages/mark/dtl"))
    }]
  },
  {
    path: '/time',
    element: lazy(() => import("@pages/time/index"))
  },
  {
    path: '/plugins',
    element: lazy(() => import("@pages/plugins/index"))
  },
  {
    path: '/comment',
    element: lazy(() => import("@pages/comment/index"))
  }, {
    path: '/me',
    element: lazy(() => import("@pages/me/index"))
  },
  {
    path: '/bilibili',
    element: lazy(() => import("@pages/bilibili/index"))
  }
]
export const AdminRoutersList = [
  {
    path: '/admin',
    element: lazy(() => import("@pages/admin/index/index"))
  },
  {
    path: '/admin/profile',
    element: lazy(() => import("@pages/admin/profile/index"))
  },
  {
    path: '/admin/say',
    element: lazy(() => import("@pages/admin/say/index"))
  },
  {
    path: 'mark',
    element: lazy(() => import("@pages/admin/mark/index")),
    child: [{
      path: '/admin/mark',
      element: lazy(() => import("@pages/admin/mark/list"))
    }, {
      path: '/admin/mark/:id',
      element: lazy(() => import("@pages/admin/mark/dtl"))
    }]
  },
  {
    path: 'classify',
    element: lazy(() => import("@pages/admin/classify/index")),
    child: [{
      path: '/admin/classify',
      element: lazy(() => import("@pages/admin/classify/list"))
    }]
  }
]