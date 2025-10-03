import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dna, Hexagon } from 'lucide-react'

export default function SugarLigands() {
  const sugars = [
    {
      name: 'D-Mannose',
      formula: 'C₆H₁₂O₆',
      lectins: ['Concanavalin A', 'DC-SIGN', 'MBL'],
      studies: 180,
      description: 'Mannose is recognized by C-type lectins through coordination with Ca²⁺ ions at the C-3 and C-4 hydroxyl positions. It is a key component of high-mannose N-glycans on viral and bacterial surfaces.',
      applications: ['Pathogen targeting', 'Vaccine delivery', 'Immune modulation'],
      novelty: 'Established'
    },
    {
      name: 'D-Glucose',
      formula: 'C₆H₁₂O₆',
      lectins: ['Concanavalin A'],
      studies: 95,
      description: 'Glucose differs from mannose only in the C-2 hydroxyl stereochemistry. Con A binds both sugars with similar affinity, making it useful for comparative binding studies.',
      applications: ['Model system', 'Biosensors'],
      novelty: 'Established'
    },
    {
      name: 'D-Galactose',
      formula: 'C₆H₁₂O₆',
      lectins: ['Galectins', 'Peanut agglutinin'],
      studies: 110,
      description: 'Galactose is the primary ligand for galectins, a family of β-galactoside-binding lectins involved in cancer, inflammation, and immune regulation.',
      applications: ['Cancer targeting', 'Inflammation imaging', 'Drug delivery'],
      novelty: 'Established'
    },
    {
      name: 'L-Fucose',
      formula: 'C₆H₁₂O₅',
      lectins: ['DC-SIGN', 'Selectins', 'AAL'],
      studies: 45,
      description: 'L-Fucose (6-deoxy-L-galactose) is a key component of Lewis blood group antigens and is recognized by DC-SIGN on dendritic cells, making it important for vaccine targeting and pathogen recognition.',
      applications: ['DC-SIGN targeting', 'Vaccine adjuvants', 'Pathogen mimicry'],
      novelty: 'Novel for P2Ox'
    },
    {
      name: 'D-Xylose',
      formula: 'C₅H₁₀O₅',
      lectins: ['Novel immune receptors'],
      studies: 15,
      description: 'D-Xylose is a pentose sugar found in plant polysaccharides and proteoglycan linkers. α1,3-Xylose is immunogenic in xenotransplantation contexts, triggering immune responses to non-human glycans.',
      applications: ['Xenotransplantation studies', 'Immune response profiling'],
      novelty: 'Novel for P2Ox'
    },
    {
      name: '3-O-Sulfogalactose',
      formula: 'C₆H₁₂O₉S',
      lectins: ['Galectins', 'MBL', 'Selectins'],
      studies: 20,
      description: 'Sulfation at the C-3 position of galactose alters lectin recognition specificity. Galectins show enhanced binding to 3-sulfated galactose, and this modification is found in corneal keratan sulfate and other glycosaminoglycans.',
      applications: ['Galectin targeting', 'Selectin inhibition', 'Inflammation'],
      novelty: 'Novel for P2Ox'
    },
    {
      name: 'N-Acetyllactosamine (LacNAc)',
      formula: 'C₁₄H₂₅NO₁₁',
      lectins: ['Galectin-3', 'Galectin-1'],
      studies: 65,
      description: 'LacNAc (Galβ1-4GlcNAc) is a disaccharide found in N-glycans and is the preferred ligand for galectins. Multivalent LacNAc presentation enhances galectin cross-linking and clustering.',
      applications: ['Galectin inhibition', 'Cancer therapy'],
      novelty: 'Established'
    },
    {
      name: 'α(2,8)-Disialic Acid',
      formula: 'C₂₂H₃₆N₂O₁₉',
      lectins: ['Siglec-7', 'Siglec-9'],
      studies: 8,
      description: 'α(2,8)-linked disialic acid (diSia) is recognized by Siglec-7 on NK cells and macrophages. Molecular docking shows very favorable interaction energy (-177.5 kcal/mol), suggesting potential for immune evasion or immunotherapy.',
      applications: ['Siglec-7 targeting', 'Cancer immunotherapy', 'Immune checkpoint modulation'],
      novelty: 'Novel for P2Ox - Not reported'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Dna className="w-10 h-10 text-purple-600" />
          Sugar Ligands Database
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Comprehensive catalog of carbohydrate ligands used in glycopolymer synthesis, their lectin 
          specificity profiles, and biological relevance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sugars.map((sugar, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Hexagon className="w-5 h-5 text-purple-600" />
                    {sugar.name}
                  </CardTitle>
                  <CardDescription className="font-mono text-sm">{sugar.formula}</CardDescription>
                </div>
                <Badge variant={sugar.novelty === 'Novel for P2Ox' || sugar.novelty === 'Novel for P2Ox - Not reported' ? 'default' : 'outline'}>
                  {sugar.novelty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {sugar.description}
              </p>

              <div>
                <div className="text-xs font-semibold text-muted-foreground mb-2">Target Lectins</div>
                <div className="flex flex-wrap gap-2">
                  {sugar.lectins.map((lectin, idx) => (
                    <Badge key={idx} variant="secondary">{lectin}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-muted-foreground mb-2">Applications</div>
                <div className="flex flex-wrap gap-2">
                  {sugar.applications.map((app, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{app}</Badge>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Literature studies</span>
                  <span className="font-bold text-purple-600">{sugar.studies}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200">
        <CardHeader>
          <CardTitle>Conjugation Chemistry</CardTitle>
          <CardDescription>Strategies for attaching sugars to P2Ox backbones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">CuAAC Click Chemistry</h3>
              <p className="text-sm text-muted-foreground">
                Copper(I)-catalyzed azide-alkyne cycloaddition between alkyne-functionalized P2Ox 
                (PynOx units) and azido-sugars. Yields stable triazole linkages with high efficiency.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">Thiol-Ene Chemistry</h3>
              <p className="text-sm text-muted-foreground">
                Radical-mediated addition of thiol-functionalized sugars to alkene-bearing P2Ox. 
                Copper-free alternative suitable for sensitive sugar motifs.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">Amide Coupling</h3>
              <p className="text-sm text-muted-foreground">
                Direct coupling of carboxylic acid-functionalized sugars to amine-bearing P2Ox 
                using EDC/NHS or other coupling reagents.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">Reductive Amination</h3>
              <p className="text-sm text-muted-foreground">
                Reaction of reducing sugars with amine-functionalized P2Ox in the presence of 
                NaCNBH₃ to form stable secondary amine linkages.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
