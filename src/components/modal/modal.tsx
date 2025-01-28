import { Action } from "@/types";
import Image from "next/image";
import { TeacherForm } from "@/components/ui/form/teacher-form";
import { Button } from "@/components/ui/button";
import { modalProps } from "@/const/modal";

export const Modal = ({ open, title, onClose, action, type }: modalProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const Form = () => {
    return (
      <>
        {action.includes(Action.Add) && type === "student" && (
          <div>
            <TeacherForm title={title} />
          </div>
        )}
        {action.includes(Action.Delete) && (
          <div className="flex flex-col justify-center items-center">
            <p className="mb-4">Are you sure want to delete this data ?</p>
            <Button className="w-full" variant="danger">
              {title}
            </Button>
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
