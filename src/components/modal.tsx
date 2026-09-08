import {
  useEffect,
  useRef,
  type PropsWithChildren,
  type ReactNode,
} from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}
export default function Modal({ isOpen, children }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
      console.log("MODLALE APERTA");
    } else {
      dialog.current?.close();
      console.log("MODALE CHIUSA");
    }
  }, [isOpen]);
  return (
    <>
      <dialog ref={dialog} className="modal">
        {children}
      </dialog>
    </>
  );
}
