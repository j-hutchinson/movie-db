import { render } from "@testing-library/react";
import { Gallery } from ".";

describe("Gallery", () => {
    const content = [{ title: "title", poster_path: "poster_path", id: '1', release_date: '2022 04 10' }];
    test("should render without crashing", () => {
        const { container } = render(<Gallery content={content} />);
        expect(container).toBeTruthy();
    });
});