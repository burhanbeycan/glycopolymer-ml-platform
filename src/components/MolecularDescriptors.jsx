import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { BarChart3, Beaker, Building2, Candy, FlaskConical, TrendingUp } from 'lucide-react';
import {
  architecturalDescriptors,
  glycanDescriptors,
  physicochemicalDescriptors,
  assayConditions,
  computedDescriptors,
  descriptorCategories,
  mlFeatureImportance
} from '../data/molecularDescriptors';

export default function MolecularDescriptors() {
  const [selectedCategory, setSelectedCategory] = useState('architectural');

  const categoryIcons = {
    architectural: <Building2 className="w-5 h-5" />,
    glycan: <Candy className="w-5 h-5" />,
    physicochemical: <Beaker className="w-5 h-5" />,
    assay: <FlaskConical className="w-5 h-5" />,
    computed: <TrendingUp className="w-5 h-5" />
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <BarChart3 className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold">Molecular Descriptors</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive characterization parameters for glycopolymer-lectin interactions, 
          enabling quantitative structure-activity relationships (QSAR) and machine learning predictions
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {descriptorCategories.map((cat, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-2xl">{cat.icon}</span>
                {cat.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{cat.importance}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">ML Weight:</span>
                  <Badge variant="secondary">{cat.mlWeight}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {cat.descriptors.length} descriptors
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="architectural" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="architectural">Architectural</TabsTrigger>
          <TabsTrigger value="glycan">Glycan</TabsTrigger>
          <TabsTrigger value="physicochemical">Physicochemical</TabsTrigger>
          <TabsTrigger value="assay">Assay Conditions</TabsTrigger>
          <TabsTrigger value="computed">Computed</TabsTrigger>
        </TabsList>

        {/* Architectural Descriptors */}
        <TabsContent value="architectural" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Architectural Descriptors
              </CardTitle>
              <CardDescription>
                Parameters defining polymer topology and spatial arrangement of glycan ligands
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {architecturalDescriptors.map((desc, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{desc.name}</h3>
                      <p className="text-sm text-muted-foreground">Symbol: {desc.symbol}</p>
                    </div>
                    <Badge>{desc.unit}</Badge>
                  </div>
                  
                  <p className="text-sm leading-relaxed">{desc.description}</p>
                  
                  {desc.range && (
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Range:</p>
                      <p className="text-sm">
                        Min: {desc.range.min} | Max: {desc.range.max} | Typical: {desc.range.typical}
                      </p>
                    </div>
                  )}
                  
                  {desc.values && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Values:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {desc.values.map((val, vidx) => (
                          <div key={vidx} className="bg-muted p-2 rounded text-sm">
                            <span className="font-medium">{val.label}:</span> {val.impact}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {desc.calculation && (
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Calculation:</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">{desc.calculation}</p>
                    </div>
                  )}
                  
                  {desc.impact && (
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Impact:</p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">{desc.impact}</p>
                    </div>
                  )}
                  
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">ML Relevance:</p>
                    <p className="text-sm text-green-800 dark:text-green-200">{desc.mlRelevance}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Glycan Descriptors */}
        <TabsContent value="glycan" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Candy className="w-6 h-6" />
                Glycan Descriptors
              </CardTitle>
              <CardDescription>
                Parameters determining lectin specificity and binding affinity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {glycanDescriptors.map((desc, idx) => (
                <div key={idx} className="border-l-4 border-pink-500 pl-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{desc.name}</h3>
                      <p className="text-sm text-muted-foreground">Symbol: {desc.symbol}</p>
                    </div>
                    <Badge variant="secondary">{desc.unit}</Badge>
                  </div>
                  
                  <p className="text-sm leading-relaxed">{desc.description}</p>
                  
                  {desc.range && (
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Range:</p>
                      <p className="text-sm">
                        Min: {desc.range.min} | Max: {desc.range.max} | Typical: {desc.range.typical}
                      </p>
                    </div>
                  )}
                  
                  {desc.values && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Sugar Types:</p>
                      <div className="space-y-2">
                        {desc.values.map((val, vidx) => (
                          <div key={vidx} className="bg-muted p-3 rounded">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">{val.label}</span>
                              <Badge variant="outline">{val.affinity}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Lectins: {Array.isArray(val.lectins) ? val.lectins.join(', ') : val.lectins}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {desc.calculation && (
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Calculation:</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">{desc.calculation}</p>
                    </div>
                  )}
                  
                  {desc.impact && (
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Impact:</p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">{desc.impact}</p>
                    </div>
                  )}
                  
                  {desc.sweetSpot && (
                    <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Sweet Spot:</p>
                      <p className="text-sm text-purple-800 dark:text-purple-200">{desc.sweetSpot}</p>
                    </div>
                  )}
                  
                  {desc.optimal && (
                    <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Optimal:</p>
                      <p className="text-sm text-purple-800 dark:text-purple-200">{desc.optimal}</p>
                    </div>
                  )}
                  
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">ML Relevance:</p>
                    <p className="text-sm text-green-800 dark:text-green-200">{desc.mlRelevance}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Physicochemical Descriptors */}
        <TabsContent value="physicochemical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="w-6 h-6" />
                Physicochemical Descriptors
              </CardTitle>
              <CardDescription>
                Parameters controlling solution behavior, self-assembly, and stimuli-responsiveness
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {physicochemicalDescriptors.map((desc, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{desc.name}</h3>
                      <p className="text-sm text-muted-foreground">Symbol: {desc.symbol}</p>
                    </div>
                    <Badge variant="secondary">{desc.unit}</Badge>
                  </div>
                  
                  <p className="text-sm leading-relaxed">{desc.description}</p>
                  
                  {desc.range && (
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Range:</p>
                      <p className="text-sm">
                        Min: {desc.range.min} | Max: {desc.range.max} | Typical: {desc.range.typical}
                      </p>
                    </div>
                  )}
                  
                  {desc.calculation && (
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Calculation:</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">{desc.calculation}</p>
                    </div>
                  )}
                  
                  {desc.measurement && (
                    <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Measurement:</p>
                      <p className="text-sm text-indigo-800 dark:text-indigo-200">{desc.measurement}</p>
                    </div>
                  )}
                  
                  {desc.interpretation && (
                    <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Interpretation:</p>
                      <p className="text-sm text-purple-800 dark:text-purple-200">{desc.interpretation}</p>
                    </div>
                  )}
                  
                  {desc.tuning && (
                    <div className="bg-cyan-50 dark:bg-cyan-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-cyan-900 dark:text-cyan-100">Tuning:</p>
                      <p className="text-sm text-cyan-800 dark:text-cyan-200">{desc.tuning}</p>
                    </div>
                  )}
                  
                  {desc.applications && (
                    <div className="bg-teal-50 dark:bg-teal-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-teal-900 dark:text-teal-100">Applications:</p>
                      <p className="text-sm text-teal-800 dark:text-teal-200">{desc.applications}</p>
                    </div>
                  )}
                  
                  {desc.impact && (
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Impact:</p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">{desc.impact}</p>
                    </div>
                  )}
                  
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">ML Relevance:</p>
                    <p className="text-sm text-green-800 dark:text-green-200">{desc.mlRelevance}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Assay Conditions */}
        <TabsContent value="assay" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FlaskConical className="w-6 h-6" />
                Assay Conditions
              </CardTitle>
              <CardDescription>
                Standardized experimental conditions for reproducible measurements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {assayConditions.map((desc, idx) => (
                <div key={idx} className="border-l-4 border-orange-500 pl-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{desc.name}</h3>
                      <p className="text-sm text-muted-foreground">Symbol: {desc.symbol}</p>
                    </div>
                    <Badge variant="secondary">{desc.unit}</Badge>
                  </div>
                  
                  <p className="text-sm leading-relaxed">{desc.description}</p>
                  
                  {desc.range && (
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Range:</p>
                      <p className="text-sm">
                        Min: {desc.range.min} | Max: {desc.range.max} | Typical: {desc.range.typical}
                      </p>
                    </div>
                  )}
                  
                  {desc.common && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Common Buffer Systems:</p>
                      <div className="space-y-2">
                        {desc.common.map((buf, bidx) => (
                          <div key={bidx} className="bg-muted p-3 rounded">
                            <p className="font-medium text-sm">{buf.label}</p>
                            <p className="text-xs text-muted-foreground mt-1">{buf.composition}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {desc.required && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Metal Ion Requirements:</p>
                      <div className="space-y-2">
                        {desc.required.map((req, ridx) => (
                          <div key={ridx} className="bg-muted p-3 rounded">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">{req.lectin}</span>
                              <Badge variant="outline">{req.ions}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{req.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {desc.calculation && (
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Calculation:</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">{desc.calculation}</p>
                    </div>
                  )}
                  
                  {desc.impact && (
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Impact:</p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">{desc.impact}</p>
                    </div>
                  )}
                  
                  {desc.standardConditions && (
                    <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Standard Conditions:</p>
                      <p className="text-sm text-indigo-800 dark:text-indigo-200">{desc.standardConditions}</p>
                    </div>
                  )}
                  
                  {desc.lectinOptima && (
                    <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Lectin Optima:</p>
                      <p className="text-sm text-purple-800 dark:text-purple-200">{desc.lectinOptima}</p>
                    </div>
                  )}
                  
                  {desc.typical && (
                    <div className="bg-cyan-50 dark:bg-cyan-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-cyan-900 dark:text-cyan-100">Typical Values:</p>
                      <p className="text-sm text-cyan-800 dark:text-cyan-200">{desc.typical}</p>
                    </div>
                  )}
                  
                  {desc.considerations && (
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Considerations:</p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">{desc.considerations}</p>
                    </div>
                  )}
                  
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">ML Relevance:</p>
                    <p className="text-sm text-green-800 dark:text-green-200">{desc.mlRelevance}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Computed Descriptors */}
        <TabsContent value="computed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Computed Descriptors
              </CardTitle>
              <CardDescription>
                Derived parameters from experimental measurements and theoretical models
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {computedDescriptors.map((desc, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{desc.name}</h3>
                      <p className="text-sm text-muted-foreground">Symbol: {desc.symbol}</p>
                    </div>
                    <Badge variant="secondary">{desc.unit}</Badge>
                  </div>
                  
                  <p className="text-sm leading-relaxed">{desc.description}</p>
                  
                  {desc.calculation && (
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Calculation:</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">{desc.calculation}</p>
                    </div>
                  )}
                  
                  {desc.range && (
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Range:</p>
                      <p className="text-sm">
                        Min: {desc.range.min} | Max: {desc.range.max} | Typical: {desc.range.typical}
                      </p>
                    </div>
                  )}
                  
                  {desc.interpretation && (
                    <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Interpretation:</p>
                      <p className="text-sm text-purple-800 dark:text-purple-200">{desc.interpretation}</p>
                    </div>
                  )}
                  
                  {desc.impact && (
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-md">
                      <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Impact:</p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">{desc.impact}</p>
                    </div>
                  )}
                  
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">ML Relevance:</p>
                    <p className="text-sm text-green-800 dark:text-green-200">{desc.mlRelevance}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* ML Feature Importance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Machine Learning Feature Importance
          </CardTitle>
          <CardDescription>
            Relative contribution of each descriptor to ML model predictions (Random Forest analysis)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mlFeatureImportance.map((feature, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{feature.feature}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{feature.category}</Badge>
                    <span className="font-semibold">{(feature.importance * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                    style={{ width: `${feature.importance * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
              <strong>Interpretation:</strong> Glycan density (32%) and hydrophobic block length (28%) 
              are the most influential parameters for predicting binding affinity. Sugar type (18%) 
              determines lectin selectivity. Architectural features collectively account for 46% of 
              predictive power, highlighting the importance of polymer design in multivalent interactions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>Descriptor Integration in ML Models</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            The comprehensive molecular descriptor framework enables quantitative structure-activity 
            relationship (QSAR) modeling for glycopolymer-lectin interactions. By encoding architectural, 
            glycan, physicochemical, and assay parameters as numerical features, machine learning algorithms 
            can predict binding affinity (K<sub>D</sub>), LCST, and micelle size with high accuracy 
            (R² &gt; 0.85).
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Feature Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Categorical descriptors (topology, sugar type) are one-hot encoded. 
                Continuous descriptors are standardized (z-score normalization).
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Model Training</h4>
              <p className="text-sm text-muted-foreground">
                Random Forest, Neural Networks, and Gradient Boosting trained on 
                285-342 samples with 10-fold cross-validation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Inverse Design</h4>
              <p className="text-sm text-muted-foreground">
                Bayesian optimization and genetic algorithms use descriptors to 
                recommend optimal polymer candidates for target properties.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
