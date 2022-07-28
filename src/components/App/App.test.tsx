import { render } from '@testing-library/react';
import App from './component';

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})
