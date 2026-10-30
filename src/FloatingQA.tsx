import { useEffect, useState } from "react";
import "./FloatingQA.css";

// Dedicated disposable QA cases. The ids belong to the surfaces, not triggers.
function TooltipA() {
  return <div className="qa-anchor"><span>Tooltip A trigger</span><span id="qa-tooltip-a" role="tooltip" data-side="top" className="qa-tip qa-tip-a">Tooltip A <span className="qa-arrow" /></span></div>;
}
function TooltipB() {
  return <div className="qa-anchor"><span>Tooltip B trigger</span><span id="qa-tooltip-b" role="tooltip" data-side="left" className="qa-tip qa-tip-b">Tooltip B</span></div>;
}
function PopoverA() {
  return <div className="qa-anchor"><span>Popover A trigger</span><div id="qa-popover-a" popover="manual" data-qa-popover className="qa-pop qa-pop-a"><strong>Popover A</strong><p>First independent surface.</p></div></div>;
}
function PopoverB() {
  return <div className="qa-anchor"><span>Popover B trigger</span><div id="qa-popover-b" popover="manual" data-qa-popover className="qa-pop qa-pop-b"><strong>Popover B</strong><p>Second independent surface.</p></div></div>;
}
export default function FloatingQA() {
  const [open, setOpen] = useState(!location.search.includes("closed"));
  const duplicate = location.search.includes("duplicate");
  const absent = location.search.includes("absent");
  useEffect(() => {
    for (const el of document.querySelectorAll<HTMLElement>("[data-qa-popover]")) {
      if (open && !el.matches(":popover-open")) el.showPopover();
      if (!open && el.matches(":popover-open")) el.hidePopover();
    }
  }, [open, duplicate, absent]);
  return <main className="floating-qa">
    <h1>Floating surface QA</h1>
    <p>Open or close the surfaces to exercise capture and highlighting.</p>
    <button onClick={() => setOpen(!open)}>{open ? "Close surfaces" : "Open surfaces"}</button>
    <div className={open ? "qa-grid" : "qa-grid qa-closed"}>
      {!absent && <TooltipA />}
      <TooltipB />
      {!absent && <PopoverA />}
      <PopoverB />
      {duplicate && <><span id="qa-tooltip-a" role="tooltip" className="qa-tip qa-tip-a qa-open">Duplicate tooltip</span><div id="qa-popover-a" popover="manual" data-qa-popover className="qa-pop qa-pop-a">Duplicate popover</div></>}
      <span role="tooltip" className="qa-hidden">Accessibility copy</span>
      <div role="menu" className="qa-excluded">Excluded menu</div>
      <div role="status" className="qa-excluded">Excluded status</div>
    </div>
  </main>;
}
