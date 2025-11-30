import React, { useState } from "react"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

// Simple Context-based Dialog implementation
interface DialogContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextType | null>(null);

const Dialog: React.FC<{ children: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }> = ({ 
  children, 
  open, 
  onOpenChange 
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  
  const setIsOpen = (newOpen: boolean) => {
    if (!isControlled) setInternalOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean; className?: string }> = ({ children, className }) => {
  const context = React.useContext(DialogContext);
  return (
    <div onClick={() => context?.setIsOpen(true)} className={cn("inline-block cursor-pointer", className)}>
      {children}
    </div>
  );
};

const DialogContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const context = React.useContext(DialogContext);
  
  if (!context?.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-forest/20 backdrop-blur-sm transition-all animate-in fade-in duration-200" 
        onClick={() => context.setIsOpen(false)}
      />
      
      {/* Content */}
      <div className={cn(
        "relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg p-6 border border-black/5 animate-in zoom-in-95 fade-in duration-200",
        className
      )}>
        {children}
        <button 
            onClick={() => context.setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full p-2 opacity-70 ring-offset-white transition-opacity hover:opacity-100 hover:bg-gray-100 focus:outline-none"
        >
            <X className="h-4 w-4 text-forest" />
            <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left mb-4", className)}>
    {children}
  </div>
);

const DialogFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6", className)}>
    {children}
  </div>
);

const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <h2 className={cn("text-lg font-bold leading-none tracking-tight text-forest", className)}>
    {children}
  </h2>
);

const DialogDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn("text-sm text-forest/60", className)}>
    {children}
  </p>
);

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}