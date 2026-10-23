import { useId, useLayoutEffect, useRef, type ReactNode } from "react";
import { Button } from "./Button";
import "./Modal.css";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    dialog.showModal();
    return () => dialog.close();
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="modal__positioner" onMouseDown={onClose}>
        <div
          className="modal__panel"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="modal__header">
            <h2 id={titleId} className="modal__title">
              {title}
            </h2>
            <Button variant="ghost" size="small" onClick={onClose} aria-label="Close">
              Close
            </Button>
          </div>
          <div id={descriptionId} className="modal__body">
            {children}
          </div>
          {footer ? <div className="modal__footer">{footer}</div> : null}
        </div>
      </div>
    </dialog>
  );
}
