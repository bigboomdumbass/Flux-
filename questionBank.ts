import { Question, Subject } from '../types';

export const QUESTION_BANK: Question[] = [
  // --- PHYSICS ---
  {
    id: 'phy-01',
    subject: 'Physics',
    topic: 'Kinematics & Motion',
    difficulty: 'Easy',
    question: 'A car accelerates uniformly from rest to a speed of 20 m/s in 5 seconds. What is the distance covered by the car during this time?',
    options: ['40 m', '50 m', '100 m', '200 m'],
    correctAnswerIndex: 1,
    explanation: 'Using the kinematic relation s = ut + (1/2)at². Since the car starts from rest, u = 0. Acceleration a = (v - u)/t = 20/5 = 4 m/s². Therefore, distance s = 0 + (1/2) × 4 × (5)² = 2 × 25 = 50 m.',
    formulaOrHint: 's = ut + (1/2)at² where u = 0 and a = Δv/Δt'
  },
  {
    id: 'phy-02',
    subject: 'Physics',
    topic: 'Kinematics & Motion',
    difficulty: 'Medium',
    question: 'A projectile is launched from ground level with speed u at an angle θ to the horizontal. If the maximum height reached is equal to one-fourth of its horizontal range, what is the launch angle θ?',
    options: ['30°', '45°', '60°', 'tan⁻¹(2)'],
    correctAnswerIndex: 1,
    explanation: 'Maximum height H = (u² sin²θ)/(2g) and horizontal range R = (2u² sinθ cosθ)/g. Given H = R / 4, we have: (u² sin²θ)/(2g) = (2u² sinθ cosθ)/(4g). Simplifying gives (sin²θ)/2 = (sinθ cosθ)/2 => sinθ = cosθ => tanθ = 1 => θ = 45°.',
    formulaOrHint: 'H = R/4 => tanθ = 4(H/R) = 4(1/4) = 1'
  },
  {
    id: 'phy-03',
    subject: 'Physics',
    topic: 'Laws of Motion & Friction',
    difficulty: 'Easy',
    question: 'A block of mass 4 kg is kept on a rough horizontal floor with coefficient of static friction μ_s = 0.4. If a horizontal force of 10 N is applied to the block, what is the frictional force acting on it? (Take g = 9.8 m/s²)',
    options: ['10 N', '15.68 N', '39.2 N', '0 N'],
    correctAnswerIndex: 0,
    explanation: 'The maximum static friction (limiting friction) is f_max = μ_s × N = 0.4 × (4 × 9.8) = 15.68 N. Since the applied horizontal force (10 N) is less than the limiting friction (15.68 N), the block does not move. Static friction is self-adjusting, so the actual frictional force equals the applied force: 10 N.',
    formulaOrHint: 'f_static = F_applied whenever F_applied ≤ f_limiting'
  },
  {
    id: 'phy-04',
    subject: 'Physics',
    topic: 'Laws of Motion & Friction',
    difficulty: 'Hard',
    question: 'Two masses m₁ = 3 kg and m₂ = 2 kg are connected by a light inextensible string passing over a frictionless light pulley. What is the acceleration of the system when released? (Take g = 10 m/s²)',
    options: ['1 m/s²', '2 m/s²', '4 m/s²', '5 m/s²'],
    correctAnswerIndex: 1,
    explanation: 'In Atwood\'s machine, acceleration a = ((m₁ - m₂) / (m₁ + m₂)) × g. Here m₁ = 3 kg, m₂ = 2 kg. Thus a = ((3 - 2)/(3 + 2)) × 10 = (1/5) × 10 = 2 m/s².',
    formulaOrHint: 'a = (m₁ - m₂)g / (m₁ + m₂)'
  },
  {
    id: 'phy-05',
    subject: 'Physics',
    topic: 'Work, Energy & Power',
    difficulty: 'Medium',
    question: 'A spring of force constant k is compressed by a distance x. It pushes a ball of mass m horizontally on a frictionless surface. What is the velocity acquired by the ball when the spring returns to its natural length?',
    options: ['x √(k/m)', 'x √(m/k)', '√(kx/m)', '(1/2) kx²/m'],
    correctAnswerIndex: 0,
    explanation: 'By the law of conservation of mechanical energy, the elastic potential energy stored in the compressed spring is completely converted into kinetic energy of the ball: (1/2)kx² = (1/2)mv². Solving for v gives v² = (k/m)x² => v = x √(k/m).',
    formulaOrHint: 'U_spring = (1/2)kx² = K_ball = (1/2)mv²'
  },
  {
    id: 'phy-06',
    subject: 'Physics',
    topic: 'Gravitation',
    difficulty: 'Easy',
    question: 'At what height h above the Earth’s surface does the acceleration due to gravity become g/4? (Where R is the radius of the Earth)',
    options: ['h = R / 2', 'h = R', 'h = 2R', 'h = 4R'],
    correctAnswerIndex: 1,
    explanation: 'Acceleration due to gravity at height h is g_h = g × (R / (R + h))². For g_h = g/4, we have (R / (R + h))² = 1/4 => R / (R + h) = 1/2 => 2R = R + h => h = R.',
    formulaOrHint: 'g_h = g / (1 + h/R)²'
  },
  {
    id: 'phy-07',
    subject: 'Physics',
    topic: 'Thermodynamics & Heat',
    difficulty: 'Medium',
    question: 'In an adiabatic process involving an ideal gas, which of the following expressions remains constant? (γ = C_p / C_v)',
    options: ['P V = constant', 'P V^γ = constant', 'P^γ V = constant', 'T V^γ = constant'],
    correctAnswerIndex: 1,
    explanation: 'For a reversible adiabatic process of an ideal gas, no heat enters or leaves the system (dQ = 0). The governing relation is P V^γ = constant (Poisson\'s law), and equivalently T V^(γ - 1) = constant.',
    formulaOrHint: 'P V^γ = C (Poisson\'s equation)'
  },
  {
    id: 'phy-08',
    subject: 'Physics',
    topic: 'Thermodynamics & Heat',
    difficulty: 'Hard',
    question: 'An ideal Carnot engine operates between temperatures 500 K and 300 K. What is its thermodynamic efficiency?',
    options: ['20%', '40%', '60%', '66.7%'],
    correctAnswerIndex: 1,
    explanation: 'Efficiency of a Carnot cycle is given by η = 1 - (T_sink / T_source). Here T_source = 500 K and T_sink = 300 K. Therefore η = 1 - (300 / 500) = 1 - 0.6 = 0.40, which is 40%.',
    formulaOrHint: 'η = 1 - (T_c / T_h)'
  },

  // --- CHEMISTRY ---
  {
    id: 'chem-01',
    subject: 'Chemistry',
    topic: 'Structure of Atom',
    difficulty: 'Easy',
    question: 'What is the maximum number of electrons that can be accommodated in a principal quantum shell with n = 3?',
    options: ['6', '8', '14', '18'],
    correctAnswerIndex: 3,
    explanation: 'The maximum number of electrons accommodated in a shell with principal quantum number n is given by 2n². For n = 3, 2 × (3)² = 2 × 9 = 18 electrons (subshells 3s: 2, 3p: 6, 3d: 10).',
    formulaOrHint: 'Max electrons = 2n²'
  },
  {
    id: 'chem-02',
    subject: 'Chemistry',
    topic: 'Structure of Atom',
    difficulty: 'Medium',
    question: 'According to de Broglie\'s hypothesis, what is the wavelength λ associated with a particle having momentum p? (h is Planck\'s constant)',
    options: ['λ = h / p', 'λ = p / h', 'λ = h × p', 'λ = h / (2πp)'],
    correctAnswerIndex: 0,
    explanation: 'Louis de Broglie proposed that matter exhibits wave-particle duality. The de Broglie wavelength is related to momentum by λ = h / p = h / (mv), where h is Planck\'s constant.',
    formulaOrHint: 'λ = h/p = h/(mv)'
  },
  {
    id: 'chem-03',
    subject: 'Chemistry',
    topic: 'Chemical Bonding & Structure',
    difficulty: 'Easy',
    question: 'What is the geometry and hybridization of the central sulfur atom in sulfur hexafluoride (SF₆)?',
    options: ['Tetrahedral, sp³', 'Trigonal bipyramidal, sp³d', 'Octahedral, sp³d²', 'Square planar, dsp²'],
    correctAnswerIndex: 2,
    explanation: 'In SF₆, the central sulfur atom has 6 valence electrons and forms 6 single bonds with 6 fluorine atoms with zero lone pairs. Steric number = 6 + 0 = 6, corresponding to sp³d² hybridization and regular octahedral geometry with bond angles of 90°.',
    formulaOrHint: 'Steric Number = Bond pairs (6) + Lone pairs (0) = 6 => sp³d² Octahedral'
  },
  {
    id: 'chem-04',
    subject: 'Chemistry',
    topic: 'Chemical Bonding & Structure',
    difficulty: 'Medium',
    question: 'According to VSEPR theory, why is the bond angle in water (H₂O) approximately 104.5° instead of the tetrahedral angle of 109.5°?',
    options: [
      'Due to high electronegativity of hydrogen atoms',
      'Lone pair - lone pair repulsion is stronger than bond pair - bond pair repulsion',
      'The oxygen atom undergoes sp² hybridization',
      'Hydrogen bonding within the molecule repels the O-H bonds'
    ],
    correctAnswerIndex: 1,
    explanation: 'In H₂O, oxygen has 2 bonding pairs and 2 lone pairs. According to VSEPR theory, the magnitude of electron pair repulsions follows: (Lone pair - Lone pair) > (Lone pair - Bond pair) > (Bond pair - Bond pair). The strong repulsion between the two lone pairs compresses the H-O-H bond angle from 109.5° down to 104.5°.',
    formulaOrHint: 'VSEPR repulsion order: LP-LP > LP-BP > BP-BP'
  },
  {
    id: 'chem-05',
    subject: 'Chemistry',
    topic: 'Thermodynamics & Energetics',
    difficulty: 'Medium',
    question: 'Under what conditions is a chemical process guaranteed to be spontaneous at all temperatures?',
    options: ['ΔH > 0 and ΔS > 0', 'ΔH > 0 and ΔS < 0', 'ΔH < 0 and ΔS > 0', 'ΔH < 0 and ΔS < 0'],
    correctAnswerIndex: 2,
    explanation: 'Gibbs free energy change is ΔG = ΔH - TΔS. A reaction is spontaneous when ΔG < 0. If ΔH is negative (exothermic) and ΔS is positive (entropy increases), both terms contribute negatively to ΔG at any positive absolute temperature T (K), guaranteeing spontaneity.',
    formulaOrHint: 'ΔG = ΔH - TΔS < 0 for spontaneity'
  },
  {
    id: 'chem-06',
    subject: 'Chemistry',
    topic: 'Basic Concepts of Chemistry',
    difficulty: 'Easy',
    question: 'How many moles of oxygen atoms are present in 1.8 grams of water (H₂O)? (Molar mass of H₂O = 18 g/mol)',
    options: ['0.01 mol', '0.1 mol', '1.0 mol', '0.2 mol'],
    correctAnswerIndex: 1,
    explanation: 'Number of moles of water = Mass / Molar mass = 1.8 g / 18 g·mol⁻¹ = 0.1 mol. Each molecule of H₂O contains 1 oxygen atom. Hence, moles of oxygen atoms = 0.1 × 1 = 0.1 mol.',
    formulaOrHint: 'Moles n = mass / molar mass'
  },
  {
    id: 'chem-07',
    subject: 'Chemistry',
    topic: 'Organic Chemistry Basics',
    difficulty: 'Medium',
    question: 'Which of the following carbocations is the most stable due to hyperconjugation and inductive effect?',
    options: ['(CH₃)₃C⁺ (tert-butyl)', '(CH₃)₂CH⁺ (isopropyl)', 'CH₃CH₂⁺ (ethyl)', 'CH₃⁺ (methyl)'],
    correctAnswerIndex: 0,
    explanation: 'Stability of carbocations follows 3° > 2° > 1° > methyl. The tert-butyl cation (CH₃)₃C⁺ has 9 α-hydrogens for hyperconjugative stabilization and three electron-donating +I methyl groups that disperse the positive charge most effectively.',
    formulaOrHint: 'Stability: 3° (9 α-H) > 2° (6 α-H) > 1° (3 α-H) > methyl'
  },
  {
    id: 'chem-08',
    subject: 'Chemistry',
    topic: 'Organic Chemistry Basics',
    difficulty: 'Hard',
    question: 'What is the IUPAC name of the compound CH₃-CH(OH)-CH₂-CHO?',
    options: ['2-Hydroxybutanal', '3-Hydroxybutanal', '3-Hydroxybutanone', '1-Oxobutan-3-ol'],
    correctAnswerIndex: 1,
    explanation: 'The aldehyde group (-CHO) has higher IUPAC priority than the hydroxyl group (-OH). Numbering starts from the aldehyde carbon: C1: -CHO, C2: -CH₂-, C3: -CH(OH)-, C4: -CH₃. Therefore, the -OH substituent is at carbon 3, giving the name 3-hydroxybutanal.',
    formulaOrHint: 'IUPAC priority: -CHO (aldehyde) > -OH (alcohol)'
  },

  // --- MATHEMATICS ---
  {
    id: 'math-01',
    subject: 'Mathematics',
    topic: 'Trigonometric Functions',
    difficulty: 'Easy',
    question: 'What is the principal value of cos(2π/3)?',
    options: ['1/2', '-1/2', '√3/2', '-√3/2'],
    correctAnswerIndex: 1,
    explanation: 'cos(2π/3) = cos(π - π/3). In the second quadrant, cosine is negative, so cos(π - θ) = -cos(θ). Hence cos(π - π/3) = -cos(π/3) = -1/2.',
    formulaOrHint: 'cos(π - x) = -cos(x)'
  },
  {
    id: 'math-02',
    subject: 'Mathematics',
    topic: 'Trigonometric Functions',
    difficulty: 'Medium',
    question: 'If tan(A) = 1/2 and tan(B) = 1/3, what is the value of (A + B) where A and B are acute angles?',
    options: ['π/6 (30°)', 'π/4 (45°)', 'π/3 (60°)', 'π/2 (90°)'],
    correctAnswerIndex: 1,
    explanation: 'Using the tangent addition formula: tan(A + B) = (tan A + tan B) / (1 - tan A tan B) = (1/2 + 1/3) / (1 - (1/2)(1/3)) = (5/6) / (1 - 1/6) = (5/6) / (5/6) = 1. Since A and B are acute, A + B = π/4 (45°).',
    formulaOrHint: 'tan(A + B) = (tan A + tan B) / (1 - tan A · tan B)'
  },
  {
    id: 'math-03',
    subject: 'Mathematics',
    topic: 'Complex Numbers & Quadratics',
    difficulty: 'Easy',
    question: 'What is the modulus of the complex number z = 3 - 4i?',
    options: ['1', '5', '7', '25'],
    correctAnswerIndex: 1,
    explanation: 'For any complex number z = x + iy, its modulus is |z| = √(x² + y²). For z = 3 - 4i, |z| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.',
    formulaOrHint: '|z| = √(Re(z)² + Im(z)²)'
  },
  {
    id: 'math-04',
    subject: 'Mathematics',
    topic: 'Complex Numbers & Quadratics',
    difficulty: 'Medium',
    question: 'If ω is a non-real complex cube root of unity, what is the value of 1 + ω + ω²?',
    options: ['-1', '0', '1', 'i√3'],
    correctAnswerIndex: 1,
    explanation: 'The roots of x³ - 1 = 0 are 1, ω, and ω². Since (x - 1)(x² + x + 1) = 0 and ω ≠ 1, ω satisfies ω² + ω + 1 = 0. Therefore 1 + ω + ω² = 0.',
    formulaOrHint: 'Sum of cube roots of unity: 1 + ω + ω² = 0; ω³ = 1'
  },
  {
    id: 'math-05',
    subject: 'Mathematics',
    topic: 'Sequences & Series',
    difficulty: 'Medium',
    question: 'In a Geometric Progression (GP), the 3rd term is 12 and the 6th term is 96. What is the first term \'a\' of this progression?',
    options: ['2', '3', '4', '6'],
    correctAnswerIndex: 1,
    explanation: 'Let the GP have first term a and common ratio r. The n-th term is T_n = a · r^(n-1). Given T_3 = a · r² = 12 and T_6 = a · r⁵ = 96. Dividing T_6 by T_3 gives: r³ = 96 / 12 = 8 => r = 2. Then a · (2)² = 12 => 4a = 12 => a = 3.',
    formulaOrHint: 'T_n = a · r^(n-1)'
  },
  {
    id: 'math-06',
    subject: 'Mathematics',
    topic: 'Limits & Derivatives',
    difficulty: 'Easy',
    question: 'What is the limit: lim (x -> 0) [ sin(5x) / x ]?',
    options: ['0', '1', '5', 'Does not exist'],
    correctAnswerIndex: 2,
    explanation: 'Using the standard trigonometric limit theorem: lim (θ -> 0) [sin(θ) / θ] = 1. We rewrite lim (x -> 0) [5 · sin(5x) / (5x)] = 5 · 1 = 5.',
    formulaOrHint: 'lim (x -> 0) [sin(kx) / x] = k'
  },
  {
    id: 'math-07',
    subject: 'Mathematics',
    topic: 'Limits & Derivatives',
    difficulty: 'Hard',
    question: 'Find the derivative of f(x) = x · ln(x) with respect to x for x > 0.',
    options: ['1 / x', 'ln(x)', 'ln(x) + 1', 'x + ln(x)'],
    correctAnswerIndex: 2,
    explanation: 'Applying the product rule d/dx [u · v] = u\'v + uv\'. Here u = x and v = ln(x). u\' = 1, v\' = 1/x. So f\'(x) = (1)(ln x) + x(1/x) = ln(x) + 1.',
    formulaOrHint: 'd/dx [u · v] = u\'v + uv\''
  },
  {
    id: 'math-08',
    subject: 'Mathematics',
    topic: 'Sets & Relations',
    difficulty: 'Easy',
    question: 'If set A has 4 elements, how many subsets does set A have in total?',
    options: ['4', '8', '16', '32'],
    correctAnswerIndex: 2,
    explanation: 'The total number of subsets (power set cardinality) of a finite set with n elements is 2ⁿ. For n = 4, the number of subsets is 2⁴ = 16 (including the empty set and the set itself).',
    formulaOrHint: '|P(A)| = 2ⁿ where n = |A|'
  },

  // --- ADDITIONAL QUESTIONS FOR RICH TOPIC VARIETY ---
  {
    id: 'phy-09',
    subject: 'Physics',
    topic: 'Kinematics & Motion',
    difficulty: 'Easy',
    question: 'The slope of a velocity-time (v-t) graph represents which physical quantity?',
    options: ['Displacement', 'Speed', 'Acceleration', 'Work done'],
    correctAnswerIndex: 2,
    explanation: 'The slope of a curve is given by Δy / Δx. For a velocity-time graph, slope = Δv / Δt, which is by definition the acceleration of the object.',
    formulaOrHint: 'Slope = dv/dt = a'
  },
  {
    id: 'phy-10',
    subject: 'Physics',
    topic: 'Work, Energy & Power',
    difficulty: 'Hard',
    question: 'A body of mass 2 kg moving at 4 m/s makes a head-on elastic collision with another body of mass 2 kg initially at rest. What are their velocities after the collision?',
    options: ['Both move together at 2 m/s', '0 m/s and 4 m/s respectively', '2 m/s and 2 m/s respectively', '-2 m/s and 2 m/s respectively'],
    correctAnswerIndex: 1,
    explanation: 'In a one-dimensional head-on elastic collision between two equal masses (m₁ = m₂), the bodies completely exchange their velocities. The first body comes to rest (v₁ = 0 m/s) and the second body moves forward with the initial velocity of the first (v₂ = 4 m/s).',
    formulaOrHint: 'Equal mass elastic collision: v₁ = u₂, v₂ = u₁'
  },
  {
    id: 'chem-09',
    subject: 'Chemistry',
    topic: 'Structure of Atom',
    difficulty: 'Hard',
    question: 'Which of the following sets of quantum numbers (n, l, m_l, m_s) is NOT allowed for an electron in an atom?',
    options: [
      'n = 3, l = 2, m_l = -1, m_s = +1/2',
      'n = 2, l = 2, m_l = 0, m_s = -1/2',
      'n = 4, l = 0, m_l = 0, m_s = +1/2',
      'n = 3, l = 1, m_l = +1, m_s = -1/2'
    ],
    correctAnswerIndex: 1,
    explanation: 'For a given principal quantum number n, the azimuthal quantum number l can only take integer values from 0 up to (n - 1). For n = 2, the allowed values of l are 0 and 1. An orbital with l = 2 (a 2d orbital) does not exist.',
    formulaOrHint: 'Condition: 0 ≤ l ≤ n - 1 and -l ≤ m_l ≤ +l'
  },
  {
    id: 'chem-10',
    subject: 'Chemistry',
    topic: 'Chemical Bonding & Structure',
    difficulty: 'Medium',
    question: 'Which of the following molecules has a permanent dipole moment (μ ≠ 0)?',
    options: ['CO₂', 'BF₃', 'CH₄', 'NH₃'],
    correctAnswerIndex: 3,
    explanation: 'NH₃ has trigonal pyramidal geometry due to 1 lone pair on nitrogen. The individual N-H bond dipoles and the lone pair dipole reinforce one another, resulting in a net dipole moment (~1.47 D). In contrast, CO₂ (linear), BF₃ (trigonal planar), and CH₄ (tetrahedral) have symmetrical geometries where individual bond dipoles cancel out.',
    formulaOrHint: 'Net dipole vector sum Σμ ≠ 0 for asymmetric polar shapes'
  },
  {
    id: 'math-09',
    subject: 'Mathematics',
    topic: 'Sequences & Series',
    difficulty: 'Easy',
    question: 'What is the sum of the first 20 natural numbers (1 + 2 + 3 + ... + 20)?',
    options: ['190', '200', '210', '220'],
    correctAnswerIndex: 2,
    explanation: 'The sum of the first n natural numbers is given by S_n = n(n + 1)/2. For n = 20, S₂₀ = 20 × 21 / 2 = 10 × 21 = 210.',
    formulaOrHint: 'Σn = n(n + 1)/2'
  },
  {
    id: 'math-10',
    subject: 'Mathematics',
    topic: 'Complex Numbers & Quadratics',
    difficulty: 'Hard',
    question: 'If the roots of the quadratic equation x² - px + q = 0 differ by 1, which of the following relations is correct?',
    options: ['p² = 4q + 1', 'p² = 4q - 1', 'q² = 4p + 1', 'p² - 4q = 2'],
    correctAnswerIndex: 0,
    explanation: 'Let roots be α and β. Sum of roots α + β = p and product αβ = q. Difference of roots is |α - β| = 1. Squaring both sides: (α - β)² = 1 => (α + β)² - 4αβ = 1 => p² - 4q = 1 => p² = 4q + 1.',
    formulaOrHint: '(α - β)² = (α + β)² - 4αβ'
  }
];

export const SUBJECT_TOPICS: Record<Subject, string[]> = {
  Physics: [
    'Kinematics & Motion',
    'Laws of Motion & Friction',
    'Work, Energy & Power',
    'Gravitation',
    'Thermodynamics & Heat'
  ],
  Chemistry: [
    'Basic Concepts of Chemistry',
    'Structure of Atom',
    'Chemical Bonding & Structure',
    'Thermodynamics & Energetics',
    'Organic Chemistry Basics'
  ],
  Mathematics: [
    'Sets & Relations',
    'Trigonometric Functions',
    'Complex Numbers & Quadratics',
    'Sequences & Series',
    'Limits & Derivatives'
  ]
};
