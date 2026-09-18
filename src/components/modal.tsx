import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}
export default function Modal({ isOpen, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      //dialog.current?.show();
      console.log("MODLALE APERTA");
    } else {
      //dialog.current?.hidePopover();
      console.log("MODALE CHIUSA");
    }
  }, [isOpen]);
  return (
    // <dialog ref={dialog} className="modal">

    // </dialog>
    <>
      {isOpen && (
        <div id="reset-modal" className="modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header"></div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
