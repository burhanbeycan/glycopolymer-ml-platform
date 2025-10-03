import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { FlaskConical, Activity, Waves } from 'lucide-react'

export default function BindingAssays() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <FlaskConical className="w-10 h-10 text-orange-600" />
          Binding Assays & Characterization
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Comprehensive methods for quantifying glycopolymer-lectin interactions and characterizing 
          polymer properties.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-600" />
            Surface Plasmon Resonance (SPR)
          </CardTitle>
          <CardDescription>Label-free real-time binding kinetics analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            SPR is the gold standard for measuring glycopolymer-lectin binding kinetics. The technique 
            monitors changes in refractive index at a sensor chip surface as glycopolymers bind to 
            immobilized lectins. SPR provides association rate constants (k<sub>on</sub>), dissociation 
            rate constants (k<sub>off</sub>), and equilibrium dissociation constants (K<sub>D</sub> = k<sub>off</sub>/k<sub>on</sub>).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Advantages</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Label-free detection</li>
                <li>• Real-time kinetics</li>
                <li>• Low sample consumption (μL)</li>
                <li>• Wide dynamic range (pM to mM)</li>
                <li>• Quantitative K<sub>D</sub> determination</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Typical Parameters</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">k<sub>on</sub>:</span>
                  <Badge variant="outline">10³-10⁶ M⁻¹s⁻¹</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">k<sub>off</sub>:</span>
                  <Badge variant="outline">10⁻⁴-10⁻¹ s⁻¹</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">K<sub>D</sub>:</span>
                  <Badge variant="outline">nM-μM</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200">
        <CardHeader>
          <CardTitle>Fluorescence-Based Assays</CardTitle>
          <CardDescription>High-throughput screening and competitive binding studies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Fluorescence Polarization</h3>
              <p className="text-sm text-muted-foreground">
                Measures rotational mobility of fluorescent ligands. Binding to large lectins 
                increases polarization.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">FRET Assays</h3>
              <p className="text-sm text-muted-foreground">
                Förster resonance energy transfer between donor-acceptor pairs reports on 
                binding-induced proximity changes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Competitive Inhibition</h3>
              <p className="text-sm text-muted-foreground">
                Glycopolymers compete with fluorescent glycans for lectin binding. IC<sub>50</sub> 
                values quantify inhibitory potency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Waves className="w-6 h-6 text-orange-600" />
            Polymer Characterization Techniques
          </CardTitle>
          <CardDescription>Structural and physical property analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Size Exclusion Chromatography (SEC/GPC)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Determines molecular weight distribution (M<sub>n</sub>, M<sub>w</sub>) and dispersity (Đ = M<sub>w</sub>/M<sub>n</sub>).
              </p>
              <Badge variant="outline">Đ typically 1.05-1.25</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">NMR Spectroscopy</h3>
              <p className="text-sm text-muted-foreground mb-2">
                ¹H and ¹³C NMR confirm structure and composition. DOSY NMR measures diffusion coefficients.
              </p>
              <Badge variant="outline">Quantitative composition</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Dynamic Light Scattering (DLS)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Measures hydrodynamic diameter (D<sub>h</sub>) and polydispersity index (PDI) of micelles and aggregates.
              </p>
              <Badge variant="outline">Size range: 1-1000 nm</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Turbidimetry</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Determines LCST by monitoring transmittance vs. temperature. Precision ±0.5°C achievable.
              </p>
              <Badge variant="outline">LCST: 20-90°C</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
