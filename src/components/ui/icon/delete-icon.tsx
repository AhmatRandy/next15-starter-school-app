import { MdDelete } from "react-icons/md";

interface AddTaskProps {
  className: string;
  onClick: () => void;
  size: number;
}

export const DeletIcon = ({ className, onClick, size }: AddTaskProps) => {
  return (
    <button className={className} onClick={onClick}>
      <MdDelete size={size} />
    </button>
  );
};
