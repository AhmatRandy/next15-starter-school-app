export type actionType = "Add" | "Delete" | "Edit";

export interface modalProps {
  open: boolean;
  type: string;
  title: string;
  onClose: () => void;
  id: string;
  action: actionType;
}
