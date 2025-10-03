import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dna, Hexagon, TrendingUp } from 'lucide-react'

export default function SugarLigands() {
  const sugars = [
    {
      name: 'D-Mannose',
      formula: 'C₆H₁₂O₆',
      lectins: ['Concanavalin A', 'DC-SIGN', 'MBL'],
      kdMonovalent: '1-10 mM',
      kdMultivalent: '0.1-10 µM',
      studies: 180,
      polymers: 30,
      description: 'Mannose is recognized by C-type lectins through coordination with Ca²⁺ ions at the C-3 and C-4 hydroxyl positions. It is a key component of high-mannose N-glycans on viral and bacterial surfaces.',
      applications: ['Pathogen targeting', 'Vaccine delivery', 'Immune modulation', 'HIV inhibition'],
      novelty: 'Established'
    },
    {
      name: 'D-Glucose',
      formula: 'C₆H₁₂O₆',
      lectins: ['Concanavalin A'],
      kdMonovalent: '5-50 mM',
      kdMultivalent: '1-50 µM',
      studies: 95,
      polymers: 30,
      description: 'Glucose differs from mannose only in the C-2 hydroxyl stereochemistry. Con A binds both sugars with similar affinity, making it useful for comparative binding studies and selectivity profiling.',
      applications: ['Model system', 'Biosensors', 'Selectivity studies'],
      novelty: 'Established'
    },
    {
      name: 'D-Galactose',
      formula: 'C₆H₁₂O₆',
      lectins: ['Galectin-1', 'Galectin-3', 'PNA'],
      kdMonovalent: '10-100 µM',
      kdMultivalent: '1-100 nM',
      studies: 110,
      polymers: 30,
      description: 'Galactose is the primary ligand for galectins, a family of β-galactoside-binding lectins involved in cancer, inflammation, and immune regulation. Galectin-3 shows 10-100× stronger binding than Galectin-1.',
      applications: ['Cancer targeting', 'Inflammation imaging', 'Drug delivery', 'Hepatocyte targeting'],
      novelty: 'Established'
    },
    {
      name: 'L-Fucose',
      formula: 'C₆H₁₂O₅',
      lectins: ['DC-SIGN', 'AAL', 'UEA-I'],
      kdMonovalent: '0.1-1 mM',
      kdMultivalent: '1-50 µM',
      studies: 45,
      polymers: 30,
      description: 'L-Fucose (6-deoxy-L-galactose) is a key component of Lewis blood group antigens (Le^a, Le^b, Le^x, Le^y) and is recognized by DC-SIGN on dendritic cells, making it important for vaccine targeting and pathogen recognition.',
      applications: ['DC-SIGN targeting', 'Vaccine adjuvants', 'Pathogen mimicry', 'Dendritic cell activation'],
      novelty: 'Novel for P2Ox'
    },
    {
      name: 'D-Xylose',
      formula: 'C₅H₁₀O₅',
      lectins: ['Novel immune receptors'],
      kdMonovalent: 'To be determined',
      kdMultivalent: 'To be determined',
      studies: 15,
      polymers: 30,
      description: 'D-Xylose is a pentose sugar found in plant polysaccharides and proteoglycan linkers. α1,3-Xylose is immunogenic in xenotransplantation contexts, triggering immune responses to non-human glycans. Represents frontier research in P2Ox systems.',
      applications: ['Xenotransplantation studies', 'Immune response profiling', 'Plant glycan mimicry'],
      novelty: 'Novel for P2Ox'
    },
    {
      name: '3-O-Sulfogalactose',
      formula: 'C₆H₁₂O₉S',
      lectins: ['Galectin-3', 'Galectin-1', 'MBL'],
      kdMonovalent: '1-10 µM',
      kdMultivalent: '0.1-5 µM',
      studies: 20,
      polymers: 30,
      description: 'Sulfation at the C-3 position of galactose alters lectin recognition specificity and enhances binding affinity by 5-10× vs non-sulfated galactose. Galectins show enhanced binding to 3-sulfated galactose, found in corneal keratan sulfate and glycosaminoglycans.',
      applications: ['Galectin targeting', 'Selectin inhibition', 'Inflammation', 'High-affinity binding'],
      novelty: 'Novel for P2Ox'
    },
    {
      name: 'N-Acetyllactosamine (LacNAc)',
      formula: 'C₁₄H₂₅NO₁₁',
      lectins: ['Galectin-3', 'Galectin-1'],
      kdMonovalent: '1-10 µM',
      kdMultivalent: '10-500 nM',
      studies: 65,
      polymers: 30,
      description: 'LacNAc (Galβ1-4GlcNAc) is a disaccharide found in N-glycans and is the preferred ligand for galectins. Multivalent LacNAc presentation enhances galectin cross-linking and clustering, with 10-100× avidity enhancement.',
      applications: ['Galectin inhibition', 'Cancer therapy', 'Immune modulation'],
      novelty: 'Established'
    },
    {
      name: 'Thiodigalactoside',
      formula: 'C₁₂H₂₂O₁₀S',
      lectins: ['Galectin-3'],
      kdMonovalent: '5-50 µM',
      kdMultivalent: '0.5-20 µM',
      studies: 25,
      polymers: 30,
      description: 'Thiodigalactoside is a synthetic galactose dimer with a sulfur-containing linker, showing enhanced metabolic stability and Galectin-3 binding compared to natural digalactosides. Used in cancer therapy and inflammation studies.',
      applications: ['Galectin-3 inhibition', 'Cancer therapy', 'Metabolically stable'],
      novelty: 'Established'
    },
    {
      name: 'α(2,8)-Disialic Acid',
      formula: 'C₂₂H₃₆N₂O₁₉',
      lectins: ['Siglec-7', 'Siglec-9'],
      kdMonovalent: '0.1-1 µM',
      kdMultivalent: '1-10 nM',
      studies: 8,
      polymers: 30,
      description: 'α(2,8)-linked disialic acid (diSia) is recognized by Siglec-7 on NK cells and macrophages. Molecular docking shows very favorable interaction energy (-177.5 kcal/mol), suggesting potential for immune evasion or immunotherapy. Sub-micromolar affinity.',
      applications: ['Siglec-7 targeting', 'Cancer immunotherapy', 'Immune checkpoint modulation', 'NK cell inhibition'],
      novelty: 'Novel for P2Ox - Not reported'
    },
    {
      name: 'N-Acetylglucosamine (GlcNAc)',
      formula: 'C₈H₁₅NO₆',
      lectins: ['WGA', 'Galectin-3'],
      kdMonovalent: '10-200 µM',
      kdMultivalent: '1-50 µM',
      studies: 55,
      polymers: 30,
      description: 'GlcNAc is a component of chitin, N-glycans, and O-GlcNAc modifications. Recognized by wheat germ agglutinin (WGA) and galectins. Important for bacterial cell wall targeting and glycosylation studies.',
      applications: ['WGA targeting', 'Chitin mimicry', 'Bacterial targeting', 'Glycosylation probes'],
      novelty: 'Established'
    },
    {
      name: 'N-Acetylgalactosamine (GalNAc)',
      formula: 'C₈H₁₅NO₆',
      lectins: ['VVA', 'Galectin-3', 'ASGPR'],
      kdMonovalent: '10-150 µM',
      kdMultivalent: '0.5-30 µM',
      studies: 40,
      polymers: 30,
      description: 'GalNAc is a key component of mucin-type O-glycans and blood group A antigen. Asialoglycoprotein receptor (ASGPR) on hepatocytes shows high affinity for GalNAc, enabling liver-specific drug delivery.',
      applications: ['Hepatocyte targeting', 'ASGPR-mediated delivery', 'Mucin mimicry', 'Liver drug delivery'],
      novelty: 'Established'
    },
    {
      name: 'Lactose',
      formula: 'C₁₂H₂₂O₁₁',
      lectins: ['Galectin-1', 'Galectin-3'],
      kdMonovalent: '5-50 µM',
      kdMultivalent: '0.5-20 µM',
      studies: 50,
      polymers: 30,
      description: 'Lactose (Galβ1-4Glc) is a disaccharide found in milk and is a natural ligand for galectins. Multivalent lactose presentation shows 10-100× avidity enhancement, useful for galectin inhibition studies.',
      applications: ['Galectin inhibition', 'Cancer therapy', 'Inflammation', 'Natural ligand'],
      novelty: 'Established'
    },
    {
      name: 'Sialic Acid (Neu5Ac)',
      formula: 'C₁₁H₁₉NO₉',
      lectins: ['Siglec-7', 'Siglec-9', 'MAL-I'],
      kdMonovalent: '0.5-5 µM',
      kdMultivalent: '10-500 nM',
      studies: 35,
      polymers: 30,
      description: 'N-Acetylneuraminic acid (Neu5Ac) is the most common sialic acid, found at the terminal positions of glycans. Recognized by Siglecs (sialic acid-binding immunoglobulin-like lectins) on immune cells. Key for immune evasion and self-recognition.',
      applications: ['Siglec targeting', 'Immune evasion', 'Self-recognition', 'Cancer immunotherapy'],
      novelty: 'Established'
    },
    {
      name: 'N-Acetylmannosamine (ManNAc)',
      formula: 'C₈H₁₅NO₆',
      lectins: ['Novel targets'],
      kdMonovalent: '50-300 µM',
      kdMultivalent: '5-100 µM',
      studies: 12,
      polymers: 30,
      description: 'ManNAc is a biosynthetic precursor of sialic acid and a component of bacterial capsular polysaccharides. Represents an underexplored sugar for P2Ox glycopolymers with potential for novel lectin targeting.',
      applications: ['Sialic acid biosynthesis', 'Bacterial targeting', 'Novel lectin discovery'],
      novelty: 'Novel for P2Ox'
    },
    {
      name: 'L-Rhamnose',
      formula: 'C₆H₁₂O₅',
      lectins: ['Novel targets'],
      kdMonovalent: '100-400 µM',
      kdMultivalent: '10-150 µM',
      studies: 10,
      polymers: 30,
      description: 'L-Rhamnose (6-deoxy-L-mannose) is a deoxy sugar found in bacterial cell walls and plant glycosides. Represents frontier research for P2Ox systems with potential for pathogen targeting and novel lectin discovery.',
      applications: ['Bacterial targeting', 'Plant glycan mimicry', 'Novel lectin discovery'],
      novelty: 'Novel for P2Ox'
    }
  ]

  // Calculate statistics
  const totalStudies = sugars.reduce((sum, s) => sum + s.studies, 0)
  const totalPolymers = sugars.reduce((sum, s) => sum + s.polymers, 0)
  const novelSugars = sugars.filter(s => s.novelty.includes('Novel')).length
  const establishedSugars = sugars.filter(s => s.novelty === 'Established').length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Dna className="w-10 h-10 text-purple-600" />
          Sugar Ligands Database
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Comprehensive catalog of 15 carbohydrate ligands used in glycopolymer synthesis, their lectin 
          specificity profiles, binding affinities, and biological relevance. Includes 6 novel sugars not 
          previously reported in P2Ox systems.
        </p>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs">Total Sugars</CardDescription>
            <CardTitle className="text-3xl font-bold text-blue-600">15</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Complete library</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs">Novel for P2Ox</CardDescription>
            <CardTitle className="text-3xl font-bold text-purple-600">{novelSugars}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Frontier research</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs">Literature Studies</CardDescription>
            <CardTitle className="text-3xl font-bold text-orange-600">{totalStudies}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Published reports</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs">Polymer Entries</CardDescription>
            <CardTitle className="text-3xl font-bold text-green-600">{totalPolymers}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">In database</p>
          </CardContent>
        </Card>
      </div>

      {/* Sugar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sugars.map((sugar, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Hexagon className="w-5 h-5 text-purple-600" />
                    {sugar.name}
                  </CardTitle>
                  <CardDescription className="font-mono text-sm">{sugar.formula}</CardDescription>
                </div>
                <Badge variant={sugar.novelty.includes('Novel') ? 'default' : 'outline'}>
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

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2 rounded bg-muted/50">
                  <div className="text-xs text-muted-foreground mb-1">Monovalent KD</div>
                  <div className="text-sm font-semibold">{sugar.kdMonovalent}</div>
                </div>
                <div className="p-2 rounded bg-muted/50">
                  <div className="text-xs text-muted-foreground mb-1">Multivalent KD</div>
                  <div className="text-sm font-semibold text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {sugar.kdMultivalent}
                  </div>
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
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Studies</span>
                    <span className="font-bold text-purple-600">{sugar.studies}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Polymers</span>
                    <span className="font-bold text-blue-600">{sugar.polymers}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Conjugation Chemistry */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200">
        <CardHeader>
          <CardTitle>Conjugation Chemistry</CardTitle>
          <CardDescription>Strategies for attaching sugars to P2Ox backbones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">CuAAC Click Chemistry</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Copper(I)-catalyzed azide-alkyne cycloaddition between alkyne-functionalized P2Ox 
                (PynOx units) and azido-sugars. Yields stable triazole linkages with high efficiency (>95%).
              </p>
              <Badge variant="outline" className="text-xs">Most common method</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">Thiol-Ene Chemistry</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Radical-mediated addition of thiol-functionalized sugars to alkene-bearing P2Ox (ButenylOx). 
                Copper-free alternative suitable for sensitive sugar motifs.
              </p>
              <Badge variant="outline" className="text-xs">Copper-free</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">Amide Coupling</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Direct coupling of carboxylic acid-functionalized sugars to amine-bearing P2Ox 
                using EDC/NHS or other coupling reagents. Yields stable amide bonds.
              </p>
              <Badge variant="outline" className="text-xs">Direct coupling</Badge>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200">
              <h3 className="font-semibold mb-2">Reductive Amination</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Reaction of reducing sugars with amine-functionalized P2Ox in the presence of 
                NaCNBH₃ to form stable secondary amine linkages. Preserves anomeric configuration.
              </p>
              <Badge variant="outline" className="text-xs">Anomeric-specific</Badge>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Avidity Enhancement
            </h3>
            <p className="text-sm text-muted-foreground">
              Multivalent sugar presentation on P2Ox backbones achieves <strong>10²-10⁶× avidity enhancement</strong> 
              compared to monovalent sugars. Bottlebrush and star architectures show the highest avidity (10⁴-10⁶×), 
              while linear random copolymers show moderate enhancement (10²-10³×). This multivalency effect is critical 
              for achieving sub-micromolar binding affinities with lectins.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
