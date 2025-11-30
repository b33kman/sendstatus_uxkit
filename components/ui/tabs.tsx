import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

// Context to share state between components
const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string; value?: string; onValueChange?: (value: string) => void }
>(({ className, defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue || "");
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  
  const handleValueChange = (newValue: string) => {
    setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});
Tabs.displayName = "Tabs"

const tabsListVariants = cva(
  "inline-flex items-center justify-center rounded-2xl p-1.5 text-forest/60",
  {
    variants: {
      variant: {
        default: "bg-cream border border-black/5",
        underline: "bg-transparent border-b border-gray-100 rounded-none w-full justify-start p-0",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(tabsListVariants({ variant, className }))}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-6 py-2 text-sm font-bold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: 
            "rounded-xl data-[state=active]:bg-white data-[state=active]:text-forest data-[state=active]:shadow-sm text-forest/60 hover:text-forest",
        underline: 
            "rounded-none border-b-2 border-transparent pb-3 data-[state=active]:border-lime data-[state=active]:text-forest hover:text-forest hover:bg-transparent",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof tabsTriggerVariants> & { value: string }
>(({ className, variant, value, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  const isActive = context?.value === value;

  return (
    <button
      ref={ref}
      className={cn(tabsTriggerVariants({ variant, className }))}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => context?.onValueChange(value)}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  if (context?.value !== value) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 animate-in fade-in-50 zoom-in-95 duration-200",
        className
      )}
      {...props}
    />
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }