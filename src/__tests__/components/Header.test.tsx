import { render } from '@testing-library/react';
import Header from '../../components/Header';

test('renders a nav', () => {
  const { _container, getByText } = render(<Header />);
  expect(getByText('Home')).toBeInTheDocument();
});
