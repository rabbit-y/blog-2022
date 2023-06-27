import { lazy } from 'react';

export const RoutersList = [
  {
    path: '/say',
    element: lazy(() => import('@pages/say/index')),
  },
  {
    path: 'mark',
    element: lazy(() => import('@pages/mark/index')),
    child: [
      {
        path: '/mark',
        element: lazy(() => import('@pages/mark/list')),
      },
      {
        path: ':type',
        element: lazy(() => import('@pages/mark/list')),
      },
      {
        path: ':type/:id',
        element: lazy(() => import('@pages/mark/dtl')),
      },
    ],
  },
  {
    path: '/comment',
    element: lazy(() => import('@pages/comment/index')),
  },
  {
    path: '/me',
    element: lazy(() => import('@pages/me/index')),
  },
  {
    path: '/bilibili',
    element: lazy(() => import('@pages/bilibili/index')),
  },
];
