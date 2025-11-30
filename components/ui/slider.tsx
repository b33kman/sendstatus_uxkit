import React from "react"
import { cn } from "../../lib/utils"

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, min = 0, max = 100, step = 1, onValueChange, ...props }, ref) => {
    
    // Calculate percentage for gradient background
    const percentage = ((Number(value) - min) / (max - min)) * 100;

    return (
      <div className={cn("relative w-full h-6 flex items-center", className)}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          ref={ref}
          onChange={(e) => onValueChange?.(Number(e.target.value))}
          className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
          {...props}
        />
        {/* Custom Track */}
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative z-10">
            <div 
                className="h-full bg-forest rounded-full transition-all" 
                style={{ width: `${percentage}%` }}
            />
        </div>
        {/* Custom Thumb */}
        <div 
            className="absolute h-6 w-6 bg-lime border-2 border-white rounded-full shadow-md z-10 pointer-events-none transition-all hover:scale-110"
            style={{ left: `calc(${percentage}% - 12px)` }}
        />
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }