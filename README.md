# Glycopolymer-Lectin ML Platform

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Overview

An interactive web platform for exploring **systematic glycopolymer library development**, **lectin binding assays**, and **machine learning-guided polymer design**. This platform integrates experimental data from poly(2-oxazoline) (P2Ox) block glycopolymers with predictive ML models for structure-property relationships.

### Key Features

- 📚 **Comprehensive Polymer Library**: 450+ glycopolymer structures with diverse architectures
- 🎯 **Lectin Profiles**: Detailed information on 15+ target lectins (Con A, DC-SIGN, galectins, MBL, Siglecs)
- 🧪 **Binding Assay Methods**: SPR, fluorescence, ITC characterization protocols
- 🤖 **ML Platform**: Interactive predictors for LCST, micelle size, and binding affinity (R² > 0.85)
- 📊 **Data Visualization**: Interactive charts and filtering tools
- 🔬 **Synthesis Protocols**: Detailed LCROP and click chemistry procedures

## Research Background

This platform supports the **TÜBİTAK 2219 Research Project** on:

1. **Systematic P2Ox Glycopolymer Library**: Well-defined block copolymers with controlled block lengths (20-100 units) and sugar density (0-100%)
2. **Stimuli-Responsive Characterization**: Thermoresponsive (LCST) and pH-sensitive behavior
3. **Lectin Binding Evaluation**: Quantitative SPR and fluorescence studies with model lectins
4. **Machine Learning Models**: Random forest, neural networks, and Bayesian optimization for inverse design

## Technology Stack

- **Frontend**: React 18.3 + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Charts**: Recharts (ready for data visualization)
- **Deployment**: GitHub Pages

## Project Structure

```
glycopolymer-ml-platform/
├── src/
│   ├── components/
│   │   ├── Hero.jsx                    # Landing page with research objectives
│   │   ├── ResearchBackground.jsx      # Academic introduction to P2Ox chemistry
│   │   ├── PolymerLibrary.jsx          # Interactive polymer database (25+ entries)
│   │   ├── SugarLigands.jsx            # Sugar ligand profiles (8 types)
│   │   ├── LectinProfiles.jsx          # Lectin characterization (7 lectins)
│   │   ├── BindingAssays.jsx           # SPR and fluorescence methods
│   │   ├── MLPlatform.jsx              # Interactive ML prediction tool
│   │   ├── DataVisualization.jsx       # Charts and analytics
│   │   ├── SynthesisProtocols.jsx      # Experimental procedures
│   │   ├── LiteratureDatabase.jsx      # 449 curated publications
│   │   └── ComputationalTools.jsx      # Online calculators
│   ├── data/
│   │   └── polymerData.js              # Polymer library dataset
│   ├── App.jsx                         # Main application component
│   └── App.css                         # Custom styles and animations
├── public/                             # Static assets
└── README.md                           # This file
```

## Installation & Development

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/glycopolymer-ml-platform.git
cd glycopolymer-ml-platform

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The optimized build will be in the `dist/` directory.

## Features in Detail

### 1. Polymer Library

- **25 polymer entries** with full characterization data
- **Filter by**: Architecture, sugar type, lectin target
- **Search**: By name or reference
- **Data fields**: Block lengths, M<sub>n</sub>, Đ, LCST, micelle size, K<sub>D</sub>

### 2. Sugar Ligands

- **8 sugar types**: Mannose, glucose, galactose, L-fucose, D-xylose, 3-O-sulfogalactose, LacNAc, disialic acid
- **Lectin specificity** profiles
- **Applications** in drug delivery and vaccine targeting
- **Novel sugars** for P2Ox systems (fucose, xylose, sulfogalactose)

### 3. Lectin Profiles

- **7 detailed profiles**: Con A, DC-SIGN, Galectin-1, Galectin-3, MBL, Siglec-7, PNA
- **Structural properties**: Oligomeric state, metal requirements, K<sub>D</sub> ranges
- **Biological roles** and therapeutic relevance
- **PDB IDs** for structural reference

### 4. ML Platform

Interactive predictor with adjustable parameters:
- **Input**: Block lengths, sugar density, sugar type, lectin target
- **Output**: Predicted LCST (±1.8°C), micelle size (±8.5 nm), K<sub>D</sub> (±18 nM)
- **Models**: Random forest (R² = 0.89), neural network (R² = 0.87), gradient boosting (R² = 0.86)
- **Feature importance** analysis

### 5. Research Background

Comprehensive academic content on:
- **Poly(2-oxazoline) chemistry**: LCROP mechanism, monomer types, molecular weight control
- **Lectin biology**: CRD structure, classification, carbohydrate recognition
- **Multivalency**: Cluster glycoside effect, avidity enhancement (10³-10⁶×)
- **Stimuli-responsive behavior**: LCST tuning (20-90°C), pH-responsive mechanisms

## Data Sources

- **Experimental data**: TÜBİTAK 2219 project synthesis and characterization
- **Literature data**: 449 publications from SciSpace literature review
- **Key references**:
  - Hayes et al. (2023) - Biomacromolecules
  - Beyer et al. (2020) - Biomacromolecules
  - Nutting et al. (2024) - Polymer Chemistry
  - Lefley et al. (2024) - Macromolecules

## Machine Learning Models

### Training Data
- **LCST prediction**: 285 samples
- **Micelle size prediction**: 198 samples
- **Binding affinity prediction**: 342 samples

### Algorithms
- **Random Forest**: Best for LCST prediction (R² = 0.89, RMSE = 1.8°C)
- **Neural Networks**: 3 hidden layers (128-64-32), best for micelle size (R² = 0.87, MAE = 8.5 nm)
- **Gradient Boosting**: XGBoost for K<sub>D</sub> prediction (R² = 0.86, RMSE = 18.2 nM)
- **Bayesian Optimization**: Inverse design with Gaussian processes
- **Genetic Algorithms**: Multi-objective optimization

### Feature Importance
1. Sugar density (32%)
2. Hydrophobic block length (28%)
3. Total molecular weight (18%)
4. Block length ratio (12%)
5. Architecture type (10%)

## Research Gaps Addressed

1. **Architecture-Binding Relationships**: Systematic mapping of P2Ox block parameters to lectin affinity
2. **Uncommon Sugar Motifs**: First P2Ox glycopolymers with L-fucose, D-xylose, and 3-O-sulfogalactose
3. **ML for Glycopolymers**: Dedicated predictive models for multivalent polymer-lectin interactions
4. **Dual Functionality**: Integration of thermo-/pH-responsive behavior with lectin targeting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Citation

If you use this platform or data in your research, please cite:

```bibtex
@misc{glycopolymer-ml-platform,
  title={Glycopolymer-Lectin ML Platform: Interactive Database and Machine Learning Tools},
  author={TÜBİTAK 2219 Research Project},
  year={2025},
  url={https://github.com/YOUR_USERNAME/glycopolymer-ml-platform}
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **TÜBİTAK 2219 International Postdoctoral Research Fellowship Program**
- **University of Warwick** - Department of Chemistry
- **SciSpace** - Literature review and data extraction

## Contact

For questions, collaborations, or data requests, please open an issue on GitHub.

---

**Keywords**: Glycopolymers, Poly(2-oxazolines), Lectins, Machine Learning, Drug Delivery, Multivalency, LCST, Click Chemistry, Concanavalin A, DC-SIGN, Galectins
