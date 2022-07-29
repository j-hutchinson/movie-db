import { render, screen } from "@testing-library/react";
import { Gallery } from ".";
import { movies, movieMock } from '../../__mocks__/moviesMock';

describe("Gallery", () => {
    test("should render without crashing", () => {
        const { container } = render(<Gallery content={[movieMock]} />);
        expect(container).toBeTruthy();
    });
    test("should render all items", () => {
        render(<Gallery content={movies} />);
        const element = screen.getAllByTestId('gallery-item')
        expect(element).toHaveLength(2);
    });
});