import fs from 'fs'
import path from 'path'
import { z } from 'zod'
import { seedSchema } from './data/seed'
import DataTable from './components/data-table'
import { columns } from './components/columns'

const getMockListProblem = async () => {
  const mockUp = fs.readFileSync(
    path.join(process.cwd(), 'app/data/mock-data.json')
  )
  const problems = JSON.parse(mockUp.toString())

  return z.array(seedSchema).parse(problems)
}

export default async function Home() {
  const problems = await getMockListProblem()
  return (
    <main className="flex-1 min-h-screen flex-col items-center justify-between px-12">
      <DataTable data={problems} columns={columns} />
    </main>
  )
}
