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
        <dialog id="my_modal_1 " className="modal modal-open">
          <div className="modal-box">{children}</div>
        </dialog>
      )}
    </>
  );
}
