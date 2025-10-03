// Molecular Descriptors Data for Glycopolymer-Lectin ML Platform

export const architecturalDescriptors = [
  {
    id: 'topology',
    name: 'Topology',
    symbol: 'τ',
    description: 'Overall polymer architecture type affecting spatial presentation of glycan ligands',
    values: [
      { value: 'linear', label: 'Linear', impact: 'Sequential presentation, moderate avidity' },
      { value: 'block', label: 'Block Copolymer', impact: 'Segregated domains, tunable LCST' },
      { value: 'statistical', label: 'Statistical', impact: 'Random distribution, uniform properties' },
      { value: 'gradient', label: 'Gradient', impact: 'Compositional gradient, adaptive binding' },
      { value: 'bottlebrush', label: 'Bottlebrush', impact: 'Dense glycan display, high avidity (10³-10⁶×)' },
      { value: 'star', label: 'Star', impact: 'Multivalent core, enhanced clustering' },
      { value: 'hyperbranched', label: 'Hyperbranched', impact: 'Dendritic structure, maximum valency' },
      { value: 'miktoarm', label: 'Miktoarm Star', impact: 'Asymmetric arms, directional binding' }
    ],
    mlRelevance: 'Critical for predicting binding mode and avidity enhancement',
    unit: 'categorical'
  },
  {
    id: 'dp',
    name: 'Degree of Polymerization',
    symbol: 'DP',
    description: 'Number of monomer units in the polymer chain, directly related to molecular weight',
    range: { min: 20, max: 500, typical: '50-150' },
    calculation: 'DP = Mn / M₀ (where M₀ is monomer molecular weight)',
    impact: 'Higher DP increases multivalency but may reduce solubility and increase polydispersity',
    mlRelevance: 'Strong correlation with binding affinity (R² = 0.76) and micelle size',
    unit: 'dimensionless'
  },
  {
    id: 'blockRatio',
    name: 'Block Length Ratio',
    symbol: 'f',
    description: 'Ratio of hydrophilic to hydrophobic block lengths in block copolymers',
    range: { min: 0.1, max: 10, typical: '0.5-2.0' },
    calculation: 'f = DP(hydrophilic) / DP(hydrophobic)',
    impact: 'Controls micelle formation, LCST, and glycan accessibility. f < 0.5: inverse micelles, f > 2: extended chains',
    mlRelevance: 'Key predictor for LCST (R² = 0.82) and self-assembly behavior',
    unit: 'dimensionless'
  },
  {
    id: 'armNumber',
    name: 'Arm Number',
    symbol: 'n_arms',
    description: 'Number of polymer arms in star or miktoarm architectures',
    range: { min: 3, max: 32, typical: '4-8' },
    impact: 'Higher arm number increases local glycan density and steric crowding',
    mlRelevance: 'Influences binding cooperativity (Hill coefficient n = 1.2-3.5)',
    unit: 'integer'
  },
  {
    id: 'graftingDensity',
    name: 'Grafting Density',
    symbol: 'σ',
    description: 'Number of side chains per unit length in bottlebrush polymers',
    range: { min: 0.1, max: 1.0, typical: '0.3-0.7' },
    calculation: 'σ = (number of grafts) / (backbone DP)',
    impact: 'High σ (>0.5) creates dense glycan shell, maximizing avidity but reducing flexibility',
    mlRelevance: 'Critical for bottlebrush architectures, correlates with KD (R² = 0.68)',
    unit: 'chains/monomer'
  }
];

export const glycanDescriptors = [
  {
    id: 'sugarType',
    name: 'Sugar Type',
    symbol: 'S',
    description: 'Chemical identity of the carbohydrate ligand conjugated to the polymer',
    values: [
      { value: 'mannose', label: 'D-Mannose', lectins: ['Con A', 'DC-SIGN', 'MBL'], affinity: 'High (μM-mM)' },
      { value: 'glucose', label: 'D-Glucose', lectins: ['Con A'], affinity: 'Moderate (mM)' },
      { value: 'galactose', label: 'D-Galactose', lectins: ['PNA', 'Galectin-1/3'], affinity: 'High (μM)' },
      { value: 'fucose', label: 'L-Fucose', lectins: ['DC-SIGN', 'Siglecs'], affinity: 'Moderate-High (μM)' },
      { value: 'xylose', label: 'D-Xylose', lectins: ['Novel targets'], affinity: 'To be determined' },
      { value: 'sulfogalactose', label: '3-O-Sulfogalactose', lectins: ['Siglec-7'], affinity: 'High (nM-μM)' },
      { value: 'lacnac', label: 'N-Acetyllactosamine', lectins: ['Galectin-1/3'], affinity: 'Very High (nM)' },
      { value: 'disialic', label: 'α(2,8)-Disialic Acid', lectins: ['Siglec-7/9'], affinity: 'Very High (nM)' }
    ],
    mlRelevance: 'Primary determinant of lectin selectivity, encoded as one-hot vector in ML models',
    unit: 'categorical'
  },
  {
    id: 'glycanDensity',
    name: 'Glycan Density',
    symbol: 'ρ_glycan',
    description: 'Mole fraction of sugar-bearing monomers in the polymer',
    range: { min: 0, max: 1.0, typical: '0.05-0.50' },
    calculation: 'ρ_glycan = (moles of glycomonomer) / (total moles of monomer)',
    impact: 'Optimal density balances multivalency (high ρ) with polymer solubility and flexibility (low ρ)',
    sweetSpot: '0.10-0.30 for most lectins; 0.40-0.60 for high-avidity targets',
    mlRelevance: 'Strongest single predictor of binding affinity (feature importance: 32%)',
    unit: 'mole fraction'
  },
  {
    id: 'linkerLength',
    name: 'Linker Length',
    symbol: 'L_linker',
    description: 'Number of atoms in the spacer between polymer backbone and sugar moiety',
    range: { min: 2, max: 24, typical: '6-12' },
    impact: 'Short linkers (<6 atoms): restricted mobility, reduced binding. Long linkers (>12): enhanced flexibility, potential entanglement',
    optimal: '8-10 atoms for triazole-based linkers (CuAAC click chemistry)',
    mlRelevance: 'Moderate correlation with KD (R² = 0.45), interacts with glycan density',
    unit: 'atoms'
  },
  {
    id: 'anomericConfig',
    name: 'Anomeric Configuration',
    symbol: 'α/β',
    description: 'Stereochemistry at the anomeric carbon (C1) of the sugar',
    values: [
      { value: 'alpha', label: 'α-anomer', lectins: ['Con A (α-Man)', 'DC-SIGN (α-Man)'], specificity: 'High' },
      { value: 'beta', label: 'β-anomer', lectins: ['Galectins (β-Gal)', 'PNA (β-Gal)'], specificity: 'High' },
      { value: 'mixed', label: 'α/β mixture', lectins: 'Variable', specificity: 'Reduced' }
    ],
    impact: 'Critical for lectin recognition; α/β selectivity can differ by 10-100× in binding affinity',
    mlRelevance: 'Encoded as binary feature, significant for α-specific (Con A) vs β-specific (Galectins) lectins',
    unit: 'categorical'
  }
];

export const physicochemicalDescriptors = [
  {
    id: 'mn',
    name: 'Number-Average Molecular Weight',
    symbol: 'M_n',
    description: 'Average molecular weight calculated from the number of molecules of each size',
    range: { min: 5000, max: 500000, typical: '10,000-50,000 Da' },
    calculation: 'M_n = Σ(N_i × M_i) / Σ(N_i)',
    measurement: 'Size-exclusion chromatography (SEC/GPC) with RI or MALS detection',
    impact: 'Determines hydrodynamic radius, renal clearance (threshold ~40 kDa), and biodistribution',
    mlRelevance: 'Strong predictor of micelle size (R² = 0.79) and LCST (R² = 0.65)',
    unit: 'Da or g/mol'
  },
  {
    id: 'mw',
    name: 'Weight-Average Molecular Weight',
    symbol: 'M_w',
    description: 'Average molecular weight weighted by the mass of each fraction',
    range: { min: 6000, max: 600000, typical: '12,000-60,000 Da' },
    calculation: 'M_w = Σ(N_i × M_i²) / Σ(N_i × M_i)',
    relationship: 'M_w ≥ M_n; M_w = M_n only for monodisperse polymers',
    mlRelevance: 'Used to calculate dispersity (Đ = M_w / M_n)',
    unit: 'Da or g/mol'
  },
  {
    id: 'pdi',
    name: 'Polydispersity Index (Dispersity)',
    symbol: 'Đ (or PDI)',
    description: 'Measure of molecular weight distribution breadth',
    range: { min: 1.0, max: 3.0, typical: '1.05-1.30 for LCROP' },
    calculation: 'Đ = M_w / M_n',
    interpretation: 'Đ = 1.0: monodisperse, Đ = 1.1-1.3: narrow, Đ > 1.5: broad, Đ > 2.0: very broad',
    impact: 'Low Đ (<1.2) ensures reproducible binding and pharmacokinetics; high Đ complicates structure-activity relationships',
    mlRelevance: 'Quality control parameter; Đ > 1.5 excluded from training datasets',
    unit: 'dimensionless'
  },
  {
    id: 'lcst',
    name: 'Lower Critical Solution Temperature',
    symbol: 'LCST or T_cp',
    description: 'Temperature at which polymer undergoes phase transition from soluble to insoluble',
    range: { min: 15, max: 90, typical: '25-70°C' },
    measurement: 'Turbidimetry (absorbance at 500-600 nm vs temperature)',
    tuning: 'LCST ↑ with hydrophilic content, glycan density, ionic strength. LCST ↓ with hydrophobic content, molecular weight',
    applications: 'Thermoresponsive drug release (LCST = 37-42°C), temperature-triggered binding',
    mlRelevance: 'Primary target variable for ML prediction (RMSE = 1.8°C, R² = 0.89)',
    unit: '°C'
  },
  {
    id: 'rh',
    name: 'Hydrodynamic Radius',
    symbol: 'R_h',
    description: 'Effective radius of the polymer coil or micelle in solution',
    range: { min: 2, max: 200, typical: '5-50 nm' },
    measurement: 'Dynamic light scattering (DLS) using Stokes-Einstein equation',
    calculation: 'R_h = k_B T / (6πηD), where D is diffusion coefficient',
    impact: 'R_h < 10 nm: renal clearance, R_h = 10-100 nm: EPR effect for tumors, R_h > 200 nm: RES uptake',
    mlRelevance: 'Secondary target variable (MAE = 8.5 nm, R² = 0.87)',
    unit: 'nm'
  },
  {
    id: 'zetaPotential',
    name: 'Zeta Potential',
    symbol: 'ζ',
    description: 'Electric potential at the slipping plane of the polymer-solvent interface',
    range: { min: -50, max: 50, typical: '-30 to +30 mV' },
    measurement: 'Electrophoretic light scattering (ELS)',
    interpretation: '|ζ| > 30 mV: stable dispersion, |ζ| < 15 mV: aggregation risk',
    impact: 'Influences protein adsorption, cell uptake, and colloidal stability',
    mlRelevance: 'Correlates with lectin binding for charged sugars (e.g., sulfogalactose, sialic acid)',
    unit: 'mV'
  }
];

export const assayConditions = [
  {
    id: 'buffer',
    name: 'Buffer System',
    symbol: 'Buffer',
    description: 'Aqueous solution maintaining pH and ionic strength during binding assays',
    common: [
      { value: 'pbs', label: 'PBS (Phosphate-Buffered Saline)', composition: '137 mM NaCl, 2.7 mM KCl, 10 mM phosphate, pH 7.4' },
      { value: 'hepes', label: 'HEPES', composition: '10-50 mM HEPES, pH 7.0-7.5, with NaCl' },
      { value: 'tris', label: 'Tris-HCl', composition: '20-50 mM Tris-HCl, pH 7.0-8.0' },
      { value: 'carbonate', label: 'Carbonate', composition: '50 mM Na₂CO₃/NaHCO₃, pH 9.6 (for ELISA coating)' }
    ],
    considerations: 'Must match lectin requirements (e.g., Ca²⁺/Mn²⁺ for C-type lectins)',
    mlRelevance: 'Standardized to PBS for ML training; pH and ionic strength as secondary features',
    unit: 'categorical'
  },
  {
    id: 'ph',
    name: 'pH',
    symbol: 'pH',
    description: 'Negative logarithm of hydrogen ion concentration',
    range: { min: 4.0, max: 9.0, typical: '7.0-7.4' },
    impact: 'pH affects lectin conformation, sugar protonation (e.g., sialic acid pKa ~2.6), and polymer ionization',
    lectinOptima: 'Con A: pH 7.0-7.5, Galectins: pH 7.0-7.5, DC-SIGN: pH 7.0-8.0',
    mlRelevance: 'Included as continuous feature for pH-responsive polymers',
    unit: 'dimensionless'
  },
  {
    id: 'ionicStrength',
    name: 'Ionic Strength',
    symbol: 'I',
    description: 'Measure of total ion concentration in solution',
    range: { min: 0, max: 1.0, typical: '0.01-0.15 M' },
    calculation: 'I = 0.5 × Σ(c_i × z_i²), where c_i is concentration and z_i is charge',
    impact: 'High I screens electrostatic interactions, reduces LCST, affects charged sugar binding',
    typical: 'PBS: I = 0.163 M, Physiological: I = 0.15-0.16 M',
    mlRelevance: 'Moderate correlation with KD for charged glycans (R² = 0.38)',
    unit: 'M (molar)'
  },
  {
    id: 'temperature',
    name: 'Temperature',
    symbol: 'T',
    description: 'Absolute temperature of the assay',
    range: { min: 4, max: 45, typical: '20-37°C' },
    standardConditions: 'SPR: 25°C, Cell assays: 37°C, Fluorescence: 20-25°C',
    impact: 'T affects polymer conformation (LCST), binding kinetics (Arrhenius), and lectin stability',
    mlRelevance: 'Critical for thermoresponsive polymers; T relative to LCST is key feature',
    unit: '°C or K'
  },
  {
    id: 'metalIons',
    name: 'Metal Ion Cofactors',
    symbol: '[M²⁺]',
    description: 'Divalent cations required for lectin activity',
    required: [
      { lectin: 'Con A', ions: 'Ca²⁺ (1 mM), Mn²⁺ (1 mM)', role: 'Structural stability and carbohydrate binding' },
      { lectin: 'DC-SIGN', ions: 'Ca²⁺ (2-5 mM)', role: 'CRD function' },
      { lectin: 'MBL', ions: 'Ca²⁺ (2-5 mM)', role: 'C-type lectin domain activity' },
      { lectin: 'Galectins', ions: 'None', role: 'S-type lectins, no metal requirement' },
      { lectin: 'Siglecs', ions: 'None', role: 'I-type lectins, no metal requirement' }
    ],
    mlRelevance: 'Binary feature (metal-dependent vs independent) for lectin-specific models',
    unit: 'mM'
  }
];

export const computedDescriptors = [
  {
    id: 'avidity',
    name: 'Avidity Enhancement Factor',
    symbol: 'α',
    description: 'Ratio of multivalent polymer KD to monovalent sugar KD',
    calculation: 'α = KD(monovalent) / KD(polymer)',
    range: { min: 1, max: 1000000, typical: '10²-10⁵' },
    interpretation: 'α = 1: no enhancement, α = 10²-10³: moderate, α = 10⁴-10⁶: strong multivalency',
    mlRelevance: 'Target variable for avidity prediction models',
    unit: 'fold enhancement'
  },
  {
    id: 'hillCoefficient',
    name: 'Hill Coefficient',
    symbol: 'n_H',
    description: 'Measure of binding cooperativity from dose-response curves',
    calculation: 'Fit to Hill equation: θ = [L]^n_H / (KD^n_H + [L]^n_H)',
    range: { min: 0.5, max: 4.0, typical: '1.0-2.5' },
    interpretation: 'n_H = 1: non-cooperative, n_H > 1: positive cooperativity, n_H < 1: negative cooperativity',
    mlRelevance: 'Indicates binding mechanism; correlates with architecture (bottlebrush: n_H = 2-3)',
    unit: 'dimensionless'
  },
  {
    id: 'effectiveMolarity',
    name: 'Effective Molarity',
    symbol: 'EM',
    description: 'Local concentration of sugar ligands experienced by lectin',
    calculation: 'EM = (number of sugars per polymer) / (4/3 × π × R_h³ × N_A)',
    range: { min: 0.001, max: 10, typical: '0.01-1.0 M' },
    impact: 'High EM (>0.1 M) drives multivalent binding; EM depends on glycan density and R_h',
    mlRelevance: 'Composite descriptor combining multiple features for avidity prediction',
    unit: 'M (molar)'
  }
];

export const descriptorCategories = [
  {
    category: 'Architectural Descriptors',
    icon: '🏗️',
    descriptors: architecturalDescriptors,
    importance: 'Define polymer topology and spatial arrangement of glycan ligands',
    mlWeight: '28%'
  },
  {
    category: 'Glycan Descriptors',
    icon: '🍬',
    descriptors: glycanDescriptors,
    importance: 'Determine lectin specificity and binding affinity',
    mlWeight: '42%'
  },
  {
    category: 'Physicochemical Descriptors',
    icon: '⚗️',
    descriptors: physicochemicalDescriptors,
    importance: 'Control solution behavior, self-assembly, and stimuli-responsiveness',
    mlWeight: '18%'
  },
  {
    category: 'Assay Conditions',
    icon: '🧪',
    descriptors: assayConditions,
    importance: 'Standardize experimental conditions for reproducible measurements',
    mlWeight: '12%'
  }
];

export const mlFeatureImportance = [
  { feature: 'Glycan Density (ρ_glycan)', importance: 0.32, category: 'Glycan' },
  { feature: 'Hydrophobic Block Length', importance: 0.28, category: 'Architectural' },
  { feature: 'Sugar Type (one-hot)', importance: 0.18, category: 'Glycan' },
  { feature: 'Total Molecular Weight (M_n)', importance: 0.12, category: 'Physicochemical' },
  { feature: 'Block Length Ratio (f)', importance: 0.10, category: 'Architectural' },
  { feature: 'Topology (encoded)', importance: 0.08, category: 'Architectural' },
  { feature: 'Temperature (T - LCST)', importance: 0.06, category: 'Assay' },
  { feature: 'Linker Length (L_linker)', importance: 0.05, category: 'Glycan' },
  { feature: 'Ionic Strength (I)', importance: 0.04, category: 'Assay' },
  { feature: 'Dispersity (Đ)', importance: 0.03, category: 'Physicochemical' }
];

export default {
  architecturalDescriptors,
  glycanDescriptors,
  physicochemicalDescriptors,
  assayConditions,
  computedDescriptors,
  descriptorCategories,
  mlFeatureImportance
};
