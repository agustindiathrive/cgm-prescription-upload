import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-white border border-[#BBBBBB] border-solid flex h-10 outline-none px-3 rounded-md text-black text-sm w-full file:bg-transparent file:border-0 file:font-medium file: p-2 file:text-foreground file:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
