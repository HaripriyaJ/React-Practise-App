import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  expect(render(<BrowserRouter><App /></BrowserRouter>)).toBeTruthy();
});
