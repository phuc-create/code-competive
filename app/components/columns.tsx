'use client'
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { MockSeedType } from '../data/seed'
import TableColumnHeader from './table-column-header'
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
    header: ({ column }) => <TableColumnHeader column={column} title="Title" />
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <TableColumnHeader column={column} title="Status" />
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Priority" />
    )
  }
]

export { columns }
