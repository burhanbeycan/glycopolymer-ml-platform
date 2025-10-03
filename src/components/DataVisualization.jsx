import { Card, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { BarChart3 } from 'lucide-react'

export default function DataVisualization() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold flex items-center gap-3">
        <BarChart3 className="w-10 h-10 text-blue-600" />
        Data Visualization Hub
      </h1>
      <Card><CardHeader><CardTitle>Interactive charts and visualizations</CardTitle></CardHeader></Card>
    </div>
  )
}
