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
import { PhrasalVerbs } from '../pages/PhrasalVerbs';
import { Words as PhrasalVerbsWords } from '../pages/PhrasalVerbs/pages/Words';

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
        path: '/phrasal-verbs',
        element: <PhrasalVerbs />,
      },
      {
        path: '/phrasal-verbs/list',
        element: <PhrasalVerbsWords />,
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
