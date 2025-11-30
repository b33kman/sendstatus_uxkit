import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "../../lib/utils"

interface SelectContextType {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextType | null>(null);

const Select: React.FC<{
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}> = ({ value, onValueChange, children }) => {
  const [internalValue, setInternalValue] = useState("");
  const [open, setOpen] = useState(false);
  
  const activeValue = value !== undefined ? value : internalValue;
  const handleValueChange = (v: string) => {
    setInternalValue(v);
    onValueChange?.(v);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value: activeValue, onValueChange: handleValueChange, open, setOpen }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  
  return (
    <button
      ref={ref}
      onClick={() => context?.setOpen(!context.open)}
      className={cn(
        "flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-medium text-forest transition-all shadow-sm",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue: React.FC<{ placeholder?: string; className?: string }> = ({ placeholder, className }) => {
  const context = React.useContext(SelectContext);
  // This is a simplified version; in a real app, we'd need to look up the label from the children
  return (
    <span className={cn("block truncate", className)}>
      {context?.value || placeholder || "Select..."}
    </span>
  );
};

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  
  if (!context?.open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-xl border border-gray-200 bg-white text-forest shadow-xl animate-in fade-in-80 zoom-in-95 mt-2 w-full",
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  const isSelected = context?.value === value;

  return (
    <div
      ref={ref}
      onClick={() => context?.onValueChange(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-lg py-2.5 pl-8 pr-2 text-sm outline-none hover:bg-cream focus:bg-cream focus:text-forest data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-medium transition-colors",
        isSelected && "bg-lime/10 text-forest",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4 text-lime" />}
      </span>
      <span className="truncate">{children}</span>
    </div>
  );
});
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }