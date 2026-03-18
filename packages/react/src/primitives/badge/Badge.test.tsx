import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText("Tag").tagName).toBe("SPAN");
  });

  it("applies pill shape by default", () => {
    render(<Badge>Pill</Badge>);
    expect(screen.getByText("Pill")).toHaveClass("rounded-full");
  });

  it("applies non-pill shape when pill is false", () => {
    render(<Badge pill={false}>Square</Badge>);
    expect(screen.getByText("Square")).not.toHaveClass("rounded-full");
  });

  it("applies custom className", () => {
    render(<Badge className="custom">Styled</Badge>);
    expect(screen.getByText("Styled")).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = { current: null } as React.RefObject<HTMLSpanElement>;
    render(<Badge ref={ref}>Ref</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("passes through additional HTML attributes", () => {
    render(<Badge data-testid="my-badge">Test</Badge>);
    expect(screen.getByTestId("my-badge")).toHaveTextContent("Test");
  });
});
