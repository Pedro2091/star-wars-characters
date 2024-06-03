import { render, screen } from "@testing-library/react";
import CharacterCard from "..";
import { faker } from "@faker-js/faker";

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

describe("Character Card Component", () => {
    it("should render the character card component", async () => {
        const name: string = faker.person.fullName();
        const characterMock = {
            name: name,
            height: faker.string.sample(),
            mass: faker.string.sample(),
            hair_color: faker.string.sample(),
            skin_color: faker.string.sample(),
            eye_color: faker.string.sample(),
            birth_year: faker.string.sample(),
            gender: faker.string.sample(),
            homeworld: faker.string.sample(),
        }

        render(<CharacterCard character={characterMock} />);

        expect(screen.getByText(name)).toBeInTheDocument();
    });
});




