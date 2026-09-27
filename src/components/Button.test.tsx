import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("renders button", () => {
    render(<Button onClick={() => {}} />);

    expect(
      screen.getByRole("button", {
        name: "Click me",
      })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick} />);

    await user.click(
      screen.getByRole("button", {
        name: "Click me",
      })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});