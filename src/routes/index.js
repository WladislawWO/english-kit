import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import GerundInfinitive from '../pages/GerundInfinitive';
import MainLayout from '../layout/MainLayout';
import IrregularVerbs from '../pages/IrregularVerbs';
import { Prepositions } from '../pages/Prepositions';
import { Vocabulary } from '../pages/Vocabulary';
import { Words } from '../pages/Vocabulary/pages/Words';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Vocabulary />,
      },
      {
        path: '/vocabulary/words',
        element: <Words />,
      },
      {
        path: '/irregular-verbs',
        element: <IrregularVerbs />,
      },
      {
        path: '/prepositions',
        element: <Prepositions />,
      },
      {
        path: '/gerund-infinitive',
        element: <GerundInfinitive />,
      },
    ],
  },
]);
