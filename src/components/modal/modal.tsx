import { Action } from "@/types";
import Image from "next/image";
import { TeacherForm } from "../ui/form/teacher-form";

interface ModalProps {
  open: boolean;
  title?: string;
  id?: string;
  onClose?: () => void;
  action: string;
}

export const Modal = ({ open, title, onClose, action }: ModalProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const Form = () => {
    return (
      <>
        {action.includes(Action.Add) && (
          <div>
            <TeacherForm title={title} />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {open && (
        <>
          <div
            onClick={onClose}
            className="bg-black w-screen h-screen absolute left-0 top-0  bg-opacity-60  flex items-center justify-center"
          >
            <div
              onClick={handleClick}
              className="bg-white p-4 relative z-100 rounded-md min-w-[50%]"
            >
              <Form />

              <div className="absolute right-2 top-2 cursor-pointer">
                <Image
                  src="/close.png"
                  alt=""
                  width={14}
                  height={14}
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
