import * as React from "react"
import { X } from "lucide-react"

const Dialog = ({ open = false, onOpenChange, children }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => onOpenChange?.(false)}>
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%]" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

const DialogContent = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
    {children}
  </div>
)

const DialogHeader = ({ children }) => (
  <div className="flex items-center justify-between mb-4">
    {children}
  </div>
)

const DialogTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
)

export { Dialog, DialogContent, DialogHeader, DialogTitle }
