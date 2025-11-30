import React from "react"
import { cn } from "../../lib/utils"

const Switch = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { checked?: boolean; onCheckedChange?: (checked: boolean) => void }
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = React.useState(checked || false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const toggle = () => {
    const newValue = !isChecked;
    setInternalChecked(newValue);
    onCheckedChange?.(newValue);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      onClick={toggle}
      ref={ref}
      className={cn(
        "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
        isChecked ? "bg-forest" : "bg-gray-200",
        className
      )}
      {...props}
    >
      <span
        data-state={isChecked ? "checked" : "unchecked"}
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-lime"
        )}
      />
    </button>
  )
})
Switch.displayName = "Switch"

export { Switch }