import { MdAddTask } from "react-icons/md";

interface AddTaskProps {
  className: string;
  onClick: () => void;
  size: number;
}

export const AddTask = ({ className, onClick, size }: AddTaskProps) => {
  return (
    <button onClick={onClick}>
      <MdAddTask size={size} className={className} />
    </button>
  );
};
