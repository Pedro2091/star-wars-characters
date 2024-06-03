import { render, screen } from "@testing-library/react";
import Header from "..";

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

describe("Header Component", () => {
    it("should render the header component", async () => {
        render(<Header />);

        expect(screen.getByText("Desafio Técnico")).toBeInTheDocument();
    });
});




