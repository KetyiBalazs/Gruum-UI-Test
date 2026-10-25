import { useId, useRef, type ReactNode } from "react";
import "./Popover.css";

type PopoverProps = {
  label: string;
  title?: string;
  body: string;
  children: ReactNode;
};

export function Popover({ label, title, body, children }: PopoverProps) {
  const reactId = useId();
  const popoverId = `popover-${reactId.replace(/:/g, "")}`;
  const anchorRef = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef(0);

  function cancelHide() {
    window.clearTimeout(hideTimer.current);
  }

  function show() {
    cancelHide();
    const anchor = anchorRef.current;
    const surface = popoverRef.current;
    if (!anchor || !surface) return;

    for (const open of document.querySelectorAll("[popover]:popover-open")) {
      if (open !== surface && open instanceof HTMLElement) open.hidePopover();
    }

    const rect = anchor.getBoundingClientRect();
    surface.style.setProperty("--popover-top", `${rect.bottom}px`);
    surface.style.setProperty("--popover-left", `${rect.left}px`);
    surface.showPopover();

    const popRect = surface.getBoundingClientRect();
    const overflow = popRect.right - (window.innerWidth - 16);
    if (overflow > 0) {
      surface.style.setProperty(
        "--popover-left",
        `${Math.max(16, rect.left - overflow)}px`,
      );
    }
  }

  function hide() {
    cancelHide();
    hideTimer.current = window.setTimeout(() => {
      popoverRef.current?.hidePopover();
    }, 120);
  }

  return (
    <span
      ref={anchorRef}
      className="popover-anchor"
      tabIndex={0}
      aria-label={label}
      aria-describedby={popoverId}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      <div
        ref={popoverRef}
        id={popoverId}
        popover="manual"
        className="popover"
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {title ? <h3 className="popover__title">{title}</h3> : null}
        <p className="popover__body">{body}</p>
      </div>
    </span>
  );
}
