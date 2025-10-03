import { Card, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Beaker } from 'lucide-react'

export default function SynthesisProtocols() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold flex items-center gap-3">
        <Beaker className="w-10 h-10 text-orange-600" />
        Synthesis Protocols
      </h1>
      <Card><CardHeader><CardTitle>Detailed experimental procedures</CardTitle></CardHeader></Card>
    </div>
  )
}
