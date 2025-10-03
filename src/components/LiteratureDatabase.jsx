import { Card, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { FileText } from 'lucide-react'

export default function LiteratureDatabase() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold flex items-center gap-3">
        <FileText className="w-10 h-10 text-green-600" />
        Literature Database
      </h1>
      <Card><CardHeader><CardTitle>449 curated publications</CardTitle></CardHeader></Card>
    </div>
  )
}
