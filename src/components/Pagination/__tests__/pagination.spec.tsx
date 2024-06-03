import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '..';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: any) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => { },
    })
});

describe("Pagination Component", () => {
    it("should render the pagination component", async () => {
        render(<Pagination current={1} total={10} setCurrentPagination={jest.fn()} />)

        expect(screen.getByTestId("pagination")).toBeInTheDocument();
    });


    it("should call the setCurrentPagination function when the a page is selected", async () => {
        const setCurrentPaginationMock = jest.fn();
        render(<Pagination current={1} total={40} setCurrentPagination={setCurrentPaginationMock} />);

        fireEvent.click(screen.getByTitle('4'));

        expect(setCurrentPaginationMock).toHaveBeenCalledWith(4);
    });

    it("should call the setCurrentPagination function when the next page is clicked", async () => {
        const setCurrentPaginationMock = jest.fn();
        render(<Pagination current={1} total={40} setCurrentPagination={setCurrentPaginationMock} />);

        fireEvent.click(screen.getByTitle('Next Page'));

        expect(setCurrentPaginationMock).toHaveBeenCalledWith(2);
    });

    it("should call the setCurrentPagination function when the previous page is clicked", async () => {
        const setCurrentPaginationMock = jest.fn();
        render(<Pagination current={2} total={40} setCurrentPagination={setCurrentPaginationMock} />);

        fireEvent.click(screen.getByTitle('Previous Page'));

        expect(setCurrentPaginationMock).toHaveBeenCalledWith(1);
    });

});
