import React from 'react';
import { screen, render, fireEvent, getByTitle } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

// import your story from App.stories.js

import * as stories from './App.stories';
const { Primary } = composeStories(stories);

// Add your tests here
// See https://storybook.js.orng/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

test('checks button', () => {
    render(<Primary/>);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
});

test('checks button change after click', () => {
    render(<Primary/>);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('Thanks!');
});

test('track button change with two clicks', () => {
    render(<Primary/>);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('Thanks!');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
});
