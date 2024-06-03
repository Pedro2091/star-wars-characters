import { render, screen } from '@testing-library/react'
import * as useFetchFile from "../../../services/api";
import { faker } from '@faker-js/faker';
import CharacterList from '..';

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

const useFetchSpy = jest.spyOn(useFetchFile, "useFetch");

describe("Characters List Component", () => {
    it("should render a list of characters", async () => {
        const name: string = faker.person.fullName();
        useFetchSpy.mockReturnValue({
            data: {
                count: faker.number.int(),
                next: faker.string.sample(),
                previous: faker.string.sample(),
                results: [{
                    name: name,
                    height: faker.string.sample(),
                    mass: faker.string.sample(),
                    hair_color: faker.string.sample(),
                    skin_color: faker.string.sample(),
                    eye_color: faker.string.sample(),
                    birth_year: faker.string.sample(),
                    gender: faker.string.sample(),
                    homeworld: faker.string.sample(),
                }]
            },
            loading: false,
            error: null,
        });

        render(<CharacterList currentPagination={1} search={null} setTotalCharacters={jest.fn()} />);

        expect(screen.getByText(name)).toBeInTheDocument();
    });

    it("should render loading spin when is loading", async () => {
        const name: string = faker.person.fullName();
        useFetchSpy.mockReturnValue({
            data: {
                count: faker.number.int(),
                next: faker.string.sample(),
                previous: faker.string.sample(),
                results: [{
                    name: faker.person.fullName(),
                    height: faker.string.sample(),
                    mass: faker.string.sample(),
                    hair_color: faker.string.sample(),
                    skin_color: faker.string.sample(),
                    eye_color: faker.string.sample(),
                    birth_year: faker.string.sample(),
                    gender: faker.string.sample(),
                    homeworld: faker.string.sample(),
                }]
            },
            loading: true,
            error: null,
        });

        render(<CharacterList currentPagination={1} search={null} setTotalCharacters={jest.fn()} />);

        expect(screen.queryByText(name)).not.toBeInTheDocument();
        expect(screen.getByTestId("loading")).toBeInTheDocument();
    });

    it("should render error message when is error", async () => {
        const name: string = faker.person.fullName();
        const errorMessage: string = faker.lorem.sentence();
        useFetchSpy.mockReturnValue({
            data: {
                count: faker.number.int(),
                next: faker.string.sample(),
                previous: faker.string.sample(),
                results: [{
                    name: name,
                    height: faker.string.sample(),
                    mass: faker.string.sample(),
                    hair_color: faker.string.sample(),
                    skin_color: faker.string.sample(),
                    eye_color: faker.string.sample(),
                    birth_year: faker.string.sample(),
                    gender: faker.string.sample(),
                    homeworld: faker.string.sample(),
                }]
            },
            loading: false,
            error: new Error(errorMessage),
        });

        render(<CharacterList currentPagination={1} search={null} setTotalCharacters={jest.fn()} />);

        expect(screen.queryByText(name)).not.toBeInTheDocument();
        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });

    it("should render a message when no characters are found", async () => {
        useFetchSpy.mockReturnValue({
            data: {
                count: faker.number.int(),
                next: faker.string.sample(),
                previous: faker.string.sample(),
                results: []
            },
            loading: false,
            error: null,
        });

        render(<CharacterList currentPagination={1} search={null} setTotalCharacters={jest.fn()} />);

        expect(screen.getByText(`No characters found`)).toBeInTheDocument();
    });
});
