import { MdEdit } from "react-icons/md";

interface EditIconPorps {
  className: string;
  onClick: () => void;
  size?: number;
}

export const EditIcon = ({ className, onClick, size }: EditIconPorps) => {
  return (
    <button onClick={onClick}>
      <MdEdit className={className} size={size} />
    </button>
  );
};
