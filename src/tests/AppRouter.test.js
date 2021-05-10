import { render, screen } from '@testing-library/react';
import AppRouter from '../AppRouter';

test('renders short link form', () => {
  render(<AppRouter/>);
  const linkElement = screen.getByText(/Leave blank for an easy to remember auto-generated path!/i);
  expect(linkElement).toBeInTheDocument();
});
