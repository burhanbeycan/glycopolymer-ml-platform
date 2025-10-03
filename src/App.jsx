import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Beaker, 
  Brain, 
  Database, 
  FlaskConical, 
  LineChart, 
  Microscope, 
  Network, 
  Dna,
  BookOpen,
  Calculator,
  Target,
  Sparkles,
  ChevronRight,
  Github,
  FileText,
  BarChart3,
  Atom
} from 'lucide-react'
import './App.css'

// Import components
import Hero from './components/Hero'
import ResearchBackground from './components/ResearchBackground'
import PolymerLibrary from './components/PolymerLibrary'
import SugarLigands from './components/SugarLigands'
import LectinProfiles from './components/LectinProfiles'
import BindingAssays from './components/BindingAssays'
import MLPlatform from './components/MLPlatform'
import DataVisualization from './components/DataVisualization'
import SynthesisProtocols from './components/SynthesisProtocols'
import LiteratureDatabase from './components/LiteratureDatabase'
import ComputationalTools from './components/ComputationalTools'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'background', label: 'Research Background', icon: BookOpen },
    { id: 'library', label: 'Polymer Library', icon: Database },
    { id: 'sugars', label: 'Sugar Ligands', icon: Dna },
    { id: 'lectins', label: 'Lectin Profiles', icon: Target },
    { id: 'assays', label: 'Binding Assays', icon: FlaskConical },
    { id: 'ml', label: 'ML Platform', icon: Brain },
    { id: 'visualization', label: 'Data Visualization', icon: BarChart3 },
    { id: 'synthesis', label: 'Synthesis Protocols', icon: Beaker },
    { id: 'literature', label: 'Literature', icon: FileText },
    { id: 'tools', label: 'Computational Tools', icon: Calculator },
  ]

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Hero onNavigate={setActiveSection} />
      case 'background':
        return <ResearchBackground />
      case 'library':
        return <PolymerLibrary />
      case 'sugars':
        return <SugarLigands />
      case 'lectins':
        return <LectinProfiles />
      case 'assays':
        return <BindingAssays />
      case 'ml':
        return <MLPlatform />
      case 'visualization':
        return <DataVisualization />
      case 'synthesis':
        return <SynthesisProtocols />
      case 'literature':
        return <LiteratureDatabase />
      case 'tools':
        return <ComputationalTools />
      default:
        return <Hero onNavigate={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Atom className="w-8 h-8 text-blue-600 animate-spin-slow" />
              <span>Glycopolymer-Lectin ML Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <FileText className="w-4 h-4" />
              Documentation
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Sidebar */}
      <div className="flex">
        <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r border-border/40 bg-background/50 backdrop-blur p-4 overflow-y-auto">
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Quick Stats */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h3 className="text-sm font-semibold mb-3">Platform Statistics</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Polymers</span>
                <span className="font-bold">450+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lectins</span>
                <span className="font-bold">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data Points</span>
                <span className="font-bold">2,500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Publications</span>
                <span className="font-bold">449</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container py-8 px-6">
            {renderSection()}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur py-8">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive platform for glycopolymer-lectin interactions and machine learning-guided polymer design.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Research</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>TÜBİTAK 2219 Project</li>
                <li>P2Ox Block Glycopolymers</li>
                <li>Stimuli-Responsive Systems</li>
                <li>ML-Guided Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>API Reference</li>
                <li>Publications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-sm text-muted-foreground">
                For collaborations and inquiries, please contact the research team.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 Glycopolymer-Lectin ML Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
