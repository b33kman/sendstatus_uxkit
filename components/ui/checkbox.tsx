import React from "react"
import { Check } from "lucide-react"
import { cn } from "../../lib/utils"

const Checkbox = React.forwardRef<
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
      role="checkbox"
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      onClick={toggle}
      ref={ref}
      className={cn(
        "peer h-5 w-5 shrink-0 rounded-lg border-2 border-forest/20 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-forest data-[state=checked]:bg-forest data-[state=checked]:text-lime transition-all",
        className
      )}
      {...props}
    >
      <span className={cn("flex items-center justify-center text-current", isChecked ? "opacity-100" : "opacity-0")}>
        <Check className="h-3.5 w-3.5 stroke-[3px]" />
      </span>
    </button>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }