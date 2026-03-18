import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";

// Mock motion/react to avoid animation complexities in tests
vi.mock("motion/react", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      className,
      onClick,
      "aria-hidden": ariaHidden,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement> & { "aria-hidden"?: string }) => (
      <div className={className} onClick={onClick} aria-hidden={ariaHidden} {...rest}>
        {children}
      </div>
    ),
  },
}));

describe("Modal", () => {
  it("renders nothing when closed", () => {
    render(
      <Modal open={false} onClose={() => {}}>
        Content
      </Modal>
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(
      <Modal open={true} onClose={() => {}}>
        Modal Content
      </Modal>
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(
      <Modal open={true} onClose={() => {}} title="My Modal">
        Content
      </Modal>
    );
    expect(screen.getByText("My Modal")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(
      <Modal open={true} onClose={() => {}} description="Some description">
        Content
      </Modal>
    );
    expect(screen.getByText("Some description")).toBeInTheDocument();
  });

  it("calls onClose when Escape is pressed", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("does not call onClose on Escape when closeOnEsc is false", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose} closeOnEsc={false}>
        Content
      </Modal>
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).not.toHaveBeenCalled();
  });

  it("has dialog role", () => {
    render(
      <Modal open={true} onClose={() => {}}>
        Content
      </Modal>
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("has aria-modal attribute", () => {
    render(
      <Modal open={true} onClose={() => {}}>
        Content
      </Modal>
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("renders close button", () => {
    render(
      <Modal open={true} onClose={() => {}}>
        Content
      </Modal>
    );
    expect(screen.getByLabelText("Close modal")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>
    );
    fireEvent.click(screen.getByLabelText("Close modal"));
    expect(onClose).toHaveBeenCalled();
  });

  it("renders footer", () => {
    render(
      <Modal open={true} onClose={() => {}} footer={<button>Save</button>}>
        Content
      </Modal>
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
