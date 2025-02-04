import React from "react";

export const useModal = <T>(props?: T) => {
  const [mergeState, setMergeState] = React.useState<T>({
    ...props,
    open: false,
  } as T);

  const showModal = (props: Partial<T>) => {
    setMergeState((prev) => ({ ...prev, ...props, open: true }));
  };

  const hide = () => {
    setMergeState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return {
    modalProps: {
      onClose: () => hide(),
      ...mergeState,
    },
    showModal,
    hide,
  };
};
