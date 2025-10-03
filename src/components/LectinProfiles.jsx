import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Target, Activity, Microscope } from 'lucide-react'

export default function LectinProfiles() {
  const lectins = [
    {
      name: 'Concanavalin A (Con A)',
      source: 'Jack bean (Canavalia ensiformis)',
      type: 'Plant lectin',
      specificity: 'α-D-Mannose, α-D-Glucose',
      structure: 'Tetramer at pH > 7 (4 × 26 kDa)',
      metalRequirements: 'Ca²⁺, Mn²⁺',
      kdRange: '10⁻³ - 10⁻⁶ M (monovalent)',
      biologicalRole: 'Model lectin for carbohydrate recognition studies. Widely used to study multivalent glycopolymer binding.',
      applications: ['Binding assay standard', 'Glycopolymer characterization', 'Cell agglutination'],
      pdbId: '3CNA',
      color: 'blue'
    },
    {
      name: 'DC-SIGN (CD209)',
      source: 'Human dendritic cells',
      type: 'C-type lectin',
      specificity: 'High-mannose N-glycans, Fucosylated glycans (Lewis antigens)',
      structure: 'Tetrameric C-type lectin receptor (4 × 44 kDa)',
      metalRequirements: 'Ca²⁺',
      kdRange: '10⁻⁴ - 10⁻⁷ M',
      biologicalRole: 'Pathogen recognition receptor on dendritic cells. Mediates HIV-1, Ebola, and SARS-CoV-2 entry. Key target for vaccine delivery.',
      applications: ['Vaccine targeting', 'Pathogen inhibition', 'Immune modulation', 'Drug delivery'],
      pdbId: '1SL4',
      color: 'purple'
    },
    {
      name: 'Galectin-1',
      source: 'Human (ubiquitous)',
      type: 'Galectin family',
      specificity: 'β-Galactosides, LacNAc (Galβ1-4GlcNAc)',
      structure: 'Homodimer (2 × 14.5 kDa)',
      metalRequirements: 'None',
      kdRange: '10⁻⁴ - 10⁻⁶ M',
      biologicalRole: 'Regulates T-cell apoptosis, immune homeostasis, and angiogenesis. Overexpressed in many cancers.',
      applications: ['Cancer therapy', 'Immune regulation', 'Anti-inflammatory'],
      pdbId: '1GZW',
      color: 'pink'
    },
    {
      name: 'Galectin-3',
      source: 'Human (macrophages, epithelial cells)',
      type: 'Galectin family',
      specificity: 'β-Galactosides, poly-LacNAc',
      structure: 'Monomer with oligomerization domain (29 kDa)',
      metalRequirements: 'None',
      kdRange: '10⁻⁵ - 10⁻⁷ M',
      biologicalRole: 'Promotes cancer metastasis, fibrosis, and inflammation. Forms pentamers that cross-link glycoproteins.',
      applications: ['Cancer targeting', 'Fibrosis inhibition', 'Biomarker'],
      pdbId: '1A3K',
      color: 'red'
    },
    {
      name: 'Mannose-Binding Lectin (MBL)',
      source: 'Human serum',
      type: 'C-type lectin',
      specificity: 'Mannose, N-Acetylglucosamine, Fucose',
      structure: 'Oligomeric (trimers to hexamers, 32 kDa subunits)',
      metalRequirements: 'Ca²⁺',
      kdRange: '10⁻⁴ - 10⁻⁶ M',
      biologicalRole: 'Pattern recognition molecule in innate immunity. Activates complement pathway. MBL deficiency causes immunodeficiency.',
      applications: ['Pathogen recognition', 'Complement activation', 'Immunodeficiency studies'],
      pdbId: '1HUP',
      color: 'orange'
    },
    {
      name: 'Siglec-7',
      source: 'Human NK cells, monocytes',
      type: 'Siglec (Sialic acid-binding Ig-like lectin)',
      specificity: 'α(2,8)-linked disialic acid, α(2,6)-sialylated glycans',
      structure: 'Monomeric transmembrane protein (75 kDa)',
      metalRequirements: 'None',
      kdRange: '10⁻⁴ - 10⁻⁶ M',
      biologicalRole: 'Inhibitory receptor on NK cells and macrophages. Engagement suppresses immune responses. Cancer cells exploit Siglec-7 for immune evasion.',
      applications: ['Cancer immunotherapy', 'Immune checkpoint modulation', 'NK cell regulation'],
      pdbId: '2G5R',
      color: 'green'
    },
    {
      name: 'Peanut Agglutinin (PNA)',
      source: 'Peanut (Arachis hypogaea)',
      type: 'Plant lectin',
      specificity: 'Galβ1-3GalNAc (T-antigen)',
      structure: 'Tetramer (4 × 27 kDa)',
      metalRequirements: 'None',
      kdRange: '10⁻⁴ - 10⁻⁵ M',
      biologicalRole: 'Binds T-antigen exposed on cancer cells. Used as histochemical marker for colon cancer.',
      applications: ['Cancer detection', 'Histochemistry', 'Glycan profiling'],
      pdbId: '2PEL',
      color: 'amber'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200',
      purple: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200',
      pink: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 border-pink-200',
      red: 'from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200',
      orange: 'from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200',
      green: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200',
      amber: 'from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-200'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Target className="w-10 h-10 text-purple-600" />
          Lectin Profiles
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Detailed information on target lectins, their carbohydrate specificity, biological roles, 
          and therapeutic relevance for glycopolymer design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {lectins.map((lectin, index) => (
          <Card key={index} className={`bg-gradient-to-br ${getColorClasses(lectin.color)} hover:shadow-lg transition-shadow`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    <Activity className="w-6 h-6" />
                    {lectin.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    <strong>Source:</strong> {lectin.source} | <strong>Type:</strong> {lectin.type}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-xs">
                  PDB: {lectin.pdbId}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Microscope className="w-4 h-4" />
                    Structural Properties
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Structure:</span>
                      <span className="ml-2 font-medium">{lectin.structure}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Metal requirements:</span>
                      <span className="ml-2 font-medium">{lectin.metalRequirements}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">K<sub>D</sub> range:</span>
                      <span className="ml-2 font-medium">{lectin.kdRange}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
                  <h3 className="font-semibold text-sm mb-2">Carbohydrate Specificity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lectin.specificity}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
                <h3 className="font-semibold text-sm mb-2">Biological Role</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lectin.biologicalRole}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {lectin.applications.map((app, idx) => (
                    <Badge key={idx} variant="secondary">{app}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30">
        <CardHeader>
          <CardTitle>Lectin Classification</CardTitle>
          <CardDescription>Major families of carbohydrate-binding proteins</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">C-Type Lectins</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Calcium-dependent carbohydrate recognition domains. Include selectins, collectins, and DC-SIGN.
              </p>
              <Badge variant="outline">Ca²⁺ dependent</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Galectins</h3>
              <p className="text-sm text-muted-foreground mb-2">
                β-Galactoside-binding proteins with conserved carbohydrate recognition domains. 15 mammalian galectins identified.
              </p>
              <Badge variant="outline">Metal-independent</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border">
              <h3 className="font-semibold mb-2">Siglecs</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Sialic acid-binding immunoglobulin-type lectins. Primarily expressed on immune cells as inhibitory receptors.
              </p>
              <Badge variant="outline">Ig-like domains</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
