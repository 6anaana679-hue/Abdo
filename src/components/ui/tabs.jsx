import * as React from "react"

const Tabs = ({ defaultValue, value, onValueChange, children, className = "" }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue || value)
  
  return (
    <div className={className}>
      {React.Children.map(children, child => 
        child.type === TabsList || child.type === TabsContent
          ? React.cloneElement(child, { activeTab, setActiveTab: onValueChange || setActiveTab })
          : child
      )}
    </div>
  )
}

const TabsList = ({ children, className = "" }) => (
  <div className={`inline-flex items-center space-x-1 ${className}`}>
    {children}
  </div>
)

const TabsTrigger = ({ value, children, className = "", activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab?.(value)}
    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
      activeTab === value
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:text-foreground"
    } ${className}`}
    data-state={activeTab === value ? "active" : "inactive"}
  >
    {children}
  </button>
)

const TabsContent = ({ value, children, activeTab }) => (
  activeTab === value ? <>{children}</> : null
)

export { Tabs, TabsList, TabsTrigger, TabsContent }
