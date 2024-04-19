import React from 'react'
import { cn } from '../../lib/utils'

const Seperator = ({
  text,
  className
}: {
  text?: string
  className?: string
}) => {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-0 flex items-center px-4">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">{text}</span>
      </div>
    </div>
  )
}

export default Seperator
