import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './App';

test('renders react app properly', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const title = screen.getByText('Lets play your music');
  expect(title).toBeVisible();
});
