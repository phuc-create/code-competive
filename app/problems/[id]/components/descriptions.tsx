import React from 'react'
import { Badge } from '../../../../components/ui/badge'
// import { zig_zag_conversion } from './desc-inventory/zig-zag-conversion'
import { CircleCheckBig } from 'lucide-react'

type DescriptionsPageProps = {
  children?: React.ReactNode
  title: string
}

const DescriptionsPage: React.FC<DescriptionsPageProps> = ({
  title,
  children
}) => {
  return (
    <div className="rounded-md relative w-full h-full flex flex-col border overflow-hidden p-2 overflow-y-scroll">
      <span className="font-medium text-2xl mb-4">{title}</span>
      <div className="w-full flex items-center justify-start mb-3">
        <Badge variant={'medium'} className="mr-4">
          medium
        </Badge>
        <CircleCheckBig className="w-5 h-5 font-bold" color="green" />
      </div>
      <section className="h-auto">
        {React.createElement('div', {
          dangerouslySetInnerHTML: { __html: 'zig_zag_conversion' }
        })}
      </section>
    </div>
  )
}
export default DescriptionsPage
