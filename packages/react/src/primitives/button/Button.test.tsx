import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("handles click", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows loading state", () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
  });

  it("is disabled when loading", () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies className", () => {
    render(<Button className="custom">Styled</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = { current: null } as React.RefObject<HTMLButtonElement>;
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("renders left icon when not loading", () => {
    render(<Button leftIcon={<span data-testid="left-icon">L</span>}>Text</Button>);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("hides left icon when loading", () => {
    render(<Button loading leftIcon={<span data-testid="left-icon">L</span>}>Text</Button>);
    expect(screen.queryByTestId("left-icon")).not.toBeInTheDocument();
  });

  it("renders right icon when not loading", () => {
    render(<Button rightIcon={<span data-testid="right-icon">R</span>}>Text</Button>);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("hides right icon when loading", () => {
    render(<Button loading rightIcon={<span data-testid="right-icon">R</span>}>Text</Button>);
    expect(screen.queryByTestId("right-icon")).not.toBeInTheDocument();
  });
});
