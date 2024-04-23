'use client'
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import TableColumnHeader from '../../components/table-column-header'
import { levels, statuses } from '../constants'
import { Badge } from '../../../components/ui/badge'
import { TSBProblem } from '../../../supabase/squash-types'
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
const columns: ColumnDef<TSBProblem>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <TableColumnHeader column={column} title="ID." />,
    cell: ({ row }) => <Badge variant={'outline'}>{row.getValue('id')}</Badge>,
    enableSorting: false,
    enableHiding: true
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <TableColumnHeader column={column} title="Sign" />,
    cell: ({ row }) => (
      <Badge variant={'outline'}>{row.getValue('name')}</Badge>
    ),
    enableSorting: false,
    enableHiding: true
  },
  {
    accessorKey: 'number',
    header: ({ column }) => <TableColumnHeader column={column} title="No." />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('number')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <TableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => {
      return (
        <CustomInteractive link={`problems/${row.getValue('name')}`}>
          {row.getValue('number') + '. ' + row.getValue('title')}
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
    accessorKey: 'level',
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Difficulty" />
    ),
    cell: ({ row }) => {
      const level = levels.find(p => p.value === row.getValue('level'))
      if (!level) return null
      return (
        <div className="flex w-[100px] items-center">
          <Badge variant={level.value || 'outline'}>{level.label}</Badge>
        </div>
      )
    }
  }
]

export { columns }
