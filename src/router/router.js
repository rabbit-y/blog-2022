import { lazy } from 'react';
export const RoutersList = [
  {
    path: '/index',
    element: lazy(() => import("@pages/index/index"))
  },
  {
    path: 'mark',
    element: lazy(() => import("@pages/mark/index")),
    child: [{
      path: ':type',
      element: lazy(() => import("@pages/mark/list"))
    }, {
      path: ':type/:id',
      element: lazy(() => import("@pages/mark/dtl"))
    }]
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
  }
]