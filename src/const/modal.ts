type actionType = "Add" | "Delete" | "Edit";

export interface modalProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  id?: string;
  action: actionType;
}
