import React from "react";

export const useModal = <T>(props?: T) => {
  const [mergeState, setMergeState] = React.useState<T>({
    ...props,
    open: false,
  } as T);

  const showModal = <T>(props: T) => {
    setMergeState((prev) => ({ ...prev, ...props, open: true }));
  };

  const hide = () => {
    setMergeState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return [
    {
      onClose: () => hide(),
      ...mergeState,
    },
    showModal,
    hide,
  ] as const;
};
