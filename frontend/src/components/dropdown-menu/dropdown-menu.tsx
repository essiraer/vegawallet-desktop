import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'

interface DropdownMenuProps {
  trigger: React.ReactNode
  content: React.ReactNode
  style?: React.CSSProperties
}

export function DropdownMenu({ trigger, content }: DropdownMenuProps) {
  return (
    <DropdownPrimitive.Root>
      <DropdownPrimitive.Trigger>{trigger}</DropdownPrimitive.Trigger>
      <DropdownPrimitive.Content align='end'>
        {content}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Root>
  )
}

export function DropdownItem({
  children,
  ...props
}: DropdownPrimitive.MenuItemProps) {
  return <DropdownPrimitive.Item {...props}>{children}</DropdownPrimitive.Item>
}
