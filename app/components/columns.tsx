'use client'
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { MockSeedType } from '../data/seed'
import TableColumnHeader from './table-column-header'
import { priorities, statuses } from '../data/data'
import { useRouter } from 'next/navigation'
interface CustomInteractiveProps {
  link?: string
  children?: React.ReactNode
}
const CustomInteractive: React.FC<CustomInteractiveProps> = ({
  link = '',
  children
}) => {
  const router = useRouter()
  const handleGoTo = () => {
    router.push('/' + link)
  }
  return (
    <div className="cursor-pointer" onClick={handleGoTo}>
      {children}
    </div>
  )
}
const columns: ColumnDef<MockSeedType>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <TableColumnHeader column={column} title="" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <TableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => {
      return (
        <CustomInteractive link={`problems/${row.getValue('id')}`}>
          {row.getValue('title')}
        </CustomInteractive>
      )
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(s => s.value === row.getValue('status'))
      if (!status) return null
      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    }
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        p => p.value === row.getValue('priority')
      )
      if (!priority) return null
      return (
        <div className="flex w-[100px] items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      )
    }
  }
]

export { columns }
