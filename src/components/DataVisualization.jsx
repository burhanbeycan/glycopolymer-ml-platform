import { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BarChart3, ScatterChart, Activity, Box, TrendingUp, Grid3x3 } from 'lucide-react'
import { polymerData } from '../data/polymerData.js'

export default function DataVisualization() {
  const [activeTab, setActiveTab] = useState('binding')
  
  // Binding Diagram State
  const [selectedPolymer, setSelectedPolymer] = useState(polymerData[0])
  const [selectedSugar, setSelectedSugar] = useState('Mannose')
  
  // Scatter Plot State
  const [scatterX, setScatterX] = useState('mn')
  const [scatterY, setScatterY] = useState('kd')
  const [scatterColor, setScatterColor] = useState('architecture')

  // Get unique values for filters
  const architectures = useMemo(() => [...new Set(polymerData.map(p => p.architecture))], [])
  const sugars = useMemo(() => [...new Set(polymerData.map(p => p.sugar))], [])
  const lectins = useMemo(() => [...new Set(polymerData.flatMap(p => p.lectins || []))], [])

  // Filter polymers by selected sugar for binding diagram
  const polymersWithSugar = useMemo(() => 
    polymerData.filter(p => p.sugar === selectedSugar).slice(0, 20),
    [selectedSugar]
  )

  // Calculate binding strength categories
  const getBindingStrength = (kd) => {
    if (kd < 1) return { label: 'Exceptional', color: 'bg-green-600', score: 5 }
    if (kd < 10) return { label: 'High', color: 'bg-blue-600', score: 4 }
    if (kd < 50) return { label: 'Moderate', color: 'bg-yellow-600', score: 3 }
    if (kd < 100) return { label: 'Low', color: 'bg-orange-600', score: 2 }
    return { label: 'Very Low', color: 'bg-red-600', score: 1 }
  }

  // Calculate statistics for selected polymer
  const polymerStats = useMemo(() => {
    if (!selectedPolymer) return null
    const binding = getBindingStrength(selectedPolymer.kd)
    return {
      ...selectedPolymer,
      bindingStrength: binding,
      avidity: selectedPolymer.kdMonovalent ? 
        Math.round(selectedPolymer.kdMonovalent / selectedPolymer.kd) : 
        Math.round(1000 / selectedPolymer.kd * 10)
    }
  }, [selectedPolymer])

  // Prepare scatter plot data
  const scatterData = useMemo(() => {
    const getPropertyValue = (polymer, prop) => {
      switch(prop) {
        case 'mn': return polymer.mn
        case 'mw': return polymer.mw
        case 'dispersity': return polymer.dispersity
        case 'lcst': return polymer.lcst
        case 'micelleSize': return polymer.micelleSize
        case 'zetaPotential': return polymer.zetaPotential
        case 'cmc': return polymer.cmc
        case 'kd': return polymer.kd
        case 'hillCoefficient': return polymer.hillCoefficient
        case 'avidity': return polymer.avidity
        case 'sugarDensity': return polymer.sugarDensity
        case 'totalDP': return (polymer.blockLengths || []).reduce((a, b) => a + b, 0)
        default: return 0
      }
    }

    return polymerData.map(p => ({
      x: getPropertyValue(p, scatterX),
      y: getPropertyValue(p, scatterY),
      color: scatterColor === 'architecture' ? p.architecture :
             scatterColor === 'sugar' ? p.sugar :
             scatterColor === 'lectin' ? (p.lectins || [])[0] : p.architecture,
      polymer: p
    })).filter(d => d.x != null && d.y != null)
  }, [scatterX, scatterY, scatterColor])

  // Calculate property distributions
  const propertyDistributions = useMemo(() => {
    const distributions = {
      lcst: {},
      micelleSize: {},
      kd: {},
      avidity: {}
    }

    polymerData.forEach(p => {
      // LCST distribution (bins of 5°C)
      if (p.lcst) {
        const bin = Math.floor(p.lcst / 5) * 5
        distributions.lcst[bin] = (distributions.lcst[bin] || 0) + 1
      }

      // Micelle size distribution (bins of 20 nm)
      if (p.micelleSize) {
        const bin = Math.floor(p.micelleSize / 20) * 20
        distributions.micelleSize[bin] = (distributions.micelleSize[bin] || 0) + 1
      }

      // KD distribution (log bins)
      if (p.kd) {
        const logKd = Math.log10(p.kd)
        const bin = Math.floor(logKd * 2) / 2 // 0.5 log unit bins
        distributions.kd[bin] = (distributions.kd[bin] || 0) + 1
      }

      // Avidity distribution (log bins)
      if (p.avidity) {
        const logAvidity = Math.log10(p.avidity)
        const bin = Math.floor(logAvidity)
        distributions.avidity[bin] = (distributions.avidity[bin] || 0) + 1
      }
    })

    return distributions
  }, [])

  // Architecture-Sugar Heatmap Data
  const heatmapData = useMemo(() => {
    const matrix = {}
    architectures.forEach(arch => {
      matrix[arch] = {}
      sugars.forEach(sugar => {
        const polymers = polymerData.filter(p => p.architecture === arch && p.sugar === sugar)
        if (polymers.length > 0) {
          const avgKd = polymers.reduce((sum, p) => sum + p.kd, 0) / polymers.length
          matrix[arch][sugar] = avgKd
        }
      })
    })
    return matrix
  }, [architectures, sugars])

  const tools = [
    { id: 'binding', name: 'Binding Diagram', icon: Box, color: 'blue' },
    { id: 'scatter', name: 'Scatter Plot', icon: ScatterChart, color: 'purple' },
    { id: 'distribution', name: 'Property Distributions', icon: BarChart3, color: 'green' },
    { id: 'heatmap', name: 'Architecture-Sugar Heatmap', icon: Grid3x3, color: 'orange' },
    { id: 'trends', name: 'Structure-Property Trends', icon: TrendingUp, color: 'pink' }
  ]

  const propertyLabels = {
    mn: 'M_n (Da)',
    mw: 'M_w (Da)',
    dispersity: 'Dispersity (Đ)',
    lcst: 'LCST (°C)',
    micelleSize: 'Micelle Size (nm)',
    zetaPotential: 'Zeta Potential (mV)',
    cmc: 'CMC (mg/mL)',
    kd: 'K_D (µM)',
    hillCoefficient: 'Hill Coefficient',
    avidity: 'Avidity (×)',
    sugarDensity: 'Sugar Density (%)',
    totalDP: 'Total DP'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <BarChart3 className="w-10 h-10 text-blue-600" />
          Data Visualization Hub
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Interactive charts and visualizations for exploring the 450-polymer database. Analyze structure-property 
          relationships, binding affinities, and design patterns across 15 architectures, 15 sugars, and 15 lectins.
        </p>
      </div>

      {/* Visualization Selection Tabs */}
      <div className="flex flex-wrap gap-2">
        {tools.map(tool => (
          <button
            key={tool.id}
            onClick={() => setActiveTab(tool.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tool.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            <tool.icon className="w-4 h-4" />
            {tool.name}
          </button>
        ))}
      </div>

      {/* Binding Diagram */}
      {activeTab === 'binding' && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Box className="w-6 h-6 text-blue-600" />
                Glycopolymer-Lectin Binding Diagram
              </CardTitle>
              <CardDescription>
                Select a polymer and sugar to visualize binding strength with target lectins. 
                Box size represents avidity, color indicates affinity category.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selection Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Polymer</label>
                  <select
                    value={selectedPolymer?.id || ''}
                    onChange={(e) => setSelectedPolymer(polymerData.find(p => p.id === e.target.value))}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-slate-900"
                  >
                    {polymerData.slice(0, 50).map(p => (
                      <option key={p.id} value={p.id}>
                        {p.id} - {p.architecture} ({p.sugar})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Filter by Sugar</label>
                  <select
                    value={selectedSugar}
                    onChange={(e) => {
                      setSelectedSugar(e.target.value)
                      const firstPolymer = polymerData.find(p => p.sugar === e.target.value)
                      if (firstPolymer) setSelectedPolymer(firstPolymer)
                    }}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-slate-900"
                  >
                    {sugars.map(sugar => (
                      <option key={sugar} value={sugar}>{sugar}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Polymer Info Card */}
              {polymerStats && (
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-muted-foreground">Architecture</div>
                      <div className="font-semibold">{polymerStats.architecture}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Sugar</div>
                      <div className="font-semibold">{polymerStats.sugar}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">K_D</div>
                      <div className="font-semibold">{polymerStats.kd.toFixed(2)} µM</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Avidity</div>
                      <div className="font-semibold">{polymerStats.avidity}×</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Binding Strength:</span>
                    <Badge className={`${polymerStats.bindingStrength.color} text-white`}>
                      {polymerStats.bindingStrength.label}
                    </Badge>
                  </div>
                </div>
              )}

              {/* Binding Visualization */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                <h3 className="font-semibold mb-4 text-center">
                  Binding Affinity Map: {selectedPolymer?.sugar} Polymers to Lectins
                </h3>
                
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {polymersWithSugar.map(polymer => {
                    const binding = getBindingStrength(polymer.kd)
                    const size = Math.min(120, 40 + binding.score * 15)
                    
                    return (
                      <div
                        key={polymer.id}
                        className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedPolymer(polymer)}
                      >
                        <div
                          className={`${binding.color} rounded-lg flex items-center justify-center text-white font-bold shadow-lg`}
                          style={{ width: `${size}px`, height: `${size}px` }}
                        >
                          <div className="text-center">
                            <div className="text-xs">{polymer.id}</div>
                            <div className="text-lg">{polymer.kd.toFixed(1)}</div>
                            <div className="text-xs">µM</div>
                          </div>
                        </div>
                        <div className="text-xs text-center mt-2 text-muted-foreground">
                          {polymer.architecture.split(' ')[0]}
                        </div>
                        <div className="text-xs text-center">
                          {(polymer.lectins || [])[0]}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                    <span>Exceptional (&lt;1 µM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span>High (1-10 µM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                    <span>Moderate (10-50 µM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-600 rounded"></div>
                    <span>Low (50-100 µM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-600 rounded"></div>
                    <span>Very Low (&gt;100 µM)</span>
                  </div>
                </div>
              </div>

              {/* Lectin Targets for Selected Polymer */}
              {selectedPolymer && (
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Target Lectins for {selectedPolymer.sugar}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(selectedPolymer.lectins || []).map(lectin => (
                      <Badge key={lectin} variant="secondary">{lectin}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Scatter Plot */}
      {activeTab === 'scatter' && (
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScatterChart className="w-6 h-6 text-purple-600" />
              Interactive Scatter Plot
            </CardTitle>
            <CardDescription>
              Explore correlations between any two properties across the 450-polymer database. 
              Color-code by architecture, sugar, or lectin.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Axis Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">X-Axis</label>
                <select
                  value={scatterX}
                  onChange={(e) => setScatterX(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-slate-900"
                >
                  {Object.entries(propertyLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Y-Axis</label>
                <select
                  value={scatterY}
                  onChange={(e) => setScatterY(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-slate-900"
                >
                  {Object.entries(propertyLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Color By</label>
                <select
                  value={scatterColor}
                  onChange={(e) => setScatterColor(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-slate-900"
                >
                  <option value="architecture">Architecture</option>
                  <option value="sugar">Sugar</option>
                  <option value="lectin">Lectin</option>
                </select>
              </div>
            </div>

            {/* Scatter Plot Visualization */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border" style={{ height: '500px', position: 'relative' }}>
              <div className="text-sm font-medium text-center mb-4">
                {propertyLabels[scatterY]} vs {propertyLabels[scatterX]}
              </div>
              
              {/* Simple scatter plot representation */}
              <div className="relative w-full h-full">
                {/* Axes */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
                <div className="absolute bottom-0 left-0 top-0 w-px bg-border"></div>
                
                {/* Axis labels */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 text-xs text-muted-foreground">
                  {propertyLabels[scatterX]}
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 -rotate-90 text-xs text-muted-foreground">
                  {propertyLabels[scatterY]}
                </div>

                {/* Data points */}
                {scatterData.slice(0, 100).map((point, idx) => {
                  const xMin = Math.min(...scatterData.map(d => d.x))
                  const xMax = Math.max(...scatterData.map(d => d.x))
                  const yMin = Math.min(...scatterData.map(d => d.y))
                  const yMax = Math.max(...scatterData.map(d => d.y))
                  
                  const xPos = ((point.x - xMin) / (xMax - xMin)) * 90 + 5
                  const yPos = 95 - ((point.y - yMin) / (yMax - yMin)) * 90
                  
                  const colorMap = {
                    'Block copolymer': 'bg-blue-500',
                    'Linear random copolymer': 'bg-purple-500',
                    'Star (4-arm)': 'bg-green-500',
                    'Star (6-arm)': 'bg-yellow-500',
                    'Symmetric triblock': 'bg-red-500',
                    'Bottlebrush': 'bg-pink-500',
                    'Brush': 'bg-orange-500',
                    'Mannose': 'bg-blue-500',
                    'Glucose': 'bg-green-500',
                    'Galactose': 'bg-red-500',
                    'L-Fucose': 'bg-purple-500',
                    'Con A': 'bg-blue-500',
                    'DC-SIGN': 'bg-purple-500',
                    'Galectin-3': 'bg-red-500'
                  }
                  
                  const color = colorMap[point.color] || 'bg-gray-500'
                  
                  return (
                    <div
                      key={idx}
                      className={`absolute w-2 h-2 ${color} rounded-full opacity-70 hover:opacity-100 hover:scale-150 transition-all cursor-pointer`}
                      style={{ left: `${xPos}%`, top: `${yPos}%` }}
                      title={`${point.polymer.id}: ${point.x.toFixed(2)}, ${point.y.toFixed(2)}`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <div className="text-xs text-muted-foreground">Data Points</div>
                <div className="text-2xl font-bold text-purple-600">{scatterData.length}</div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <div className="text-xs text-muted-foreground">X Range</div>
                <div className="text-sm font-bold">
                  {Math.min(...scatterData.map(d => d.x)).toFixed(1)} - {Math.max(...scatterData.map(d => d.x)).toFixed(1)}
                </div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <div className="text-xs text-muted-foreground">Y Range</div>
                <div className="text-sm font-bold">
                  {Math.min(...scatterData.map(d => d.y)).toFixed(1)} - {Math.max(...scatterData.map(d => d.y)).toFixed(1)}
                </div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <div className="text-xs text-muted-foreground">Categories</div>
                <div className="text-2xl font-bold text-purple-600">
                  {[...new Set(scatterData.map(d => d.color))].length}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Property Distributions */}
      {activeTab === 'distribution' && (
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-green-600" />
              Property Distributions
            </CardTitle>
            <CardDescription>
              Histograms showing the distribution of key properties across the 450-polymer database.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* LCST Distribution */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h3 className="font-semibold mb-4">LCST Distribution (°C)</h3>
              <div className="flex items-end gap-1 h-40">
                {Object.entries(propertyDistributions.lcst).sort((a, b) => Number(a[0]) - Number(b[0])).map(([bin, count]) => {
                  const maxCount = Math.max(...Object.values(propertyDistributions.lcst))
                  const height = (count / maxCount) * 100
                  return (
                    <div key={bin} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-green-500 rounded-t hover:bg-green-600 transition-colors"
                        style={{ height: `${height}%` }}
                        title={`${bin}-${Number(bin)+5}°C: ${count} polymers`}
                      ></div>
                      <div className="text-xs mt-1 text-muted-foreground">{bin}</div>
                    </div>
                  )
                })}
              </div>
              <div className="text-xs text-center mt-2 text-muted-foreground">
                Temperature Range: 20-75°C | Bin Size: 5°C
              </div>
            </div>

            {/* Micelle Size Distribution */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h3 className="font-semibold mb-4">Micelle Size Distribution (nm)</h3>
              <div className="flex items-end gap-1 h-40">
                {Object.entries(propertyDistributions.micelleSize).sort((a, b) => Number(a[0]) - Number(b[0])).map(([bin, count]) => {
                  const maxCount = Math.max(...Object.values(propertyDistributions.micelleSize))
                  const height = (count / maxCount) * 100
                  return (
                    <div key={bin} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                        style={{ height: `${height}%` }}
                        title={`${bin}-${Number(bin)+20}nm: ${count} polymers`}
                      ></div>
                      <div className="text-xs mt-1 text-muted-foreground">{bin}</div>
                    </div>
                  )
                })}
              </div>
              <div className="text-xs text-center mt-2 text-muted-foreground">
                Size Range: 25-200 nm | Bin Size: 20 nm | EPR Optimal: 30-100 nm
              </div>
            </div>

            {/* KD Distribution (Log Scale) */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h3 className="font-semibold mb-4">K_D Distribution (log₁₀ µM)</h3>
              <div className="flex items-end gap-1 h-40">
                {Object.entries(propertyDistributions.kd).sort((a, b) => Number(a[0]) - Number(b[0])).map(([bin, count]) => {
                  const maxCount = Math.max(...Object.values(propertyDistributions.kd))
                  const height = (count / maxCount) * 100
                  return (
                    <div key={bin} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-pink-500 rounded-t hover:bg-pink-600 transition-colors"
                        style={{ height: `${height}%` }}
                        title={`10^${bin} - 10^${Number(bin)+0.5} µM: ${count} polymers`}
                      ></div>
                      <div className="text-xs mt-1 text-muted-foreground">{Number(bin).toFixed(1)}</div>
                    </div>
                  )
                })}
              </div>
              <div className="text-xs text-center mt-2 text-muted-foreground">
                K_D Range: 0.5-500 µM (log scale) | Therapeutic Target: &lt;50 µM
              </div>
            </div>

            {/* Avidity Distribution (Log Scale) */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h3 className="font-semibold mb-4">Avidity Distribution (log₁₀ ×)</h3>
              <div className="flex items-end gap-1 h-40">
                {Object.entries(propertyDistributions.avidity).sort((a, b) => Number(a[0]) - Number(b[0])).map(([bin, count]) => {
                  const maxCount = Math.max(...Object.values(propertyDistributions.avidity))
                  const height = (count / maxCount) * 100
                  return (
                    <div key={bin} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-orange-500 rounded-t hover:bg-orange-600 transition-colors"
                        style={{ height: `${height}%` }}
                        title={`10^${bin} - 10^${Number(bin)+1} ×: ${count} polymers`}
                      ></div>
                      <div className="text-xs mt-1 text-muted-foreground">10^{bin}</div>
                    </div>
                  )
                })}
              </div>
              <div className="text-xs text-center mt-2 text-muted-foreground">
                Avidity Range: 10²-10⁶× | High Avidity: &gt;10⁴×
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Architecture-Sugar Heatmap */}
      {activeTab === 'heatmap' && (
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Grid3x3 className="w-6 h-6 text-orange-600" />
              Architecture-Sugar Affinity Heatmap
            </CardTitle>
            <CardDescription>
              Average K_D values for each architecture-sugar combination. Darker colors indicate stronger binding (lower K_D).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-2 text-xs font-semibold text-left border">Architecture</th>
                    {sugars.slice(0, 10).map(sugar => (
                      <th key={sugar} className="p-2 text-xs font-semibold text-center border">
                        {sugar.length > 10 ? sugar.substring(0, 10) + '...' : sugar}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {architectures.slice(0, 10).map(arch => (
                    <tr key={arch}>
                      <td className="p-2 text-xs font-medium border">{arch}</td>
                      {sugars.slice(0, 10).map(sugar => {
                        const kd = heatmapData[arch]?.[sugar]
                        if (!kd) return <td key={sugar} className="p-2 border bg-gray-100 dark:bg-gray-800"></td>
                        
                        // Color scale: green (low KD) to red (high KD)
                        const logKd = Math.log10(kd)
                        const intensity = Math.max(0, Math.min(1, (logKd + 1) / 3)) // -1 to 2 log range
                        const r = Math.round(255 * intensity)
                        const g = Math.round(255 * (1 - intensity))
                        const bgColor = `rgb(${r}, ${g}, 0)`
                        
                        return (
                          <td 
                            key={sugar} 
                            className="p-2 text-xs text-center border text-white font-semibold"
                            style={{ backgroundColor: bgColor }}
                            title={`${arch} + ${sugar}: ${kd.toFixed(1)} µM`}
                          >
                            {kd.toFixed(1)}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <span className="font-medium">K_D Scale (µM):</span>
              <div className="flex items-center gap-1">
                <div className="w-8 h-4" style={{ background: 'linear-gradient(to right, rgb(0,255,0), rgb(255,255,0), rgb(255,0,0))' }}></div>
                <span className="ml-2">0.1 → 100</span>
              </div>
              <span className="text-muted-foreground">(Green = Strong, Red = Weak)</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Structure-Property Trends */}
      {activeTab === 'trends' && (
        <Card className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-pink-600" />
              Structure-Property Trends
            </CardTitle>
            <CardDescription>
              Key insights and correlations from the 450-polymer database.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Architecture Comparison */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h3 className="font-semibold mb-4">Average K_D by Architecture</h3>
              <div className="space-y-2">
                {architectures.slice(0, 10).map(arch => {
                  const archPolymers = polymerData.filter(p => p.architecture === arch)
                  const avgKd = archPolymers.reduce((sum, p) => sum + p.kd, 0) / archPolymers.length
                  const maxKd = 100 // for scaling
                  const width = Math.min(100, (avgKd / maxKd) * 100)
                  
                  return (
                    <div key={arch} className="flex items-center gap-2">
                      <div className="w-40 text-xs truncate">{arch}</div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-6 relative">
                        <div 
                          className="bg-pink-500 h-6 rounded-full flex items-center justify-end pr-2 text-xs text-white font-semibold"
                          style={{ width: `${width}%` }}
                        >
                          {avgKd.toFixed(1)} µM
                        </div>
                      </div>
                      <div className="w-16 text-xs text-muted-foreground">n={archPolymers.length}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Sugar Comparison */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h3 className="font-semibold mb-4">Average K_D by Sugar Type</h3>
              <div className="space-y-2">
                {sugars.slice(0, 10).map(sugar => {
                  const sugarPolymers = polymerData.filter(p => p.sugar === sugar)
                  const avgKd = sugarPolymers.reduce((sum, p) => sum + p.kd, 0) / sugarPolymers.length
                  const maxKd = 100
                  const width = Math.min(100, (avgKd / maxKd) * 100)
                  
                  return (
                    <div key={sugar} className="flex items-center gap-2">
                      <div className="w-40 text-xs truncate">{sugar}</div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-6 relative">
                        <div 
                          className="bg-blue-500 h-6 rounded-full flex items-center justify-end pr-2 text-xs text-white font-semibold"
                          style={{ width: `${width}%` }}
                        >
                          {avgKd.toFixed(1)} µM
                        </div>
                      </div>
                      <div className="w-16 text-xs text-muted-foreground">n={sugarPolymers.length}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-pink-50 dark:bg-pink-950/30 rounded-lg">
                <h3 className="font-semibold mb-2">🏆 Best Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  Bottlebrush and Brush polymers show the lowest average K_D (highest affinity) due to 
                  exceptional avidity enhancement (10⁵-10⁶×) from dense sugar presentation.
                </p>
              </div>

              <div className="p-4 bg-pink-50 dark:bg-pink-950/30 rounded-lg">
                <h3 className="font-semibold mb-2">🎯 Best Sugar</h3>
                <p className="text-sm text-muted-foreground">
                  α(2,8)-Disialic acid and 3-O-Sulfogalactose show the lowest K_D due to high monovalent 
                  affinity combined with multivalent enhancement.
                </p>
              </div>

              <div className="p-4 bg-pink-50 dark:bg-pink-950/30 rounded-lg">
                <h3 className="font-semibold mb-2">📊 LCST Trend</h3>
                <p className="text-sm text-muted-foreground">
                  Higher sugar density increases LCST (+0.8°C per 10%). Hydrophobic blocks (iPrOx, nPrOx) 
                  lower LCST, enabling body temperature-triggered release.
                </p>
              </div>

              <div className="p-4 bg-pink-50 dark:bg-pink-950/30 rounded-lg">
                <h3 className="font-semibold mb-2">🔬 Avidity Correlation</h3>
                <p className="text-sm text-muted-foreground">
                  Avidity scales with architecture compactness and sugar density. Star and bottlebrush 
                  architectures achieve 10⁴-10⁶× enhancement vs linear (10²-10³×).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Dataset Statistics */}
      <Card className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30">
        <CardHeader>
          <CardTitle>Dataset Statistics</CardTitle>
          <CardDescription>Comprehensive metrics for the 450-polymer database</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
              <div className="text-xs text-muted-foreground">Total Polymers</div>
              <div className="text-2xl font-bold text-blue-600">{polymerData.length}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
              <div className="text-xs text-muted-foreground">Architectures</div>
              <div className="text-2xl font-bold text-purple-600">{architectures.length}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
              <div className="text-xs text-muted-foreground">Sugar Types</div>
              <div className="text-2xl font-bold text-green-600">{sugars.length}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
              <div className="text-xs text-muted-foreground">Lectin Targets</div>
              <div className="text-2xl font-bold text-orange-600">{lectins.length}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

