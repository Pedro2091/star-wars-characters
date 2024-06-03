import { fireEvent, render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker';
import SearchBar from '..';

describe("SearchBar Component", () => {
    it("should render the pagination component", async () => {
        render(<SearchBar setSearch={jest.fn()} />);

        expect(screen.getByTestId("search")).toBeInTheDocument();
    });

    it('should call the setSearch function when the user is searching', () => {
        const searchValueMock = faker.lorem.sentence();
        const setSearchMock = jest.fn();

        render(<SearchBar setSearch={setSearchMock} />);

        const inputElement = screen.getByTestId("search");
        fireEvent.change(inputElement, { target: { value: searchValueMock } });
        fireEvent.click(screen.getByRole('button', { name: /Search/i }));

        expect(setSearchMock).toHaveBeenCalledWith(searchValueMock);
    });
});
