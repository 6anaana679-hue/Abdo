import * as React from "react"
import { ChevronDown } from "lucide-react"

const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative w-full">
      <div onClick={() => setOpen(!open)}>
        {React.Children.map(children, child => 
          child.type === SelectTrigger ? child : null
        )}
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50">
          {React.Children.map(children, child => 
            child.type === SelectContent ? child : null
          )}
        </div>
      )}
    </div>
  )
}

const SelectTrigger = ({ children, className = "" }) => (
  <button className={`w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background flex items-center justify-between ${className}`}>
    {children}
    <ChevronDown className="w-4 h-4 opacity-50" />
  </button>
)

const SelectContent = ({ children }) => (
  <>{children}</>
)

const SelectItem = ({ value, children, onValueChange }) => (
  <button
    className="w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground"
    onClick={() => onValueChange?.(value)}
  >
    {children}
  </button>
)

const SelectValue = ({ placeholder }) => (
  <span className="text-muted-foreground">{placeholder}</span>
)

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue }
