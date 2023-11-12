import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import GerundInfinitive from '../pages/GerundInfinitive';
import MainLayout from '../layout/MainLayout';
import IrregularVerbs from '../pages/IrregularVerbs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <GerundInfinitive />,
      },
      {
        path: '/irregular-verbs',
        element: <IrregularVerbs />,
      },
    ],
  },
]);
