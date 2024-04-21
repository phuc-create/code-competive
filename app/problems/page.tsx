import React from 'react'
import DataTable from '../components/data-table'
import { problems } from './stores/problems'
import { columns } from './components/problems-columns'

// type pageProps = {

// };

const ProblemsPage: React.FC = () => {
  return (
    <div className="flex-1 flex-col items-center justify-between px-12">
      <DataTable data={problems} columns={columns} />
    </div>
  )
}
export default ProblemsPage
