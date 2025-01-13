import { Action } from "@/app/types";
import Image from "next/image";
import { Input } from "../ui/input/input";

interface ModalProps {
  open: boolean;
  title?: string;
  id?: string;
  onClose?: () => void;
  action: string;
}

export const Modal = ({ open, title, onClose, action, id }: ModalProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const Form = () => {
    return (
      <>
        {action.includes(Action.Delete) && (
          <form
            action=""
            className="flex flex-col justify-center items-center gap-3"
            onClick={handleClick}
          >
            <Input />
            <span>{title}</span>
            <button className="text-white self-center rounded-md bg-red-500 p-2 px-2">
              Delete
            </button>
          </form>
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
            <div className="bg-white p-4 relative z-100 rounded-md w-[50%]">
              <Form />
              <div className="absolute right-2 top-2">
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
