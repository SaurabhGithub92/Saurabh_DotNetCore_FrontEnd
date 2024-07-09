import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test('renders hello message', () => {
    render(<Hello name="World" />);
    const helloElement = screen.getByText(/hello, world!/i);
    expect(helloElement).toBeInTheDocument();
})
