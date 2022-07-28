import { render } from "@testing-library/react";
import { Table } from ".";

describe("Table", () => {
    const content = [{ title: "title", poster_path: "poster_path", id: '1' }]
    test("should render without crashing", () => {
        const { container } = render(<Table content={content} />);
        expect(container).toBeTruthy();
    });
});