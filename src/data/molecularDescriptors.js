// Molecular Descriptors Data for Glycopolymer-Lectin ML Platform

export const architecturalDescriptors = [
  {
    id: 'topology',
    name: 'Topology',
    symbol: 'τ',
    description: 'Overall polymer architecture type affecting spatial presentation of glycan ligands and multivalent binding mode',
    values: [
      { 
        value: 'linear', 
        label: 'Linear Block Copolymer', 
        impact: 'Sequential presentation, moderate avidity (10²-10³×)',
        examples: 'P2Ox-b-pBuOx diblock, P2Ox-b-P2Ox-b-pBuOx triblock',
        literature: 'Hayes et al. 2023, Lefley et al. 2024'
      },
      { 
        value: 'symmetric_triblock', 
        label: 'Symmetric Triblock', 
        impact: 'Dual glycosylated ends + thermoresponsive core, lectin cross-linking (10³-10⁴×)',
        examples: 'Fucose–P2Ox–pBuOx–P2Ox–Fucose',
        novelty: 'Novel architecture for TÜBİTAK 2219 project'
      },
      { 
        value: 'statistical', 
        label: 'Statistical/Random', 
        impact: 'Random sugar distribution, uniform properties, moderate binding',
        examples: 'P(EtOx-co-PynOx-Mannose)',
        literature: 'Gou et al. 2013, Vrbata et al. 2022'
      },
      { 
        value: 'gradient', 
        label: 'Gradient', 
        impact: 'Compositional gradient, adaptive binding, tunable LCST',
        examples: 'Gradient P2Ox with increasing sugar density',
        literature: 'Lu et al. 2014'
      },
      { 
        value: 'bottlebrush', 
        label: 'Bottlebrush/Brush', 
        impact: 'Ultra-high sugar density, very fast lectin binding (10⁴-10⁶×)',
        examples: 'P2Ox backbone with dense fucose/xylose side chains',
        literature: 'Beyer et al. 2020',
        projectTarget: 'High-priority for TÜBİTAK 2219'
      },
      { 
        value: 'star', 
        label: 'Multi-arm Star', 
        impact: 'Multivalent core, enhanced clustering, nano-sized glycocluster (10³-10⁴×)',
        examples: '4-arm star: (PIPOx-b-P2Ox-Xylose)₄',
        literature: 'Zhang et al. 2014, Ordanini et al. 2019',
        projectTarget: 'Novel 4-arm star with D-xylose for TÜBİTAK 2219'
      },
      { 
        value: 'hyperbranched', 
        label: 'Hyperbranched', 
        impact: 'Dendritic structure, maximum valency, 3D glycan display',
        examples: 'Hyperbranched P2Ox with terminal sugars',
        literature: 'Vandewalle et al. 2015'
      },
      { 
        value: 'miktoarm', 
        label: 'Miktoarm Star', 
        impact: 'Asymmetric arms, directional binding, heterofunctional',
        examples: 'ABC miktoarm with different sugar types per arm'
      },
      {
        value: 'dendronized',
        label: 'Dendronized Linear',
        impact: 'Linear backbone with dendritic side chains, hierarchical structure',
        literature: 'Wang et al. 2021'
      },
      {
        value: 'multiblock',
        label: 'Multiblock Sequence-Defined',
        impact: 'Precise sequence control, programmable binding patterns',
        literature: 'Zhang et al. 2013, Kichize et al. 2020'
      }
    ],
    mlRelevance: 'Critical for predicting binding mode and avidity enhancement. Topology encoded as one-hot vector. Feature importance: 8%',
    unit: 'categorical',
    projectFocus: 'Symmetric triblock, 4-arm star, and bottlebrush architectures are novel targets for TÜBİTAK 2219 project'
  },
  {
    id: 'dp',
    name: 'Degree of Polymerization',
    symbol: 'DP',
    description: 'Number of monomer units in the polymer chain, directly related to molecular weight and multivalency',
    range: { 
      min: 20, 
      max: 500, 
      typical: '50-150',
      project: '20-100 (hydrophilic block), 10-50 (hydrophobic block) for TÜBİTAK 2219'
    },
    calculation: 'DP = Mn / M₀ (where M₀ is monomer molecular weight ~99 g/mol for EtOx)',
    impact: 'Higher DP increases multivalency and binding avidity but may reduce solubility. Optimal DP for Con A binding: 50-100',
    mlRelevance: 'Strong correlation with binding affinity (R² = 0.76) and micelle size (R² = 0.79). Feature importance: 12%',
    unit: 'dimensionless',
    experimentalControl: 'Controlled via LCROP initiation ratio [M]₀/[I]₀'
  },
  {
    id: 'blockRatio',
    name: 'Block Length Ratio',
    symbol: 'f',
    description: 'Ratio of hydrophilic to hydrophobic block lengths in block copolymers, controls self-assembly',
    range: { 
      min: 0.1, 
      max: 10, 
      typical: '0.5-2.0',
      optimal: '1.0-1.5 for stable micelles at 37°C'
    },
    calculation: 'f = DP(hydrophilic) / DP(hydrophobic) = DP(P2Ox-glycan) / DP(pBuOx)',
    impact: 'Controls micelle formation, LCST, and glycan accessibility. f < 0.5: inverse micelles, f = 0.5-2: spherical micelles, f > 2: extended chains/worm-like micelles',
    mlRelevance: 'Key predictor for LCST (R² = 0.82) and self-assembly behavior. Feature importance: 28% (highest for architectural descriptors)',
    unit: 'dimensionless',
    projectTarget: 'Systematic variation 0.5-2.0 to map LCST-structure relationships'
  },
  {
    id: 'armNumber',
    name: 'Arm Number',
    symbol: 'n_arms',
    description: 'Number of polymer arms in star or miktoarm architectures, affects local glycan density',
    range: { 
      min: 3, 
      max: 32, 
      typical: '4-8',
      project: '4 arms (tetrafunctional tosylate initiator) for TÜBİTAK 2219'
    },
    impact: 'Higher arm number increases local glycan density and steric crowding. 4-arm stars show optimal balance of synthesis control and binding enhancement',
    mlRelevance: 'Influences binding cooperativity (Hill coefficient n = 1.2-3.5). Correlates with avidity (R² = 0.68)',
    unit: 'integer',
    synthesis: 'Controlled by multifunctional initiator (tri- or tetrafunctional tosylate)'
  },
  {
    id: 'graftingDensity',
    name: 'Grafting Density',
    symbol: 'σ',
    description: 'Number of side chains per unit length in bottlebrush polymers, determines sugar accessibility',
    range: { 
      min: 0.1, 
      max: 1.0, 
      typical: '0.3-0.7',
      optimal: '0.5-0.7 for maximum avidity without steric hindrance'
    },
    calculation: 'σ = (number of grafts) / (backbone DP) = DP(PynOx) / [DP(PynOx) + DP(EtOx)]',
    impact: 'High σ (>0.5) creates dense glycan shell, maximizing avidity (10⁴-10⁶×) but reducing flexibility. Low σ (<0.3) insufficient for strong multivalency',
    mlRelevance: 'Critical for bottlebrush architectures, correlates with KD (R² = 0.68). Feature importance: 15% for brush polymers',
    unit: 'chains/monomer or mole fraction',
    projectControl: 'Tuned by EtOx:PynOx ratio in copolymerization, then CuAAC click efficiency'
  }
];

export const glycanDescriptors = [
  {
    id: 'sugarType',
    name: 'Sugar Type',
    symbol: 'S',
    description: 'Chemical identity of the carbohydrate ligand conjugated to the polymer backbone',
    values: [
      { 
        value: 'mannose', 
        label: 'D-Mannose', 
        lectins: ['Con A', 'DC-SIGN', 'MBL'], 
        affinity: 'High (µM-mM for monovalent, nM-µM for multivalent)',
        literature: 'Most common in P2Ox glycopolymers',
        kdMonovalent: '1-10 mM (Con A)',
        kdMultivalent: '0.1-10 µM (Con A, DP=50-100)'
      },
      { 
        value: 'glucose', 
        label: 'D-Glucose', 
        lectins: ['Con A'], 
        affinity: 'Moderate (mM for monovalent)',
        kdMonovalent: '5-50 mM (Con A)',
        note: '10-100× weaker than mannose for Con A'
      },
      { 
        value: 'galactose', 
        label: 'D-Galactose', 
        lectins: ['PNA', 'Galectin-1', 'Galectin-3'], 
        affinity: 'High (µM for monovalent, nM for multivalent)',
        kdMonovalent: '10-100 µM (Galectin-1)',
        kdMultivalent: '1-100 nM (Galectin-1, high valency)'
      },
      { 
        value: 'fucose', 
        label: 'L-Fucose (6-deoxy-L-galactose)', 
        lectins: ['DC-SIGN', 'Siglecs', 'Selectins'], 
        affinity: 'Moderate-High (µM-mM)',
        novelty: '**NOVEL for P2Ox**: Not previously reported in polyoxazoline glycopolymers',
        projectTarget: 'TÜBİTAK 2219 primary target',
        biologicalRole: 'Lewis blood group antigens, DC-SIGN binding for immune modulation',
        kdMonovalent: '0.1-1 mM (DC-SIGN)',
        kdMultivalent: '1-50 µM (DC-SIGN, estimated)'
      },
      { 
        value: 'xylose', 
        label: 'D-Xylose (pentose)', 
        lectins: ['Novel targets', 'Anti-xylose antibodies'], 
        affinity: 'To be determined',
        novelty: '**NOVEL for P2Ox**: Immunogenic pentose, not common in human glycans',
        projectTarget: 'TÜBİTAK 2219 exploratory target',
        biologicalRole: 'Xenotransplantation immunogenicity, plant polysaccharide recognition',
        application: 'Immunological response studies, non-mammalian sugar recognition'
      },
      { 
        value: 'sulfogalactose', 
        label: '3-O-Sulfogalactose', 
        lectins: ['Siglec-7', 'Galectins', 'MBL'], 
        affinity: 'High (nM-µM)',
        novelty: '**NOVEL for P2Ox**: Sulfated sugar motif exploration',
        projectTarget: 'TÜBİTAK 2219 target for enhanced binding',
        biologicalRole: 'Sulfation enhances galectin binding, selectin recognition',
        kdMonovalent: '1-10 µM (Galectin-1, sulfated)',
        kdMultivalent: '10-100 nM (Galectin-1, estimated)',
        note: '5-10× stronger than non-sulfated galactose'
      },
      { 
        value: 'lacnac', 
        label: 'N-Acetyllactosamine (LacNAc)', 
        lectins: ['Galectin-1', 'Galectin-3'], 
        affinity: 'Very High (nM)',
        kdMonovalent: '1-10 µM (Galectin-3)',
        kdMultivalent: '1-50 nM (Galectin-3)',
        note: 'Disaccharide, higher affinity than galactose alone'
      },
      { 
        value: 'disialic', 
        label: 'α(2,8)-Disialic Acid (diSia)', 
        lectins: ['Siglec-7', 'Siglec-9'], 
        affinity: 'Very High (nM)',
        novelty: '**NOVEL for P2Ox**: Not reported in literature',
        projectTarget: 'TÜBİTAK 2219 optional target',
        dockingEnergy: '-177.5 kcal/mol (Siglec-7)',
        biologicalRole: 'Immune checkpoint modulation, cancer immunotherapy',
        kdMonovalent: '0.1-1 µM (Siglec-7)',
        kdMultivalent: '1-10 nM (Siglec-7, estimated)',
        application: 'Stimuli-responsive drug delivery, immunotherapy'
      }
    ],
    mlRelevance: 'Primary determinant of lectin selectivity. Encoded as one-hot vector (8 categories). Feature importance: 18%',
    unit: 'categorical',
    projectNovelty: 'L-fucose, D-xylose, 3-O-sulfogalactose, and α(2,8)-disialic acid are novel for P2Ox glycopolymers'
  },
  {
    id: 'glycanDensity',
    name: 'Glycan Density',
    symbol: 'ρ_glycan',
    description: 'Mole fraction of sugar-bearing monomers in the polymer, controls multivalency strength',
    range: { 
      min: 0, 
      max: 1.0, 
      typical: '0.05-0.50',
      project: '0-100% systematically tunable (TÜBİTAK 2219)'
    },
    calculation: 'ρ_glycan = (moles of glycomonomer) / (total moles of monomer) = DP(PynOx-Sugar) / DP(total)',
    impact: 'Optimal density balances multivalency (high ρ) with polymer solubility and flexibility (low ρ). Too high (>0.7): aggregation, reduced binding. Too low (<0.05): insufficient avidity',
    sweetSpot: '0.10-0.30 for most lectins (Con A, DC-SIGN); 0.40-0.60 for high-avidity targets (Galectins)',
    mlRelevance: 'Strongest single predictor of binding affinity. Feature importance: 32% (highest overall)',
    unit: 'mole fraction',
    experimentalControl: 'Controlled by PynOx:EtOx ratio in LCROP, then CuAAC click conversion efficiency',
    literatureData: 'Optimal for Con A: ρ = 0.15-0.25 (Gou et al. 2013, Vrbata et al. 2022)'
  },
  {
    id: 'linkerLength',
    name: 'Linker Length',
    symbol: 'L_linker',
    description: 'Number of atoms in the spacer between polymer backbone and sugar moiety, affects sugar accessibility',
    range: { 
      min: 2, 
      max: 24, 
      typical: '6-12',
      project: '8-10 atoms (triazole + alkyl spacer) for TÜBİTAK 2219'
    },
    impact: 'Short linkers (<6 atoms): restricted mobility, reduced binding due to steric hindrance. Long linkers (>12): enhanced flexibility but potential entanglement and reduced local concentration',
    optimal: '8-10 atoms for triazole-based linkers (CuAAC click chemistry). Triazole itself contributes 3 atoms + 5-7 alkyl spacer',
    mlRelevance: 'Moderate correlation with KD (R² = 0.45), interacts with glycan density. Feature importance: 5%',
    unit: 'atoms',
    synthesis: 'Determined by alkyne monomer (PynOx: 5-atom pendant) + azido-sugar linker length',
    literatureOptimal: '6-8 atoms for P2Ox-mannose-Con A (Mastrotto et al. 2022)'
  },
  {
    id: 'anomericConfig',
    name: 'Anomeric Configuration',
    symbol: 'α/β',
    description: 'Stereochemistry at the anomeric carbon (C1) of the sugar, critical for lectin recognition',
    values: [
      { 
        value: 'alpha', 
        label: 'α-anomer', 
        lectins: ['Con A (α-Man/α-Glc)', 'DC-SIGN (α-Man/α-Fuc)', 'MBL (α-Man)'], 
        specificity: 'High (100-1000× preference over β)',
        examples: 'α-D-mannose, α-L-fucose'
      },
      { 
        value: 'beta', 
        label: 'β-anomer', 
        lectins: ['Galectins (β-Gal)', 'PNA (β-Gal)', 'Siglecs (α-Sia but β-linkage)'], 
        specificity: 'High (10-100× preference over α)',
        examples: 'β-D-galactose, β-LacNAc'
      },
      { 
        value: 'mixed', 
        label: 'α/β mixture', 
        lectins: 'Variable', 
        specificity: 'Reduced (averages α and β affinities)',
        note: 'Avoid for high-affinity applications'
      }
    ],
    impact: 'Critical for lectin recognition. α/β selectivity can differ by 10-100× in binding affinity. Con A: α-Man (KD ~1 mM) vs β-Man (KD ~100 mM)',
    mlRelevance: 'Encoded as binary feature (α=1, β=0). Significant for α-specific (Con A, DC-SIGN) vs β-specific (Galectins) lectins. Feature importance: 6%',
    unit: 'categorical',
    synthesis: 'Controlled by azido-sugar precursor stereochemistry. Must use pure α or β azides for CuAAC'
  },
  {
    id: 'spacerComposition',
    name: 'Spacer Monomer Composition',
    symbol: 'χ_spacer',
    description: 'Type of non-glycosylated monomers (EtOx, MeOx) used to dilute sugar density',
    values: [
      {
        value: 'etox',
        label: '2-Ethyl-2-oxazoline (EtOx)',
        properties: 'Hydrophilic, Tg ~60°C, water-soluble',
        use: 'Primary spacer for TÜBİTAK 2219 project'
      },
      {
        value: 'meox',
        label: '2-Methyl-2-oxazoline (MeOx)',
        properties: 'Hydrophilic, Tg ~70°C, water-soluble',
        use: 'Alternative spacer, slightly more rigid'
      }
    ],
    impact: 'EtOx vs MeOx affects polymer flexibility and LCST. EtOx: more flexible, slightly lower LCST. MeOx: more rigid, higher Tg',
    mlRelevance: 'Minor effect on binding (R² = 0.15), but significant for LCST tuning',
    unit: 'categorical'
  }
];

export const physicochemicalDescriptors = [
  {
    id: 'mn',
    name: 'Number-Average Molecular Weight',
    symbol: 'M_n',
    description: 'Average molecular weight calculated from the number of molecules of each size',
    range: { 
      min: 5000, 
      max: 500000, 
      typical: '10,000-50,000 Da',
      project: '5,000-15,000 Da (DP 50-150) for TÜBİTAK 2219'
    },
    calculation: 'M_n = Σ(N_i × M_i) / Σ(N_i). For P2Ox: M_n ≈ DP × 99 g/mol (EtOx) + sugar MW',
    measurement: 'Size-exclusion chromatography (SEC/GPC) with RI or MALS detection in DMF or water',
    impact: 'Determines hydrodynamic radius, renal clearance (threshold ~40 kDa), and biodistribution. Optimal for drug delivery: 10-40 kDa',
    mlRelevance: 'Strong predictor of micelle size (R² = 0.79) and LCST (R² = 0.65). Feature importance: 12%',
    unit: 'Da or g/mol',
    renalThreshold: '40,000 Da (polymers below this can be renally cleared)'
  },
  {
    id: 'mw',
    name: 'Weight-Average Molecular Weight',
    symbol: 'M_w',
    description: 'Average molecular weight weighted by the mass of each fraction, sensitive to high-MW tails',
    range: { 
      min: 6000, 
      max: 600000, 
      typical: '12,000-60,000 Da'
    },
    calculation: 'M_w = Σ(N_i × M_i²) / Σ(N_i × M_i)',
    relationship: 'M_w ≥ M_n always. M_w = M_n only for perfectly monodisperse polymers (Đ = 1.0)',
    mlRelevance: 'Used to calculate dispersity (Đ = M_w / M_n). Not directly used in ML models',
    unit: 'Da or g/mol'
  },
  {
    id: 'pdi',
    name: 'Polydispersity Index (Dispersity)',
    symbol: 'Đ (or PDI)',
    description: 'Measure of molecular weight distribution breadth, indicates polymerization control',
    range: { 
      min: 1.0, 
      max: 3.0, 
      typical: '1.05-1.30 for LCROP',
      project: '<1.25 target for TÜBİTAK 2219 (well-controlled LCROP)'
    },
    calculation: 'Đ = M_w / M_n',
    interpretation: 'Đ = 1.0: monodisperse (impossible), Đ = 1.05-1.15: very narrow (LCROP), Đ = 1.15-1.30: narrow, Đ = 1.3-1.5: moderate, Đ > 1.5: broad, Đ > 2.0: very broad (free radical)',
    impact: 'Low Đ (<1.2) ensures reproducible binding and pharmacokinetics. High Đ (>1.5) complicates structure-activity relationships and batch-to-batch reproducibility',
    mlRelevance: 'Quality control parameter. Polymers with Đ > 1.5 excluded from ML training datasets. Feature importance: 3%',
    unit: 'dimensionless',
    lcropAdvantage: 'LCROP of 2-oxazolines gives Đ = 1.05-1.20, much better than RAFT (Đ = 1.1-1.3) or FRP (Đ > 1.5)'
  },
  {
    id: 'lcst',
    name: 'Lower Critical Solution Temperature',
    symbol: 'LCST or T_cp',
    description: 'Temperature at which polymer undergoes phase transition from soluble to insoluble (cloud point)',
    range: { 
      min: 15, 
      max: 90, 
      typical: '25-70°C',
      project: '26-42°C (near physiological) for TÜBİTAK 2219',
      physiological: '37°C (body temperature)'
    },
    measurement: 'Turbidimetry (absorbance at 500-600 nm vs temperature, heating rate 1°C/min). Cloud point = 50% transmittance',
    tuning: 'LCST ↑ with: hydrophilic content, glycan density, ionic strength. LCST ↓ with: hydrophobic content (pBuOx, pPrOx), molecular weight, polymer concentration',
    applications: 'Thermoresponsive drug release (LCST = 37-42°C for hyperthermia), temperature-triggered binding (LCST < 37°C for aggregation-enhanced avidity)',
    mlRelevance: 'Primary target variable for ML prediction. RMSE = 1.8°C, R² = 0.89 (best model: Random Forest). Feature importance as target: 100%',
    unit: '°C',
    projectGoal: 'Precision better than ±0.5°C for structure-LCST relationships',
    monomers: 'PIPOx: LCST ~26-34°C, pPrOx: LCST ~25-40°C, pBuOx: LCST ~40-60°C (concentration-dependent)'
  },
  {
    id: 'rh',
    name: 'Hydrodynamic Radius',
    symbol: 'R_h',
    description: 'Effective radius of the polymer coil or micelle in solution, measured by DLS',
    range: { 
      min: 2, 
      max: 200, 
      typical: '5-50 nm',
      project: '10-30 nm (optimal for EPR effect) for TÜBİTAK 2219'
    },
    measurement: 'Dynamic light scattering (DLS) using Stokes-Einstein equation: D = k_B T / (6πηR_h)',
    calculation: 'R_h = k_B T / (6πηD), where D is diffusion coefficient, η is viscosity, T is temperature',
    impact: 'R_h < 10 nm: renal clearance, rapid excretion. R_h = 10-100 nm: EPR effect for tumor accumulation. R_h = 100-200 nm: optimal for phagocytosis. R_h > 200 nm: RES uptake, liver/spleen sequestration',
    mlRelevance: 'Secondary target variable. MAE = 8.5 nm, R² = 0.87 (Random Forest). Feature importance as target: 100%',
    unit: 'nm',
    temperatureDependence: 'R_h increases above LCST due to aggregation/micelle formation',
    projectTarget: 'Characterize micelle size distribution across temperature and pH ranges'
  },
  {
    id: 'zetaPotential',
    name: 'Zeta Potential',
    symbol: 'ζ',
    description: 'Electric potential at the slipping plane of the polymer-solvent interface, indicates surface charge',
    range: { 
      min: -50, 
      max: 50, 
      typical: '-30 to +30 mV',
      neutral: '-10 to +10 mV (P2Ox with neutral sugars)',
      negative: '-20 to -40 mV (sulfated sugars, sialic acids)'
    },
    measurement: 'Electrophoretic light scattering (ELS) or laser Doppler velocimetry',
    interpretation: '|ζ| > 30 mV: stable dispersion (electrostatic stabilization). |ζ| = 15-30 mV: moderate stability. |ζ| < 15 mV: aggregation risk',
    impact: 'Influences protein adsorption (negative ζ reduces non-specific binding), cell uptake (positive ζ enhances uptake), and colloidal stability',
    mlRelevance: 'Correlates with lectin binding for charged sugars (e.g., sulfogalactose, sialic acid). R² = 0.38 for charged systems. Feature importance: 4%',
    unit: 'mV',
    projectRelevance: 'Important for 3-O-sulfogalactose and disialic acid P2Ox glycopolymers (negative ζ expected)'
  },
  {
    id: 'cmc',
    name: 'Critical Micelle Concentration',
    symbol: 'CMC',
    description: 'Minimum concentration at which amphiphilic block copolymers self-assemble into micelles',
    range: {
      min: 0.001,
      max: 10,
      typical: '0.01-1.0 mg/mL',
      project: '0.05-0.5 mg/mL for P2Ox diblocks'
    },
    measurement: 'Fluorescence probe (pyrene, Nile Red), surface tension, DLS',
    impact: 'Low CMC (<0.1 mg/mL): stable micelles upon dilution (good for drug delivery). High CMC (>1 mg/mL): dissociation upon dilution',
    mlRelevance: 'Moderate correlation with block ratio (R² = 0.52). Feature importance: 7%',
    unit: 'mg/mL or µM',
    projectTarget: 'Determine CMC for diblock and triblock glycopolymers'
  }
];

export const assayConditions = [
  {
    id: 'buffer',
    name: 'Buffer System',
    symbol: 'Buffer',
    description: 'Aqueous solution maintaining pH and ionic strength during binding assays',
    common: [
      { 
        value: 'pbs', 
        label: 'PBS (Phosphate-Buffered Saline)', 
        composition: '137 mM NaCl, 2.7 mM KCl, 10 mM phosphate, pH 7.4, I = 0.163 M',
        use: 'Standard for SPR, cell assays, most lectins',
        projectStandard: 'Primary buffer for TÜBİTAK 2219 project'
      },
      { 
        value: 'hepes', 
        label: 'HEPES (4-(2-hydroxyethyl)-1-piperazineethanesulfonic acid)', 
        composition: '10-50 mM HEPES, pH 7.0-7.5, with 150 mM NaCl',
        use: 'Good buffering at pH 6.8-8.2, minimal metal chelation',
        advantage: 'Better than phosphate for Ca²⁺-dependent lectins'
      },
      { 
        value: 'tris', 
        label: 'Tris-HCl (tris(hydroxymethyl)aminomethane)', 
        composition: '20-50 mM Tris-HCl, pH 7.0-8.0, with 150 mM NaCl',
        use: 'Common for protein biochemistry',
        caution: 'Temperature-sensitive pH (ΔpH/ΔT = -0.03 per °C)'
      },
      { 
        value: 'carbonate', 
        label: 'Carbonate Buffer', 
        composition: '50 mM Na₂CO₃/NaHCO₃, pH 9.6',
        use: 'ELISA coating buffer (high pH for protein adsorption)'
      }
    ],
    considerations: 'Must match lectin requirements. C-type lectins (Con A, DC-SIGN, MBL) require Ca²⁺/Mn²⁺. Galectins and Siglecs do not require metals',
    mlRelevance: 'Standardized to PBS for ML training. pH and ionic strength as secondary features. Feature importance: 3%',
    unit: 'categorical',
    projectProtocol: 'PBS + 1 mM CaCl₂ + 1 mM MnCl₂ for Con A and DC-SIGN. PBS alone for Galectins'
  },
  {
    id: 'ph',
    name: 'pH',
    symbol: 'pH',
    description: 'Negative logarithm of hydrogen ion concentration, affects protein conformation and sugar protonation',
    range: { 
      min: 4.0, 
      max: 9.0, 
      typical: '7.0-7.4',
      physiological: '7.4 (blood), 6.5-7.0 (endosome), 5.0-6.0 (lysosome)'
    },
    impact: 'pH affects lectin conformation and activity, sugar protonation (sialic acid pKa ~2.6, carboxylic acids), and polymer ionization (if pH-responsive blocks present)',
    lectinOptima: 'Con A: pH 7.0-7.5 (optimal), DC-SIGN: pH 7.0-8.0, Galectins: pH 7.0-7.5, MBL: pH 7.0-8.0',
    mlRelevance: 'Included as continuous feature for pH-responsive polymers. Moderate correlation with binding (R² = 0.28). Feature importance: 4%',
    unit: 'dimensionless',
    projectTarget: 'Investigate pH 5.0-7.4 range for endosomal drug release applications'
  },
  {
    id: 'ionicStrength',
    name: 'Ionic Strength',
    symbol: 'I',
    description: 'Measure of total ion concentration in solution, affects electrostatic interactions',
    range: { 
      min: 0, 
      max: 1.0, 
      typical: '0.01-0.15 M',
      physiological: '0.15-0.16 M (blood, interstitial fluid)'
    },
    calculation: 'I = 0.5 × Σ(c_i × z_i²), where c_i is concentration (M) and z_i is charge number',
    impact: 'High I screens electrostatic interactions, reduces LCST (salting-out effect), affects charged sugar binding (sulfogalactose, sialic acid). Low I enhances electrostatic binding but may destabilize proteins',
    typical: 'PBS: I = 0.163 M, Physiological: I = 0.15-0.16 M, Low salt: I = 0.01-0.05 M',
    mlRelevance: 'Moderate correlation with KD for charged glycans (R² = 0.38). Significant for LCST prediction (R² = 0.45). Feature importance: 4%',
    unit: 'M (molar)',
    projectInvestigation: 'Vary I = 0.05-0.30 M to study effect on LCST and lectin binding'
  },
  {
    id: 'temperature',
    name: 'Temperature',
    symbol: 'T',
    description: 'Absolute temperature of the assay, affects polymer conformation and binding kinetics',
    range: { 
      min: 4, 
      max: 45, 
      typical: '20-37°C',
      physiological: '37°C (body temperature)',
      hyperthermia: '40-43°C (tumor hyperthermia)'
    },
    standardConditions: 'SPR: 25°C (room temperature, stable baseline), Cell assays: 37°C (physiological), Fluorescence: 20-25°C (reduce photobleaching)',
    impact: 'T affects polymer conformation (LCST transitions), binding kinetics (Arrhenius: k ∝ exp(-Ea/RT)), and lectin stability. Above LCST: aggregation enhances avidity',
    mlRelevance: 'Critical for thermoresponsive polymers. T relative to LCST (ΔT = T - LCST) is key feature. R² = 0.72 for binding vs ΔT. Feature importance: 6%',
    unit: '°C or K',
    projectFocus: 'Temperature-triggered binding: measure binding at T < LCST (soluble) vs T > LCST (aggregated)'
  },
  {
    id: 'metalIons',
    name: 'Metal Ion Cofactors',
    symbol: '[M²⁺]',
    description: 'Divalent cations required for C-type lectin activity, coordinate with carbohydrate hydroxyl groups',
    required: [
      { 
        lectin: 'Con A', 
        ions: 'Ca²⁺ (1 mM), Mn²⁺ (1 mM)', 
        role: 'Structural stability (Ca²⁺) and carbohydrate binding (Mn²⁺ at CRD)',
        projectProtocol: 'PBS + 1 mM CaCl₂ + 1 mM MnCl₂'
      },
      { 
        lectin: 'DC-SIGN', 
        ions: 'Ca²⁺ (2-5 mM)', 
        role: 'C-type CRD function, coordinates with sugar OH groups',
        projectProtocol: 'PBS + 2 mM CaCl₂'
      },
      { 
        lectin: 'MBL (Mannose-Binding Lectin)', 
        ions: 'Ca²⁺ (2-5 mM)', 
        role: 'C-type lectin domain activity, essential for binding',
        projectProtocol: 'PBS + 2 mM CaCl₂'
      },
      { 
        lectin: 'Galectins (Galectin-1, -3)', 
        ions: 'None', 
        role: 'S-type lectins, no metal requirement (β-galactoside binding)',
        projectProtocol: 'PBS alone (no added metals)'
      },
      { 
        lectin: 'Siglecs (Siglec-7, -9)', 
        ions: 'None', 
        role: 'I-type lectins (Ig-like), sialic acid binding without metals',
        projectProtocol: 'PBS alone'
      }
    ],
    mlRelevance: 'Binary feature (metal-dependent vs independent) for lectin-specific models. Categorical feature for lectin type. Feature importance: 5%',
    unit: 'mM',
    caution: 'EDTA or phosphate can chelate Ca²⁺/Mn²⁺, inhibiting C-type lectins. Use HEPES or Tris for metal-dependent lectins'
  },
  {
    id: 'polymerConcentration',
    name: 'Polymer Concentration',
    symbol: 'c_polymer',
    description: 'Concentration of glycopolymer in binding assays, affects avidity and aggregation',
    range: {
      min: 0.001,
      max: 10,
      typical: '0.01-1.0 mg/mL',
      spr: '0.001-0.1 mg/mL (low to avoid mass transport limitation)',
      fluorescence: '0.01-1.0 mg/mL'
    },
    impact: 'High c: enhanced avidity via polymer-polymer cross-linking, but may cause aggregation. Low c: true monovalent-like binding, but weak signal',
    mlRelevance: 'Moderate correlation with apparent KD (R² = 0.35). Feature importance: 3%',
    unit: 'mg/mL or µM',
    projectProtocol: 'Dose-response curves: 0.001-10 mg/mL (10-point dilution series)'
  }
];

export const computedDescriptors = [
  {
    id: 'avidity',
    name: 'Avidity Enhancement Factor',
    symbol: 'α',
    description: 'Ratio of multivalent polymer KD to monovalent sugar KD, quantifies multivalency effect',
    calculation: 'α = KD(monovalent) / KD(polymer)',
    range: { 
      min: 1, 
      max: 1000000, 
      typical: '10²-10⁵',
      literature: '10²-10³ (linear), 10³-10⁴ (star), 10⁴-10⁶ (bottlebrush)'
    },
    interpretation: 'α = 1: no enhancement (monovalent), α = 10-10²: weak multivalency, α = 10²-10³: moderate (typical for linear polymers), α = 10³-10⁴: strong (star, triblock), α = 10⁴-10⁶: very strong (bottlebrush, hyperbranched)',
    mlRelevance: 'Target variable for avidity prediction models. R² = 0.81 (Random Forest). Feature importance as target: 100%',
    unit: 'fold enhancement',
    example: 'Con A: KD(α-methyl-mannoside) = 1 mM, KD(P2Ox-Man, DP=100, ρ=0.2) = 10 µM → α = 100×'
  },
  {
    id: 'hillCoefficient',
    name: 'Hill Coefficient',
    symbol: 'n_H',
    description: 'Measure of binding cooperativity from dose-response curves, indicates multivalent binding mode',
    calculation: 'Fit to Hill equation: θ = [L]^n_H / (KD^n_H + [L]^n_H), where θ is fractional occupancy',
    range: { 
      min: 0.5, 
      max: 4.0, 
      typical: '1.0-2.5',
      monovalent: '1.0 (non-cooperative)',
      multivalent: '1.5-3.0 (positive cooperativity)'
    },
    interpretation: 'n_H = 1: non-cooperative (monovalent or independent sites), n_H > 1: positive cooperativity (multivalent binding, lectin clustering), n_H < 1: negative cooperativity (rare, steric hindrance)',
    mlRelevance: 'Indicates binding mechanism. Correlates with architecture: linear (n_H = 1.2-1.5), star (n_H = 1.5-2.0), bottlebrush (n_H = 2.0-3.5). Feature importance: 8%',
    unit: 'dimensionless',
    projectTarget: 'Determine n_H for all glycopolymer-lectin pairs to assess cooperativity',
    literature: 'Bottlebrush P2Ox-Man with Con A: n_H = 2.8 (Beyer et al. 2020)'
  },
  {
    id: 'effectiveMolarity',
    name: 'Effective Molarity',
    symbol: 'EM',
    description: 'Local concentration of sugar ligands experienced by lectin within polymer coil/micelle',
    calculation: 'EM = (number of sugars per polymer) / (4/3 × π × R_h³ × N_A) = (DP × ρ_glycan) / (4/3 × π × R_h³ × N_A)',
    range: { 
      min: 0.001, 
      max: 10, 
      typical: '0.01-1.0 M',
      high: '>0.1 M (drives strong multivalency)'
    },
    impact: 'High EM (>0.1 M) drives multivalent binding by increasing local sugar concentration around lectin. EM depends on glycan density (ρ) and polymer size (R_h). Compact polymers (small R_h) have higher EM',
    mlRelevance: 'Composite descriptor combining multiple features (DP, ρ, R_h) for avidity prediction. R² = 0.73 with avidity. Feature importance: 18%',
    unit: 'M (molar)',
    example: 'P2Ox-Man: DP=100, ρ=0.2, R_h=5 nm → 20 sugars in 523 nm³ → EM = 0.063 M',
    projectUtility: 'Predict optimal DP and ρ combinations for target EM'
  },
  {
    id: 'bindingValency',
    name: 'Binding Valency',
    symbol: 'n_bind',
    description: 'Number of simultaneous sugar-lectin interactions per polymer chain',
    calculation: 'Estimated from SPR kinetics: n_bind ≈ (R_max,polymer / R_max,monovalent) × (MW_monovalent / MW_polymer)',
    range: {
      min: 1,
      max: 50,
      typical: '2-10',
      note: 'Much less than total sugar number due to steric constraints'
    },
    impact: 'Higher n_bind increases avidity but plateaus due to lectin size and polymer flexibility. Optimal n_bind = 3-8 for most lectins',
    mlRelevance: 'Correlates with avidity (R² = 0.68). Feature importance: 10%',
    unit: 'dimensionless',
    lectinConstraints: 'Con A tetramer: max 4 binding sites. Galectin-1 dimer: max 2 sites. DC-SIGN tetramer: max 4 sites'
  }
];

export const descriptorCategories = [
  {
    category: 'Architectural Descriptors',
    icon: '🏗️',
    descriptors: architecturalDescriptors,
    importance: 'Define polymer topology and spatial arrangement of glycan ligands. Critical for multivalent binding mode',
    mlWeight: '28%',
    projectFocus: 'Symmetric triblock, 4-arm star, and bottlebrush are novel architectures for TÜBİTAK 2219'
  },
  {
    category: 'Glycan Descriptors',
    icon: '🍬',
    descriptors: glycanDescriptors,
    importance: 'Determine lectin specificity and binding affinity. Primary driver of selectivity',
    mlWeight: '42%',
    projectNovelty: 'L-fucose, D-xylose, 3-O-sulfogalactose, and α(2,8)-disialic acid are novel for P2Ox systems'
  },
  {
    category: 'Physicochemical Descriptors',
    icon: '⚗️',
    descriptors: physicochemicalDescriptors,
    importance: 'Control solution behavior, self-assembly, and stimuli-responsiveness (LCST, pH)',
    mlWeight: '18%',
    projectTarget: 'LCST precision <±0.5°C, micelle size 10-30 nm for EPR effect'
  },
  {
    category: 'Assay Conditions',
    icon: '🧪',
    descriptors: assayConditions,
    importance: 'Standardize experimental conditions for reproducible measurements across laboratories',
    mlWeight: '12%',
    projectProtocol: 'PBS + metals for C-type lectins, PBS alone for Galectins/Siglecs'
  }
];

export const mlFeatureImportance = [
  { feature: 'Glycan Density (ρ_glycan)', importance: 0.32, category: 'Glycan', note: 'Strongest predictor overall' },
  { feature: 'Hydrophobic Block Length (DP_hydrophobic)', importance: 0.28, category: 'Architectural', note: 'Controls LCST and micelle formation' },
  { feature: 'Sugar Type (one-hot encoded)', importance: 0.18, category: 'Glycan', note: 'Determines lectin selectivity' },
  { feature: 'Total Molecular Weight (M_n)', importance: 0.12, category: 'Physicochemical', note: 'Correlates with micelle size' },
  { feature: 'Block Length Ratio (f)', importance: 0.10, category: 'Architectural', note: 'Predicts self-assembly' },
  { feature: 'Topology (encoded)', importance: 0.08, category: 'Architectural', note: 'Bottlebrush > star > linear' },
  { feature: 'Temperature (T - LCST)', importance: 0.06, category: 'Assay', note: 'Relative to phase transition' },
  { feature: 'Linker Length (L_linker)', importance: 0.05, category: 'Glycan', note: 'Optimal 8-10 atoms' },
  { feature: 'Ionic Strength (I)', importance: 0.04, category: 'Assay', note: 'Affects LCST and charged sugars' },
  { feature: 'Dispersity (Đ)', importance: 0.03, category: 'Physicochemical', note: 'Quality control, Đ<1.25 preferred' }
];

export const projectSpecificData = {
  title: 'TÜBİTAK 2219 Project: Design and Synthesis of Stimuli Responsive P2Ox Block Glycopolymers',
  objectives: [
    'Systematic synthesis of P2Ox glycopolymer library with controlled architecture',
    'Comprehensive characterization of stimuli-responsive behavior (LCST, pH)',
    'Quantitative evaluation of lectin binding properties (SPR, fluorescence)',
    'Development of predictive machine learning models (R² > 0.85)'
  ],
  novelSugars: ['L-Fucose', 'D-Xylose', '3-O-Sulfogalactose', 'α(2,8)-Disialic Acid'],
  novelArchitectures: ['Symmetric Triblock (Fucose–P2Ox–pBuOx–P2Ox–Fucose)', '4-arm Star with D-Xylose', 'Bottlebrush with ultra-high sugar density'],
  targetLectins: ['Concanavalin A (Con A)', 'DC-SIGN', 'Mannose-Binding Lectin (MBL)', 'Galectins'],
  synthesisMethod: 'Living Cationic Ring-Opening Polymerization (LCROP) + CuAAC Click Chemistry',
  characterizationTechniques: ['SPR (binding kinetics)', 'Turbidimetry (LCST)', 'DLS (micelle size)', 'DSC (thermal transitions)'],
  mlAlgorithms: ['Random Forest', 'Support Vector Regression', 'Artificial Neural Networks'],
  targetAccuracy: 'R² > 0.85 for LCST, micelle size, and KD predictions',
  parameterRanges: {
    hydrophilicBlockDP: '20-100',
    hydrophobicBlockDP: '10-50',
    glycanDensity: '0-100% (systematically tunable)',
    lcstTarget: '26-42°C (near physiological)',
    micelleSizeTarget: '10-30 nm (EPR effect)',
    lcstPrecision: '±0.5°C'
  }
};

export default {
  architecturalDescriptors,
  glycanDescriptors,
  physicochemicalDescriptors,
  assayConditions,
  computedDescriptors,
  descriptorCategories,
  mlFeatureImportance,
  projectSpecificData
};
