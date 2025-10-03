import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Atom, Target, Thermometer, Network } from 'lucide-react'

export default function ResearchBackground() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-blue-600" />
          Research Background
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Comprehensive academic introduction to glycopolymer-lectin interactions, poly(2-oxazoline) chemistry, 
          multivalency principles, and stimuli-responsive polymer systems.
        </p>
      </div>

      <Tabs defaultValue="glycopolymer" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="glycopolymer">Glycopolymer Chemistry</TabsTrigger>
          <TabsTrigger value="lectin">Lectin Biology</TabsTrigger>
          <TabsTrigger value="multivalency">Multivalency</TabsTrigger>
          <TabsTrigger value="stimuli">Stimuli-Responsive</TabsTrigger>
        </TabsList>

        <TabsContent value="glycopolymer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Atom className="w-6 h-6 text-blue-600" />
                Poly(2-oxazoline) Chemistry
              </CardTitle>
              <CardDescription>
                Versatile synthetic platform for precision glycopolymer synthesis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Living Cationic Ring-Opening Polymerization (LCROP)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Poly(2-oxazolines) (P2Ox) are synthesized via living cationic ring-opening polymerization, 
                  a controlled polymerization technique that enables precise control over molecular weight, 
                  dispersity (Đ &lt; 1.2), and chain-end functionality. The polymerization proceeds through 
                  nucleophilic attack of the oxazoline nitrogen on an electrophilic initiator (typically 
                  methyl tosylate or benzyl halides), followed by sequential monomer addition. The living 
                  nature of LCROP allows for the synthesis of well-defined block copolymers through sequential 
                  monomer addition without intermediate purification.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200">
                  <h4 className="font-semibold mb-2">Key Monomers</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Badge variant="outline">EtOx</Badge> 2-ethyl-2-oxazoline: Hydrophilic spacer</li>
                    <li><Badge variant="outline">MeOx</Badge> 2-methyl-2-oxazoline: Hydrophilic spacer</li>
                    <li><Badge variant="outline">PynOx</Badge> 2-(pent-4-ynyl)-2-oxazoline: Click-functional</li>
                    <li><Badge variant="outline">nBuOx</Badge> 2-n-butyl-2-oxazoline: Thermoresponsive</li>
                    <li><Badge variant="outline">iPrOx</Badge> 2-isopropyl-2-oxazoline: Thermoresponsive</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200">
                  <h4 className="font-semibold mb-2">Advantages</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Precise molecular weight control (Mn: 2-200 kDa)</li>
                    <li>✓ Low dispersity (Đ: 1.05-1.15)</li>
                    <li>✓ Tunable hydrophilicity/hydrophobicity</li>
                    <li>✓ Biocompatibility and stealth properties</li>
                    <li>✓ Facile post-polymerization modification</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Click Chemistry and Post-Polymerization Modification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Copper(I)-catalyzed azide-alkyne cycloaddition (CuAAC) is the primary strategy for 
                  glycosylation of P2Ox polymers. Alkyne-functionalized monomers (e.g., PynOx) are 
                  copolymerized with hydrophilic spacers, and the resulting polymers are subsequently 
                  reacted with azido-sugars under mild conditions. This modular approach allows for 
                  systematic variation of sugar density (0-100 mol%) and sugar type without re-optimizing 
                  polymerization conditions. The triazole linkage formed is stable, biocompatible, and 
                  mimics the electronic properties of amide bonds.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200">
                <h4 className="font-semibold mb-2">Molecular Weight Control</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The degree of polymerization (DP) is controlled by the [Monomer]₀/[Initiator]₀ ratio:
                </p>
                <div className="bg-white dark:bg-slate-900 p-3 rounded font-mono text-sm">
                  DP<sub>n</sub> = [M]₀/[I]₀ × conversion
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Typical conditions: 80-140°C in acetonitrile or chlorobenzene, reaction times 1-24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lectin" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-600" />
                Lectin Biology and Carbohydrate Recognition
              </CardTitle>
              <CardDescription>
                Protein-carbohydrate interactions in biological systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Lectin Classification and Function</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lectins are carbohydrate-binding proteins that recognize specific glycan structures through 
                  non-covalent interactions. They play critical roles in cell-cell communication, immune 
                  recognition, pathogen binding, and signal transduction. Lectins are classified based on 
                  their structural domains: C-type lectins (calcium-dependent), galectins (β-galactoside-binding), 
                  siglecs (sialic acid-binding immunoglobulin-type lectins), and others. The specificity of 
                  lectin-carbohydrate interactions is determined by the three-dimensional structure of the 
                  carbohydrate recognition domain (CRD) and the presentation of hydroxyl groups on the sugar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200">
                  <h4 className="font-semibold mb-2">C-Type Lectins</h4>
                  <p className="text-sm text-muted-foreground mb-2">Calcium-dependent recognition</p>
                  <ul className="space-y-1 text-sm">
                    <li>• DC-SIGN (mannose, fucose)</li>
                    <li>• MBL (mannose, GlcNAc)</li>
                    <li>• Selectins (sialyl-Lewis X)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200">
                  <h4 className="font-semibold mb-2">Galectins</h4>
                  <p className="text-sm text-muted-foreground mb-2">β-Galactoside-binding</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Gal-1 (apoptosis)</li>
                    <li>• Gal-3 (cancer, fibrosis)</li>
                    <li>• Gal-8 (immune regulation)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200">
                  <h4 className="font-semibold mb-2">Siglecs</h4>
                  <p className="text-sm text-muted-foreground mb-2">Sialic acid-binding Ig-like</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Siglec-7 (NK cells)</li>
                    <li>• Siglec-9 (macrophages)</li>
                    <li>• CD22/Siglec-2 (B cells)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Carbohydrate Recognition Domains (CRDs)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The CRD is the functional unit responsible for carbohydrate binding. It typically consists 
                  of 110-130 amino acids forming a β-sandwich fold with a shallow binding pocket. Specificity 
                  is achieved through hydrogen bonding networks between protein residues and sugar hydroxyl 
                  groups, as well as hydrophobic interactions with the sugar ring. Calcium ions (in C-type 
                  lectins) coordinate with equatorial hydroxyl groups at C-3 and C-4 positions, providing 
                  selectivity for mannose over galactose. Understanding CRD structure is essential for 
                  rational glycopolymer design.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border border-orange-200">
                <h4 className="font-semibold mb-2">Biological Roles and Therapeutic Relevance</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Immune Recognition</p>
                    <p className="text-xs text-muted-foreground">
                      Pathogen detection, complement activation, antigen presentation
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Cancer Biology</p>
                    <p className="text-xs text-muted-foreground">
                      Tumor progression, metastasis, immune evasion
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Inflammation</p>
                    <p className="text-xs text-muted-foreground">
                      Leukocyte trafficking, endothelial adhesion
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Drug Delivery</p>
                    <p className="text-xs text-muted-foreground">
                      Cell-specific targeting, vaccine adjuvants
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="multivalency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="w-6 h-6 text-green-600" />
                Multivalency and Cluster Glycoside Effect
              </CardTitle>
              <CardDescription>
                Thermodynamic principles of enhanced binding through multiple interactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Avidity vs. Affinity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Individual carbohydrate-lectin interactions are typically weak (K<sub>D</sub> ~ 10<sup>-3</sup> to 10<sup>-6</sup> M), 
                  but multivalent presentation of sugars on a polymer scaffold can enhance binding by several 
                  orders of magnitude through the cluster glycoside effect. <strong>Affinity</strong> refers to the strength 
                  of a single binding event, while <strong>avidity</strong> describes the cumulative binding strength of 
                  multiple simultaneous interactions. Multivalent glycopolymers can achieve effective K<sub>D</sub> 
                  values in the nanomolar to picomolar range, making them potent lectin inhibitors and targeting agents.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200">
                  <h4 className="font-semibold mb-2">Enhancement Mechanisms</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Statistical rebinding:</strong> Increased local concentration reduces dissociation</li>
                    <li><strong>Chelate effect:</strong> Simultaneous binding to multiple sites</li>
                    <li><strong>Subsite binding:</strong> Engagement of secondary binding pockets</li>
                    <li><strong>Receptor clustering:</strong> Cross-linking of lectin oligomers</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200">
                  <h4 className="font-semibold mb-2">Enhancement Factors</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monovalent binding:</span>
                      <Badge>K<sub>D</sub> ~ mM</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Divalent binding:</span>
                      <Badge>10-100× enhancement</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Multivalent polymer:</span>
                      <Badge>10<sup>3</sup>-10<sup>6</sup>× enhancement</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Spatial Arrangement and Valency Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The enhancement achieved through multivalency depends critically on the spatial arrangement 
                  of sugar ligands. The optimal spacing between sugars is determined by the distance between 
                  binding sites on the lectin (typically 4-8 nm for oligomeric lectins). Polymer architecture 
                  (linear, brush, star, dendritic) influences ligand presentation and accessibility. High sugar 
                  density can lead to steric crowding and reduced binding, while low density may not achieve 
                  sufficient multivalent engagement. Computational modeling and experimental optimization are 
                  required to identify the ideal valency and spacing for each lectin target.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200">
                <h4 className="font-semibold mb-2">Mathematical Models of Cooperative Binding</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The apparent dissociation constant for multivalent binding can be approximated by:
                </p>
                <div className="bg-white dark:bg-slate-900 p-3 rounded font-mono text-sm mb-3">
                  K<sub>D,app</sub> ≈ K<sub>D,mono</sub> / (n × α)
                </div>
                <p className="text-xs text-muted-foreground">
                  where n is the number of binding sites, α is the cooperativity factor (0 &lt; α ≤ 1), 
                  and K<sub>D,mono</sub> is the monovalent dissociation constant.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stimuli" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="w-6 h-6 text-orange-600" />
                Stimuli-Responsive Polymer Systems
              </CardTitle>
              <CardDescription>
                Thermoresponsive and pH-sensitive behavior for smart materials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Thermoresponsive Behavior (LCST/UCST)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Poly(2-oxazolines) with hydrophobic side chains (e.g., n-propyl, isopropyl, n-butyl) 
                  exhibit lower critical solution temperature (LCST) behavior in aqueous solution. Below 
                  the LCST, the polymer is soluble due to favorable hydrogen bonding with water. Above the 
                  LCST, hydrophobic interactions dominate, leading to polymer collapse and aggregation. 
                  The LCST can be tuned from 20°C to 90°C by varying the alkyl side chain length and 
                  copolymer composition. Poly(2-isopropyl-2-oxazoline) (PiPrOx) exhibits an LCST of 26-34°C, 
                  similar to poly(N-isopropylacrylamide) (PNIPAM), making it suitable for biomedical applications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200">
                  <h4 className="font-semibold mb-2">LCST-Tuning Strategies</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Alkyl chain length (Me &lt; Et &lt; nPr &lt; nBu)</li>
                    <li>• Copolymer composition (hydrophilic/hydrophobic ratio)</li>
                    <li>• Molecular weight (higher M<sub>w</sub> → lower LCST)</li>
                    <li>• End-group effects (hydrophobic ends lower LCST)</li>
                    <li>• Salt effects (Hofmeister series)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200">
                  <h4 className="font-semibold mb-2">Typical LCST Values</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>P(MeOx):</span>
                      <Badge variant="outline">&gt; 100°C</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>P(EtOx):</span>
                      <Badge variant="outline">61-64°C</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>P(iPrOx):</span>
                      <Badge variant="outline">26-34°C</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>P(nBuOx):</span>
                      <Badge variant="outline">23-28°C</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">pH-Responsive Mechanisms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  pH-responsive P2Ox polymers can be designed by incorporating ionizable groups such as 
                  carboxylic acids, tertiary amines, or imidazoles. Protonation or deprotonation of these 
                  groups changes the polymer's hydrophilicity and charge, leading to solubility transitions 
                  or conformational changes. For example, poly(2-ethyl-2-oxazoline-co-2-(4-carboxyphenyl)-2-oxazoline) 
                  is soluble at pH &gt; 5 (deprotonated carboxylate) but aggregates at pH &lt; 4 (protonated 
                  carboxylic acid). pH-responsive glycopolymers are particularly useful for intracellular 
                  drug delivery, where endosomal pH (~5-6) triggers cargo release.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Dual-Responsive Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Combining thermoresponsive and pH-responsive segments in a single block copolymer enables 
                  dual-responsive behavior with orthogonal control. For example, a triblock glycopolymer 
                  with a thermoresponsive middle block and pH-responsive end blocks can undergo temperature-triggered 
                  micellization followed by pH-triggered disassembly. This dual functionality is critical 
                  for smart drug delivery systems that respond to the tumor microenvironment (elevated temperature, 
                  acidic pH) or intracellular compartments.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border border-yellow-200">
                <h4 className="font-semibold mb-2">Self-Assembly and Micellization</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Amphiphilic block copolymers self-assemble into micelles above the critical micelle 
                  concentration (CMC). The hydrodynamic diameter (D<sub>h</sub>) and aggregation number 
                  depend on block lengths and hydrophobic/hydrophilic balance:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white dark:bg-slate-900 p-2 rounded">
                    <strong>Typical CMC:</strong> 10<sup>-6</sup> - 10<sup>-4</sup> M
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2 rounded">
                    <strong>Micelle size:</strong> 20-200 nm
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
