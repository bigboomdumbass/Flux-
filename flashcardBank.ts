import { Flashcard } from '../types';

export const FLASHCARD_BANK: Flashcard[] = [
  // --- PHYSICS FLASHCARDS ---
  {
    id: 'fc-phy-01',
    subject: 'Physics',
    topic: 'Kinematics & Motion',
    frontTitle: 'Uniform Acceleration Relations',
    frontContent: 'What are the 3 fundamental kinematic equations for 1D motion under constant acceleration?',
    formula: 'v = u + at | s = ut + ½at² | v² = u² + 2as',
    backDefinition: 'Governs linear kinematics when acceleration \'a\' is strictly constant over time \'t\'.',
    backKeyPoints: [
      'u = initial velocity, v = final velocity',
      's = displacement (vector quantity, not necessarily total path length)',
      'For displacement in the n-th second: s_nth = u + (a/2)(2n - 1)',
      'Cannot be directly applied if acceleration varies with time or position (use calculus instead)'
    ],
    backExampleOrApplication: 'Example: Free-fall from rest (u=0, a=g) simplifies to s = ½gt² and v = √(2gs).'
  },
  {
    id: 'fc-phy-02',
    subject: 'Physics',
    topic: 'Laws of Motion & Friction',
    frontTitle: 'Newton\'s Second Law & Momentum',
    frontContent: 'How is force formally defined in terms of linear momentum, and what does impulse represent?',
    formula: 'F_net = dp/dt = d(mv)/dt | J = ∫ F dt = Δp',
    backDefinition: 'The net external force on a system equals the time rate of change of its linear momentum.',
    backKeyPoints: [
      'If mass is constant, F_net = m·a',
      'If mass changes (e.g., rocket propulsion), F_thrust = v_rel · (dm/dt)',
      'Impulse (J) equals area under the Force-Time curve and equals the change in momentum (Δp)',
      'Internal forces cancel in pairs by Newton\'s 3rd law, so only external forces change total momentum'
    ],
    backExampleOrApplication: 'Example: Catching a cricket ball by pulling hands backward extends Δt, reducing the impact force F.'
  },
  {
    id: 'fc-phy-03',
    subject: 'Physics',
    topic: 'Work, Energy & Power',
    frontTitle: 'Work-Energy Theorem',
    frontContent: 'State the Work-Energy Theorem for a particle and its relation to conservative forces.',
    formula: 'W_net = ΔK = ½mv_f² - ½mv_i²',
    backDefinition: 'The net work done by all forces (conservative, non-conservative, and external) acting on a body equals the change in its kinetic energy.',
    backKeyPoints: [
      'W_conservative = -ΔU (negative change in potential energy)',
      'If only conservative forces act: ΔK + ΔU = 0 => Total Mechanical Energy E = K + U is conserved',
      'Work done by friction is non-conservative and dissipates mechanical energy into thermal energy'
    ],
    backExampleOrApplication: 'Example: Roller coaster loop-the-loop minimum speed at the top to complete vertical circle is v_min = √(gR).'
  },
  {
    id: 'fc-phy-04',
    subject: 'Physics',
    topic: 'Gravitation',
    frontTitle: 'Escape Velocity & Orbital Velocity',
    frontContent: 'What are the formulas for escape velocity from Earth and orbital velocity of a low-Earth satellite?',
    formula: 'v_escape = √(2gR) ≈ 11.2 km/s | v_orbital = √(gR) ≈ 7.9 km/s',
    backDefinition: 'Escape velocity is the minimum speed required for an unpowered object to escape the gravitational field of a celestial body permanently.',
    backKeyPoints: [
      'v_escape = √(2GM/R) = √2 · v_orbital',
      'Escape velocity is independent of the mass of the projectile or launch angle (ignoring air resistance)',
      'Gravitational potential at surface is V = -GM/R, which is negative'
    ],
    backExampleOrApplication: 'Example: Moon has no atmosphere because gas molecules\' root-mean-square thermal speed exceeds Moon\'s escape velocity (~2.38 km/s).'
  },
  {
    id: 'fc-phy-05',
    subject: 'Physics',
    topic: 'Thermodynamics & Heat',
    frontTitle: 'First Law of Thermodynamics',
    frontContent: 'State the mathematical formulation of the First Law of Thermodynamics and sign conventions.',
    formula: 'dQ = dU + dW | dW = P dV',
    backDefinition: 'Conservation of energy applied to thermodynamic systems: heat supplied equals increase in internal energy plus work done by the system.',
    backKeyPoints: [
      'dQ > 0 when heat is added to system; dQ < 0 when heat is released',
      'dW > 0 when work is done BY system (expansion); dW < 0 for compression',
      'Internal energy U of an ideal gas depends solely on temperature: dU = n C_v dT',
      'For cyclic processes: ΔU = 0, so total Q = total W'
    ],
    backExampleOrApplication: 'Example: In an isothermal process (T=const), dU = 0, hence all heat absorbed is converted into work (Q = W = nRT ln(V₂/V₁)).'
  },

  // --- CHEMISTRY FLASHCARDS ---
  {
    id: 'fc-chem-01',
    subject: 'Chemistry',
    topic: 'Basic Concepts of Chemistry',
    frontTitle: 'Molarity vs Molality',
    frontContent: 'What is the exact distinction between Molarity (M) and Molality (m)? Which one depends on temperature?',
    formula: 'M = moles of solute / Volume of soln (L) | m = moles of solute / Mass of solvent (kg)',
    backDefinition: 'Two common concentration units: Molarity expresses moles per liter of solution; Molality expresses moles per kilogram of pure solvent.',
    backKeyPoints: [
      'Molarity changes with temperature because liquid volume expands/contracts with temperature changes',
      'Molality is temperature-independent because mass does not vary with temperature',
      'For dilute aqueous solutions, Molarity and Molality are nearly equal since 1 L water ≈ 1 kg'
    ],
    backExampleOrApplication: 'Application: Colligative property formulas (like boiling point elevation ΔT_b = K_b · m) strictly use molality (m).'
  },
  {
    id: 'fc-chem-02',
    subject: 'Chemistry',
    topic: 'Structure of Atom',
    frontTitle: 'Heisenberg Uncertainty Principle',
    frontContent: 'What does Heisenberg\'s Uncertainty Principle state, and what is its mathematical inequality?',
    formula: 'Δx · Δp ≥ h / (4π) or Δx · Δv ≥ h / (4πm)',
    backDefinition: 'It is impossible to simultaneously measure both the exact position and exact momentum of a microscopic particle with infinite precision.',
    backKeyPoints: [
      'Significance is pronounced only for subatomic particles (e.g. electrons) due to extremely small mass m',
      'Rules out the classical concept of fixed planetary circular orbits (Bohr model), leading to quantum orbital probability clouds',
      'Also applies to energy-time: ΔE · Δt ≥ h / (4π)'
    ],
    backExampleOrApplication: 'Application: Explains why electrons cannot exist inside the atomic nucleus.'
  },
  {
    id: 'fc-chem-03',
    subject: 'Chemistry',
    topic: 'Chemical Bonding & Structure',
    frontTitle: 'Hybridization & Molecular Geometry',
    frontContent: 'How do you determine the hybridization of a central atom using the steric number method?',
    formula: 'Steric Number = (Number of bonded atoms) + (Number of lone pairs)',
    backDefinition: 'The mixing of atomic orbitals of comparable energy to form equivalent hybrid orbitals suitable for bonding.',
    backKeyPoints: [
      'SN = 2 => sp (Linear, 180°, e.g., BeCl₂, CO₂)',
      'SN = 3 => sp² (Trigonal planar, 120°, e.g., BF₃; or Bent with 1 LP, e.g., SO₂)',
      'SN = 4 => sp³ (Tetrahedral, 109.5°, e.g., CH₄; Pyramidal with 1 LP, e.g., NH₃; Bent with 2 LP, e.g., H₂O)',
      'SN = 5 => sp³d (Trigonal bipyramidal, e.g., PCl₅)',
      'SN = 6 => sp³d² (Octahedral, e.g., SF₆)'
    ],
    backExampleOrApplication: 'Tip: Multiple bonds (double/triple) count as only ONE bonded atom towards the steric number.'
  },
  {
    id: 'fc-chem-04',
    subject: 'Chemistry',
    topic: 'Thermodynamics & Energetics',
    frontTitle: 'Hess\'s Law of Constant Heat Summation',
    frontContent: 'State Hess\'s Law and how it is utilized in calculating unknown enthalpy of reaction (ΔH).',
    formula: 'ΔH_total = ΔH₁ + ΔH₂ + ΔH₃ + ... = Σ ΔH_products - Σ ΔH_reactants',
    backDefinition: 'The total enthalpy change in a chemical reaction is independent of the pathway or number of steps taken, because enthalpy (H) is a state function.',
    backKeyPoints: [
      'Reversing a chemical equation reverses the algebraic sign of its ΔH',
      'Multiplying stoichiometric coefficients by factor \'n\' multiplies ΔH by \'n\'',
      'Standard enthalpy of formation (ΔH_f°) for elements in their standard reference state is zero (e.g., O₂(g), C(graphite))'
    ],
    backExampleOrApplication: 'Application: Used in Born-Haber cycles to determine lattice energies of ionic crystals like NaCl.'
  },
  {
    id: 'fc-chem-05',
    subject: 'Chemistry',
    topic: 'Organic Chemistry Basics',
    frontTitle: 'Inductive Effect (+I and -I)',
    frontContent: 'What is the inductive effect in organic molecules, and which common groups exhibit +I and -I effects?',
    formula: 'Permanent polarization along σ-bonds due to electronegativity difference',
    backDefinition: 'The permanent displacement of σ-electrons along a carbon chain towards a more electronegative atom or away from an electropositive group.',
    backKeyPoints: [
      '-I effect (Electron-withdrawing): -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH',
      '+I effect (Electron-donating): -O⁻ > -COO⁻ > -C(CH₃)₃ > -CH(CH₃)₂ > -CH₂CH₃ > -CH₃',
      'Decreases rapidly with distance along the carbon chain and becomes negligible past 3 carbon atoms',
      '-I groups stabilize carboxylate anions, increasing carboxylic acid acidity'
    ],
    backExampleOrApplication: 'Example: Trichloroacetic acid (CCl₃COOH) is far more acidic than acetic acid (CH₃COOH) due to 3 strong -I Cl atoms.'
  },

  // --- MATHEMATICS FLASHCARDS ---
  {
    id: 'fc-math-01',
    subject: 'Mathematics',
    topic: 'Trigonometric Functions',
    frontTitle: 'Sum-to-Product Trigonometric Identities',
    frontContent: 'What are the formulas for converting sin(C) + sin(D) and cos(C) - cos(D) into products?',
    formula: 'sin C + sin D = 2 sin((C+D)/2) cos((C-D)/2) | cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2)',
    backDefinition: 'CD-formulas convert sums/differences of sine or cosine into products, vital for solving equations and finding limits.',
    backKeyPoints: [
      'sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2)',
      'cos C + cos D = 2 cos((C+D)/2) cos((C-D)/2)',
      'Notice the negative sign in cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2)',
      'Also remember double angle: sin(2A) = 2 sin A cos A; cos(2A) = cos²A - sin²A = 2cos²A - 1'
    ],
    backExampleOrApplication: 'Application: Used to evaluate limits such as lim (x->0) [ (cos 3x - cos x) / x² ].'
  },
  {
    id: 'fc-math-02',
    subject: 'Mathematics',
    topic: 'Complex Numbers & Quadratics',
    frontTitle: 'Euler\'s Formula & De Moivre\'s Theorem',
    frontContent: 'State Euler\'s formula for complex exponentials and De Moivre\'s Theorem for integer powers.',
    formula: 'e^(iθ) = cos θ + i sin θ | (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)',
    backDefinition: 'Connects trigonometry with complex numbers, representing rotations in the 2D Argand plane.',
    backKeyPoints: [
      'Polar form of complex number: z = r (cos θ + i sin θ) = r e^(iθ), where r = |z| and θ = arg(z)',
      'Euler\'s Identity: e^(iπ) + 1 = 0 unites five fundamental constants (0, 1, e, i, π)',
      'Multiplication in polar form multiplies moduli and adds arguments: z₁ · z₂ = r₁ r₂ e^(i(θ₁+θ₂))'
    ],
    backExampleOrApplication: 'Application: Finding the n-th roots of complex numbers: z^(1/n) = r^(1/n) e^(i(θ+2kπ)/n) for k = 0, 1, ..., n-1.'
  },
  {
    id: 'fc-math-03',
    subject: 'Mathematics',
    topic: 'Sequences & Series',
    frontTitle: 'Arithmetic-Geometric Progressions (AGP)',
    frontContent: 'What is an AGP and how do you find the sum to infinity of an AGP where |r| < 1?',
    formula: 'S_∞ = a/(1 - r) + (d · r)/(1 - r)²',
    backDefinition: 'A sequence formed by multiplying the corresponding terms of an Arithmetic Progression (AP) and a Geometric Progression (GP).',
    backKeyPoints: [
      'General terms: a, (a + d)r, (a + 2d)r², ..., (a + (n-1)d)r^(n-1)',
      'Standard method to sum: Multiply series S by \'r\', shift terms by one position to the right, and subtract (S - rS)',
      'Formula for infinite sum requires common ratio |r| < 1'
    ],
    backExampleOrApplication: 'Example: Sum of 1 + 2/3 + 3/3² + 4/3³ + ... has a=1, d=1, r=1/3. S_∞ = 1/(1 - 1/3) + (1 · 1/3)/(1 - 1/3)² = 3/2 + (1/3)/(4/9) = 3/2 + 3/4 = 9/4.'
  },
  {
    id: 'fc-math-04',
    subject: 'Mathematics',
    topic: 'Limits & Derivatives',
    frontTitle: 'Standard Limit Theorems',
    frontContent: 'What are the 3 most crucial standard limits evaluated as x -> 0 or x -> ∞?',
    formula: 'lim_{x->0} (sin x)/x = 1 | lim_{x->0} (e^x - 1)/x = 1 | lim_{x->0} (1 + x)^(1/x) = e',
    backDefinition: 'Fundamental indeterminate 0/0 and 1^∞ limits upon which differential calculus is constructed.',
    backKeyPoints: [
      'Angle x in (sin x)/x must be in RADIANS, not degrees',
      'lim_{x->0} [ ln(1 + x) / x ] = 1',
      'lim_{x->a} [ (xⁿ - aⁿ) / (x - a) ] = n · a^(n-1)',
      'L\'Hôpital\'s Rule: If lim f(x)/g(x) is 0/0 or ∞/∞, lim f(x)/g(x) = lim f\'(x)/g\'(x)'
    ],
    backExampleOrApplication: 'Application: Proves the derivative of sin(x) is cos(x) directly from first principles definition.'
  },
  {
    id: 'fc-math-05',
    subject: 'Mathematics',
    topic: 'Sets & Relations',
    frontTitle: 'Equivalence Relations & Partitions',
    frontContent: 'What three conditions must a binary relation R on a set A satisfy to be an Equivalence Relation?',
    formula: 'Reflexive + Symmetric + Transitive = Equivalence Relation',
    backDefinition: 'An equivalence relation partitions set A into mutually disjoint equivalence classes whose union is A.',
    backKeyPoints: [
      'Reflexive: (a, a) ∈ R for every a ∈ A',
      'Symmetric: If (a, b) ∈ R, then (b, a) ∈ R',
      'Transitive: If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R',
      'Equivalence classes [a] = { x ∈ A : (x, a) ∈ R } are either identical or disjoint'
    ],
    backExampleOrApplication: 'Example: Congruence modulo n on integers (a ≡ b mod n) is an equivalence relation with n distinct classes.'
  }
];
