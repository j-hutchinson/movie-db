import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from ".";

describe("Pagination", () => {
    const totalPages = 4;
    const setPage = jest.fn();
    const props = {
        totalPages, setPage,
    }

    afterEach(() => {
        jest.resetAllMocks();
    })

    test("should render 6 buttons", () => {
        render(<Pagination {...props} />);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(6);
    });

    test("should call setPage on button click", () => {
        render(<Pagination {...props} />);
        const nextButton = screen.getByLabelText("Go to next page");
        fireEvent.click(nextButton)
        expect(setPage).toHaveBeenCalledWith(2);
        expect(setPage).toHaveBeenCalledTimes(1);
    });
});