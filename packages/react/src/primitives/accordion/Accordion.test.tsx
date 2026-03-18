import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion, AccordionSingleItem } from "./Accordion";

// Mock motion/react to avoid animation complexities in tests
vi.mock("motion/react", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      className,
      id,
      role,
      "aria-labelledby": ariaLabelledBy,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement> & { "aria-labelledby"?: string }) => (
      <div
        className={className}
        id={id}
        role={role}
        aria-labelledby={ariaLabelledBy}
      >
        {children}
      </div>
    ),
  },
  useReducedMotion: () => false,
}));

describe("Accordion", () => {
  const items = [
    { id: "1", trigger: "Question 1", content: "Answer 1" },
    { id: "2", trigger: "Question 2", content: "Answer 2" },
  ];

  it("renders all triggers", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("Question 1")).toBeInTheDocument();
    expect(screen.getByText("Question 2")).toBeInTheDocument();
  });

  it("toggles content on click", () => {
    render(<Accordion items={items} />);
    const trigger = screen.getByText("Question 1");
    fireEvent.click(trigger);
    expect(screen.getByText("Answer 1")).toBeInTheDocument();
  });

  it("closes previously open item in single mode", () => {
    render(<Accordion items={items} />);
    fireEvent.click(screen.getByText("Question 1"));
    expect(screen.getByText("Answer 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Question 2"));
    expect(screen.queryByText("Answer 1")).not.toBeInTheDocument();
    expect(screen.getByText("Answer 2")).toBeInTheDocument();
  });

  it("allows multiple open items when allowMultiple is true", () => {
    render(<Accordion items={items} allowMultiple />);
    fireEvent.click(screen.getByText("Question 1"));
    fireEvent.click(screen.getByText("Question 2"));
    expect(screen.getByText("Answer 1")).toBeInTheDocument();
    expect(screen.getByText("Answer 2")).toBeInTheDocument();
  });

  it("respects defaultOpen on items", () => {
    const itemsWithDefault = [
      { id: "1", trigger: "Q1", content: "A1", defaultOpen: true },
      { id: "2", trigger: "Q2", content: "A2" },
    ];
    render(<Accordion items={itemsWithDefault} />);
    expect(screen.getByText("A1")).toBeInTheDocument();
    expect(screen.queryByText("A2")).not.toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(<Accordion items={items} className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("does not open disabled items on click", () => {
    const disabledItems = [
      { id: "1", trigger: "Q1", content: "A1", disabled: true },
    ];
    render(<Accordion items={disabledItems} />);
    fireEvent.click(screen.getByText("Q1"));
    expect(screen.queryByText("A1")).not.toBeInTheDocument();
  });
});

describe("AccordionSingleItem", () => {
  const item = { id: "1", trigger: "Question", content: "Answer" };

  it("renders trigger text", () => {
    render(
      <AccordionSingleItem item={item} isOpen={false} onToggle={() => {}} />
    );
    expect(screen.getByText("Question")).toBeInTheDocument();
  });

  it("shows content when isOpen is true", () => {
    render(
      <AccordionSingleItem item={item} isOpen={true} onToggle={() => {}} />
    );
    expect(screen.getByText("Answer")).toBeInTheDocument();
  });

  it("calls onToggle when trigger is clicked", () => {
    const onToggle = vi.fn();
    render(
      <AccordionSingleItem item={item} isOpen={false} onToggle={onToggle} />
    );
    fireEvent.click(screen.getByText("Question"));
    expect(onToggle).toHaveBeenCalledOnce();
  });

  it("has correct aria-expanded attribute", () => {
    const { rerender } = render(
      <AccordionSingleItem item={item} isOpen={false} onToggle={() => {}} />
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");

    rerender(
      <AccordionSingleItem item={item} isOpen={true} onToggle={() => {}} />
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });
});
