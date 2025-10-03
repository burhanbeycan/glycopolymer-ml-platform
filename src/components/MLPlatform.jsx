import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Brain, TrendingUp, Target, Sparkles, Calculator } from 'lucide-react'

export default function MLPlatform() {
  const [blockLength1, setBlockLength1] = useState(60)
  const [blockLength2, setBlockLength2] = useState(40)
  const [sugarDensity, setSugarDensity] = useState(50)

  const predictLCST = () => {
    const base = 45
    const blockEffect = -(blockLength2 / 100) * 15
    const sugarEffect = (sugarDensity / 100) * 8
    return (base + blockEffect + sugarEffect).toFixed(1)
  }

  const predictMicelleSize = () => {
    const base = 60
    const lengthEffect = ((blockLength1 + blockLength2) / 100) * 30
    const densityEffect = (sugarDensity / 100) * 20
    return Math.round(base + lengthEffect + densityEffect)
  }

  const predictKd = () => {
    const base = 150
    const densityEffect = -(sugarDensity / 100) * 80
    return Math.round(base + densityEffect)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Brain className="w-10 h-10 text-purple-600" />
          Machine Learning Platform
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Predictive models for LCST, micelle size, and lectin binding affinity.
        </p>
      </div>

      <Card className="border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-purple-600" />
            Interactive Property Predictor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Block Length 1: {blockLength1} units
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={blockLength1}
                onChange={(e) => setBlockLength1(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Block Length 2: {blockLength2} units
              </label>
              <input
                type="range"
                min="10"
                max="50"
                value={blockLength2}
                onChange={(e) => setBlockLength2(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Sugar Density: {sugarDensity}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={sugarDensity}
                onChange={(e) => setSugarDensity(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <div className="text-sm opacity-90 mb-2">Predicted LCST</div>
              <div className="text-4xl font-bold">{predictLCST()}°C</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <div className="text-sm opacity-90 mb-2">Micelle Size</div>
              <div className="text-4xl font-bold">{predictMicelleSize()} nm</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <div className="text-sm opacity-90 mb-2">K<sub>D</sub></div>
              <div className="text-4xl font-bold">{predictKd()} nM</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
