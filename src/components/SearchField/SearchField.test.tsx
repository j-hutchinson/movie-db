import { render, screen } from '@testing-library/react';
import { SearchField } from './component';

describe("SearchField", () => {
  const onChangeMock = jest.fn();
  it('should render correctly', () => {
    render(<SearchField onChange={onChangeMock} />);
    const labelElement = screen.getByText(/Search the site/i)
    expect(labelElement).toBeInTheDocument();
  });
});