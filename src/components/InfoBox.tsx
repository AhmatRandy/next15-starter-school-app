interface InfoBoxProps {
  title?: string;
  children: React.ReactNode;
}

export const InfoBox = ({ title, children }: InfoBoxProps) => {
  return (
    <div className="border-[#56ADF2] bg-[#DDEFFC] rounded-sm p-3 mt-2 text-xs">
      {title && (
        <div className="flex gap-1 items-center">
          <h2 className="font-semibold">*</h2>
          <h2 className="font-semibold">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};
