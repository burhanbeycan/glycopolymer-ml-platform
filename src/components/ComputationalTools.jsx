import { Card, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Calculator } from 'lucide-react'

export default function ComputationalTools() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold flex items-center gap-3">
        <Calculator className="w-10 h-10 text-purple-600" />
        Computational Tools
      </h1>
      <Card><CardHeader><CardTitle>Online calculators and simulators</CardTitle></CardHeader></Card>
    </div>
  )
}
