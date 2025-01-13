interface ModalProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  action: string;
}
export const Modal = ({ open, title, onClose, action }: ModalProps) => {
  return (
    <>
      {open && (
        <>
          <div
            onClick={onClose}
            className="bg-black w-screen h-screen absolute left-0 top-0  bg-opacity-60  flex items-center justify-center"
          >
            <div className="bg-white p-4 rounded-md">hello</div>
          </div>
        </>
      )}
    </>
  );
};
