import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Database, Filter, Download, Search, ExternalLink } from 'lucide-react'
import { polymerData, architectureTypes, sugarTypes, lectinTypes } from '../data/polymerData'

export default function PolymerLibrary() {
  const [selectedArchitecture, setSelectedArchitecture] = useState('All')
  const [selectedSugar, setSelectedSugar] = useState('All')
  const [selectedLectin, setSelectedLectin] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = polymerData.filter(polymer => {
    const matchesArchitecture = selectedArchitecture === 'All' || polymer.architecture === selectedArchitecture
    const matchesSugar = selectedSugar === 'All' || polymer.sugar.includes(selectedSugar)
    const matchesLectin = selectedLectin === 'All' || polymer.lectins.some(l => l.includes(selectedLectin))
    const matchesSearch = searchTerm === '' || 
      polymer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      polymer.reference.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesArchitecture && matchesSugar && matchesLectin && matchesSearch
  })

  const getArchitectureColor = (arch) => {
    const colors = {
      'Block copolymer': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      'Bottlebrush': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      'Hyperbranched': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
      'Linear random': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      'Multiblock sequence-defined': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'Multi-arm star': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      'Discrete linear/cyclic': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
      '4-arm star & linear block': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      'Linear gradient': 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300',
      'Dendronized linear': 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
      'Single-chain triblock (host-guest)': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
      'Multi-block': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Symmetric triblock': 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
      'Star (4-arm)': 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
      'Brush': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'
    }
    return colors[arch] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Database className="w-10 h-10 text-blue-600" />
          Systematic Polymer Library
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Comprehensive database of {polymerData.length} glycopolymer structures from experimental synthesis 
          and literature data, featuring diverse architectures, sugar ligands, and characterization data.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl font-bold text-blue-600">{polymerData.length}</CardTitle>
            <CardDescription>Total Polymers</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl font-bold text-purple-600">{architectureTypes.length - 1}</CardTitle>
            <CardDescription>Architectures</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl font-bold text-orange-600">{sugarTypes.length - 1}</CardTitle>
            <CardDescription>Sugar Types</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl font-bold text-green-600">{lectinTypes.length - 1}</CardTitle>
            <CardDescription>Lectin Targets</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter & Search
          </CardTitle>
          <CardDescription>
            Showing {filteredData.length} of {polymerData.length} polymers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or reference..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Architecture Filter */}
          <div>
            <label className="text-sm font-medium mb-2 block">Architecture Type</label>
            <div className="flex flex-wrap gap-2">
              {architectureTypes.map(arch => (
                <Button
                  key={arch}
                  size="sm"
                  variant={selectedArchitecture === arch ? 'default' : 'outline'}
                  onClick={() => setSelectedArchitecture(arch)}
                >
                  {arch}
                </Button>
              ))}
            </div>
          </div>

          {/* Sugar Filter */}
          <div>
            <label className="text-sm font-medium mb-2 block">Sugar Ligand</label>
            <div className="flex flex-wrap gap-2">
              {sugarTypes.map(sugar => (
                <Button
                  key={sugar}
                  size="sm"
                  variant={selectedSugar === sugar ? 'default' : 'outline'}
                  onClick={() => setSelectedSugar(sugar)}
                >
                  {sugar}
                </Button>
              ))}
            </div>
          </div>

          {/* Lectin Filter */}
          <div>
            <label className="text-sm font-medium mb-2 block">Lectin Target</label>
            <div className="flex flex-wrap gap-2">
              {lectinTypes.map(lectin => (
                <Button
                  key={lectin}
                  size="sm"
                  variant={selectedLectin === lectin ? 'default' : 'outline'}
                  onClick={() => setSelectedLectin(lectin)}
                >
                  {lectin}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setSelectedArchitecture('All')
                setSelectedSugar('All')
                setSelectedLectin('All')
                setSearchTerm('')
              }}
            >
              Reset Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export Data (CSV)
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Polymer Cards */}
      <div className="grid grid-cols-1 gap-4">
        {filteredData.map(polymer => (
          <Card key={polymer.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{polymer.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge className={getArchitectureColor(polymer.architecture)}>
                      {polymer.architecture}
                    </Badge>
                    <Badge variant="outline">{polymer.sugar}</Badge>
                    {polymer.lectins.map((lectin, idx) => (
                      <Badge key={idx} variant="secondary">{lectin}</Badge>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="font-medium">{polymer.reference}</div>
                  {polymer.doi !== 'Unpublished' && (
                    <a 
                      href={`https://doi.org/${polymer.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1 justify-end mt-1"
                    >
                      DOI <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Sugar Density</div>
                  <div className="font-semibold">{polymer.sugarDensity}%</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">M<sub>n</sub></div>
                  <div className="font-semibold">{polymer.mn.toLocaleString()} Da</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Đ</div>
                  <div className="font-semibold">{polymer.dispersity}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">LCST</div>
                  <div className="font-semibold">
                    {polymer.lcst ? `${polymer.lcst}°C` : 'N/A'}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Micelle D<sub>h</sub></div>
                  <div className="font-semibold">
                    {polymer.micelleSize ? `${polymer.micelleSize} nm` : 'N/A'}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">K<sub>D</sub></div>
                  <div className="font-semibold">
                    {polymer.kd ? `${polymer.kd} nM` : 'N/A'}
                  </div>
                </div>
              </div>
              
              {polymer.blockLengths.length > 0 && (
                <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                  <div className="text-xs text-muted-foreground mb-1">Block Lengths (repeat units)</div>
                  <div className="font-mono text-sm">
                    {polymer.blockLengths.join(' - ')}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No polymers match the selected filters.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSelectedArchitecture('All')
                setSelectedSugar('All')
                setSelectedLectin('All')
                setSearchTerm('')
              }}
            >
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
