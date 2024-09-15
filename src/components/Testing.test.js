import { fireEvent, render, screen } from "@testing-library/react";
import Testing from "./Testing";

describe(Testing, () => {
    it("Counter displays correct initial count", () => {
        render(<Testing initialCount={0} />);
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    it("Count should increment by 1 on click of increment", () => {
        render(<Testing initialCount={0} />);
        const incrementBtn = screen.getByRole("button" , {name : "increment"});
        fireEvent.click(incrementBtn)
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(1);
    });
    it("Count should decrement by 1 on click of decrement", () => {
        render(<Testing initialCount={3} />);
        const incrementBtn = screen.getByRole("button" , {name : "decrement"});
        fireEvent.click(incrementBtn)
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(2);
    });
    it("Count should be set to initialcount on click", () => {
        render(<Testing initialCount={0} />);
        const incrementBtn = screen.getByRole("button" , {name : "reset"});
        fireEvent.click(incrementBtn)
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    it("Count should be chnage sign on click", () => {
        render(<Testing initialCount={5} />);
        const incrementBtn = screen.getByRole("button" , {name : "switch sign"});
        fireEvent.click(incrementBtn)
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(-5);
    });
});