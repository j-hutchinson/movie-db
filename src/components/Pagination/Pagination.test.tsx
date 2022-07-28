import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from ".";

describe("Pagination", () => {
    const currentPage = 1;
    const totalPages = 1;
    const setPage = jest.fn();
    const props = {
        currentPage, totalPages, setPage,
    }

    test("should render 2 buttons", () => {
        render(<Pagination {...props} />);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(2);
    });
    test("should render disabled previous on page 1", () => {
        const { getByText } = render(<Pagination {...props} />);
        const prevButton = getByText("Prev");
        expect(prevButton).toBeDisabled();
    });
});