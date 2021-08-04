import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, waitFor } from '../../__test__/test-util';
import { Counter } from './Counter';

/**
 * 测试异步更新 counter
 */
test('async increment counter value', async () => {
  const { container } = render(<Counter />);

  const buttons = container.querySelectorAll('button');

  const button = Array.from(buttons).filter((btn) => btn.textContent === '+')?.[0] as HTMLButtonElement;

  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  const span = container.querySelector('span') as HTMLSpanElement;

  expect(span).toBeInTheDocument();

  await waitFor(() => {
    expect(span).toHaveTextContent('1');
  });
});
