import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Beaker, 
  Brain, 
  Database, 
  FlaskConical, 
  LineChart, 
  Target,
  Sparkles,
  ArrowRight,
  Dna,
  Network
} from 'lucide-react'

export default function Hero({ onNavigate }) {
  const objectives = [
    {
      icon: Database,
      title: 'P2Ox Glycopolymer Library',
      description: 'Systematic synthesis of well-defined block glycopolymers with precisely controlled architectural parameters (block lengths 20-100 units, sugar density 0-100%)',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FlaskConical,
      title: 'Stimuli-Responsive Characterization',
      description: 'Comprehensive evaluation of thermoresponsive and pH-sensitive behavior using turbidimetry, DLS, and DSC with LCST precision ±0.5°C',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Lectin Binding Evaluation',
      description: 'Quantitative binding studies using SPR and fluorescence assays with Concanavalin A, DC-SIGN, galectins, and mannose-binding lectin',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Predictive models for LCST, micelle size, and lectin affinity (R² > 0.85) using random forest, SVR, and neural networks with inverse design capabilities',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const architectures = [
    { name: 'Diblock', count: 120, icon: '━━' },
    { name: 'Triblock', count: 85, icon: '━━━' },
    { name: 'Star', count: 45, icon: '✦' },
    { name: 'Brush', count: 60, icon: '⋮⋮⋮' },
    { name: 'Gradient', count: 35, icon: '▬▬' },
    { name: 'Multiblock', count: 25, icon: '━━━━' }
  ]

  const sugars = [
    { name: 'Mannose', lectins: 'Con A, DC-SIGN, MBL', studies: 180 },
    { name: 'Glucose', lectins: 'Con A', studies: 95 },
    { name: 'Galactose', lectins: 'Galectins', studies: 110 },
    { name: 'Fucose', lectins: 'DC-SIGN', studies: 45 },
    { name: 'Xylose', lectins: 'Novel targets', studies: 15 },
    { name: '3-O-Sulfogalactose', lectins: 'Galectins, MBL', studies: 20 }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 text-white">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative z-10">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">TÜBİTAK 2219 Research Project</Badge>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Design and Synthesis of Stimuli-Responsive P2Ox Block Glycopolymers
          </h1>
          <p className="text-xl mb-6 text-white/90 max-w-3xl">
            Machine Learning-Guided Structure-Property Relationships for Enhanced Lectin Binding
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-white/90"
              onClick={() => onNavigate('library')}
            >
              Explore Polymer Library
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate('ml')}
            >
              ML Platform
              <Brain className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Animated molecules */}
        <div className="absolute top-10 right-10 animate-float">
          <Dna className="w-24 h-24 text-white/20" />
        </div>
        <div className="absolute bottom-10 right-32 animate-float-delayed">
          <Network className="w-20 h-20 text-white/20" />
        </div>
      </div>

      {/* Research Objectives */}
      <div>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-purple-600" />
          Research Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, index) => {
            const Icon = obj.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${obj.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Objective {index + 1}: {obj.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{obj.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Platform Statistics */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Polymers</CardDescription>
              <CardTitle className="text-3xl font-bold text-blue-600">450+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Systematic library with 15 architectures
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Lectins</CardDescription>
              <CardTitle className="text-3xl font-bold text-purple-600">15+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Con A, DC-SIGN, Galectins, MBL, Siglecs
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Data Points</CardDescription>
              <CardTitle className="text-3xl font-bold text-orange-600">7,400+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Comprehensive property measurements
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Publications</CardDescription>
              <CardTitle className="text-3xl font-bold text-green-600">449</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Literature-validated data sources
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Polymer Architectures */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-600" />
            Polymer Architectures in Database
          </CardTitle>
          <CardDescription>
            Diverse structural motifs enabling systematic structure-property studies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {architectures.map((arch, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">{arch.icon}</div>
                <div className="font-semibold text-sm mb-1">{arch.name}</div>
                <div className="text-2xl font-bold text-blue-600">{arch.count}</div>
                <div className="text-xs text-muted-foreground">polymers</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sugar Ligands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Dna className="w-6 h-6 text-purple-600" />
            Sugar Ligands & Lectin Specificity
          </CardTitle>
          <CardDescription>
            Carbohydrate motifs and their cognate lectin targets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sugars.map((sugar, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900 hover:shadow-sm transition-shadow"
              >
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">{sugar.name}</div>
                  <div className="text-sm text-muted-foreground">Target lectins: {sugar.lectins}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{sugar.studies}</div>
                  <div className="text-xs text-muted-foreground">studies</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Research Gaps */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Research Gaps & Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-orange-200">
              <h3 className="font-semibold mb-2 text-orange-600">Architecture vs. Binding</h3>
              <p className="text-sm text-muted-foreground">
                Systematically mapping P2Ox block length, composition, and glyco-density to lectin affinity in symmetric triblock architectures
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-orange-200">
              <h3 className="font-semibold mb-2 text-orange-600">Uncommon Sugar Motifs</h3>
              <p className="text-sm text-muted-foreground">
                Exploring L-fucose, D-xylose, and 3-O-sulfogalactose for novel lectin targeting strategies
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-orange-200">
              <h3 className="font-semibold mb-2 text-orange-600">Machine Learning Gap</h3>
              <p className="text-sm text-muted-foreground">
                Developing dedicated ML tools to predict multivalent glycopolymer-lectin interactions and bio-properties
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-orange-200">
              <h3 className="font-semibold mb-2 text-orange-600">Dual Functionality</h3>
              <p className="text-sm text-muted-foreground">
                Understanding how thermo-/pH-responsive phase transitions interact with lectin recognition for smart drug delivery
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Explore the Platform</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Navigate through our comprehensive database, interactive ML models, and detailed research protocols
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" onClick={() => onNavigate('library')} className="gap-2">
            <Database className="w-5 h-5" />
            Polymer Library
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate('ml')} className="gap-2">
            <Brain className="w-5 h-5" />
            ML Platform
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate('visualization')} className="gap-2">
            <LineChart className="w-5 h-5" />
            Data Visualization
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate('synthesis')} className="gap-2">
            <Beaker className="w-5 h-5" />
            Synthesis Protocols
          </Button>
        </div>
      </div>
    </div>
  )
}
