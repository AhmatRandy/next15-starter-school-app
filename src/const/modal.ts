export interface modalProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  action: string;
}
