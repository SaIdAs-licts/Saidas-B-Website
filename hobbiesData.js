// =========================================================================
// Hobbies & Art Folio Dataset (Philately, Sketching, Photography)
// =========================================================================

const hobbiesData = [
    // -------------------------------------------------------------------------
    // CATEGORY 1: PHILATELY & NUMISMATICS (Vintage stamps, coins, banknotes)
    // -------------------------------------------------------------------------
    {
        id: 'philately-01',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 1,
        title: 'King George VI 1940s Deccan Postal Issue',
        series: 'British India Commonwealth Series',
        era: '1940–1947 (Late Colonial Era)',
        scale: '28 × 34 mm (Perforated 14)',
        medium: 'Copperplate Intaglio Engraving on Watermarked Paper',
        narrative: 'Issued during the twilight years of British rule in India, this 1940s postal stamp features the crisp profile of King George VI surrounded by intricate floral filigree motifs. The deep emerald green ink and deep intaglio pressure highlight the pinnacle of mid-20th-century security printing technology.',
        specs: [
            { label: 'Catalog ID:', value: 'SG-264 / Scott 182' },
            { label: 'Denomination:', value: '1.5 Annas (Green Intaglio)' },
            { label: 'Print House:', value: 'India Security Press, Nashik' },
            { label: 'Rarity / Provenance:', value: 'Mint Never Hinged (MNH) Archive Specimen' }
        ],
        cardColor: '#1b4d3e',
        accentColor: '#38ef7d',
        badge: 'Vintage Stamp',
        image: 'assets/images/coins.png'
    },
    {
        id: 'philately-02',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 2,
        title: 'British India Silver Rupee (George V - 1918)',
        series: 'Imperial Coinage Series',
        era: '1918 (World War I Era)',
        scale: '30.5 mm Diameter / 11.66g (.917 Fine Silver)',
        medium: 'Milled Silver Coinage with Raised Rim',
        narrative: 'Minted in Bombay during the closing months of the First World War, this 91.7% pure silver rupee bears the crowned bust of King George V wearing Imperial robes. The reverse depicts an ornate floral wreath enclosing the denomination in English and Persian scripts.',
        specs: [
            { label: 'Minting Mark:', value: 'Bombay Mint (Dot under date)' },
            { label: 'Composition:', value: '91.7% Silver, 8.3% Copper' },
            { label: 'Weight & Edge:', value: '11.66 Grams / Milled Edge' },
            { label: 'Condition Grade:', value: 'Extremely Fine (XF) with Natural Patina' }
        ],
        cardColor: '#2c3e50',
        accentColor: '#00c6ff',
        badge: 'Silver Coin',
        image: 'assets/images/coins.png'
    },
    {
        id: 'philately-03',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 3,
        title: 'Penny Black Commemorative Centenary Sheet',
        series: 'Postal History Heritage',
        era: '1940 Issue (Centenary of 1840)',
        scale: '45 × 52 mm Miniature Sheet',
        medium: 'Steel Engraved Monochromatic Lithograph',
        narrative: 'Celebrating 100 years since Rowland Hill introduced the world’s first adhesive postage stamp in 1840. This souvenir sheet reproduces the classic profile of Queen Victoria with crisp engine-turned background patterns.',
        specs: [
            { label: 'Origin:', value: 'Royal Mail Heritage Archives' },
            { label: 'Watermark:', value: 'Crown & Cypher' },
            { label: 'Historical Value:', value: 'First Uniform Penny Post Milestone' },
            { label: 'Conservation:', value: 'Acid-Free Encapsulation' }
        ],
        cardColor: '#1a1a1a',
        accentColor: '#f1c40f',
        badge: 'Commemorative',
        image: 'assets/images/coins.png'
    },
    {
        id: 'philately-04',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 4,
        title: 'Princely State Travancore Conch Shell 1/2 Chuckram',
        series: 'Native Feudatory State Coinage',
        era: 'circa 1906–1931 (Reign of Moolam Thirunal)',
        scale: '14 mm / 1.2g Pure Silver',
        medium: 'Hammered Silver Punch-Marked Coinage',
        narrative: 'The Princely State of Travancore in southern India minted tiny silver coins featuring the sacred Shankha (conch shell), symbol of Padmanabhaswamy. Despite its minuscule scale, the strike detail remains remarkably precise.',
        specs: [
            { label: 'State / Realm:', value: 'Kingdom of Travancore' },
            { label: 'Iconography:', value: 'Sacred Right-Turning Conch (Valampuri Shankh)' },
            { label: 'Currency Unit:', value: 'Chuckram (1 Rupee = 28 Chuckrams)' },
            { label: 'Metal:', value: 'High Purity Native Silver' }
        ],
        cardColor: '#4a235a',
        accentColor: '#f857a6',
        badge: 'Feudatory Coin',
        image: 'assets/images/coins.png'
    },
    {
        id: 'philately-05',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 5,
        title: 'East India Company 1/4 Anna Copper Coin (1835)',
        series: 'EIC Uniform Coinage',
        era: '1835 (William IV Rule)',
        scale: '25.4 mm / 6.47g Pure Copper',
        medium: 'Die-Struck Bronze/Copper',
        narrative: 'The first coin issued under unified East India Company control across India. It bears the coat of arms of the EIC with two lions holding a shield, flanked by Latin motto "Auspicio Regis et Senatus Angliae".',
        specs: [
            { label: 'Authority:', value: 'Honourable East India Company' },
            { label: 'Obverse Motto:', value: 'Under the Auspices of the King and Parliament' },
            { label: 'Diameter:', value: '25.4 mm' },
            { label: 'Grade:', value: 'Choice Fine with Chocolate Toning' }
        ],
        cardColor: '#5d4037',
        accentColor: '#ff9800',
        badge: 'EIC Bronze',
        image: 'assets/images/coins.png'
    },
    {
        id: 'philately-06',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 6,
        title: 'French Indochina 1 Centime Perforated Issue (1908)',
        series: 'Colonial SE Asia Philately',
        era: '1908–1919 (French Colonial Empire)',
        scale: '22 × 26 mm (Perforated 13.5)',
        medium: 'Two-Color Typographic Print',
        narrative: 'A classic colonial issue from Saigon depicting Marianne in profile framed by traditional Indochinese dragon motifs. Printed in Paris for circulation across Vietnam, Laos, and Cambodia.',
        specs: [
            { label: 'Territory:', value: 'Indochine Française' },
            { label: 'Printer:', value: 'Atelier des Timbres, Paris' },
            { label: 'Colorway:', value: 'Claret & Olive Green' },
            { label: 'Cancellation:', value: 'Circular Date Stamp (Hanoi 1912)' }
        ],
        cardColor: '#78281f',
        accentColor: '#e74c3c',
        badge: 'Colonial Stamp',
        image: 'assets/images/coins.png'
    },
    {
        id: 'philately-07',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 7,
        title: 'Overprinted Hyderabad Nizam Postal Rupee Stamp',
        series: 'Princely State Postal Service',
        era: '1937 Silver Jubilee Issue',
        scale: '32 × 38 mm',
        medium: 'Photogravure on Wove Paper',
        narrative: 'Issued by the 7th Nizam of Hyderabad, Mir Osman Ali Khan—reputed as the world’s wealthiest man in his era. Features the Charminar monument in Hyderabad in rich indigo ink.',
        specs: [
            { label: 'Postal Admin:', value: 'Hyderabad State Posts (Deccan)' },
            { label: 'Monument:', value: 'Charminar (Four Minarets)' },
            { label: 'Script:', value: 'Urdu & Telugu Inscriptions' },
            { label: 'Status:', value: 'Used Specimen with Native Seal' }
        ],
        cardColor: '#1f618d',
        accentColor: '#5dade2',
        badge: 'Nizam State',
        image: 'assets/images/coins.png'
    },
    {
        id: 'philately-08',
        category: 'philately',
        categoryLabel: 'PHILATELY & NUMISMATICS',
        index: 8,
        title: 'Victorian 6-Pence Lilac Postmark Specimen (1883)',
        series: 'Great Britain High Denomination',
        era: '1883 (Late Victorian Era)',
        scale: '24 × 29 mm',
        medium: 'Surface-Printed Typo with Corner Letters',
        narrative: 'Printed in distinctive fugitive lilac ink designed to prevent chemical cleaning and postmark washing. Features check letters in four corners to deter 19th-century stamp forgery.',
        specs: [
            { label: 'Watermark:', value: '3 Imperial Crowns' },
            { label: 'Ink Type:', value: 'Fugitive Lilac Aniline Dye' },
            { label: 'Security Feature:', value: 'Corner Check Plate Numbers' },
            { label: 'Postmark:', value: 'London Barrel Cancellation' }
        ],
        cardColor: '#512e5f',
        accentColor: '#bb8fce',
        badge: 'Victorian Stamp',
        image: 'assets/images/coins.png'
    },

    // -------------------------------------------------------------------------
    // CATEGORY 2: SKETCHING & ART (Micron pen art, architectural drawings)
    // -------------------------------------------------------------------------
    {
        id: 'sketching-01',
        category: 'sketching',
        categoryLabel: 'SKETCHING & ART',
        index: 1,
        title: 'Gothic Spire Geometry & Structural Line Study',
        series: 'Architectural Ink Studies',
        era: '2024 Studio Drafting',
        scale: '210 × 297 mm (A4 Cotton Paper)',
        medium: 'Sakura Micron 0.05 / 0.1 Pen on 300gsm Cold-Pressed Rag',
        narrative: 'An intense study in architectural line weight and vanishing-point projection. Rendered using ultra-fine 0.05mm technical pens over 18 hours, dissecting gothic stone rib vaults and buttresses.',
        specs: [
            { label: 'Instrument:', value: 'Sakura Pigma Micron 0.05 & 0.2' },
            { label: 'Technique:', value: 'Stippling, Cross-Hatching & Vanishing Grid' },
            { label: 'Paper Stock:', value: 'Fabriano 100% Cotton Rag 300gsm' },
            { label: 'Draft Time:', value: '18 Dedicated Drafting Hours' }
        ],
        cardColor: '#1c2833',
        accentColor: '#b8fb01',
        badge: 'Micron Ink',
        image: 'assets/images/art.png'
    },
    {
        id: 'sketching-02',
        category: 'sketching',
        categoryLabel: 'SKETCHING & ART',
        index: 2,
        title: 'Monolithic Industrial Concrete & Shadow Play',
        series: 'Brutalist Geometry',
        era: '2023 Explorations',
        scale: '297 × 420 mm (A3 Sketchbook)',
        medium: 'Graphite 6B, Charcoal Powder & White Gel Highlights',
        narrative: 'Exploring harsh shadows cast across cast-concrete brutalist towers. Tonal values are built layer by layer using graphite powder, compressed charcoal, and high-contrast eraser highlights.',
        specs: [
            { label: 'Medium:', value: 'Faber-Castell 9000 Graphite (2B–8B)' },
            { label: 'Style:', value: 'Chiaroscuro & Monolithic Perspective' },
            { label: 'Focus:', value: 'Light Falloff & Surface Texture' },
            { label: 'Collection:', value: 'Urban Form Folio Vol. II' }
        ],
        cardColor: '#283747',
        accentColor: '#f39c12',
        badge: 'Graphite & Charcoal',
        image: 'assets/images/art.png'
    },
    {
        id: 'sketching-03',
        category: 'sketching',
        categoryLabel: 'SKETCHING & ART',
        index: 3,
        title: 'Botanical Ferns & Micro-Line Vein Anatomy',
        series: 'Organic Micro Series',
        era: '2024 Nature Folio',
        scale: '148 × 210 mm (A5 Pocket Journal)',
        medium: 'Rotring Rapidograph 0.1 mm Waterproof Ink',
        narrative: 'A microscopic study of plant fronds capturing every cellular vein and fractal edge. Demonstrates the natural geometry that inspires industrial engineering optimization.',
        specs: [
            { label: 'Tooling:', value: 'Rotring Rapidograph 0.1mm' },
            { label: 'Ink Type:', value: 'Archival Waterproof India Ink' },
            { label: 'Subject:', value: 'Asplenium Nidus (Bird’s Nest Fern)' },
            { label: 'Detail Scale:', value: '1:1 Micro-Structural Rendering' }
        ],
        cardColor: '#145a32',
        accentColor: '#2ecc71',
        badge: 'Rotring Micro',
        image: 'assets/images/art.png'
    },
    {
        id: 'sketching-04',
        category: 'sketching',
        categoryLabel: 'SKETCHING & ART',
        index: 4,
        title: 'Fluid Watercolor Perspective: Venice Grand Canal',
        series: 'Atmospheric Wash Series',
        era: '2023 Travel Sketches',
        scale: '240 × 320 mm Cold Press Block',
        medium: 'Winsor & Newton Artist Quality Watercolors',
        narrative: 'Capturing reflection physics and light dispersion across aquatic surfaces. A wet-on-wet technique blends burnt sienna and deep cobalt violet to evoke morning mist over historical stone bridges.',
        specs: [
            { label: 'Pigments:', value: 'Cobalt Violet, Burnt Sienna, Prussian Blue' },
            { label: 'Paper:', value: 'Arches 300gsm 100% Cotton Rough' },
            { label: 'Method:', value: 'Layered Transparent Glazing' },
            { label: 'Atmosphere:', value: 'Dawn Light Dispersion' }
        ],
        cardColor: '#1b4f72',
        accentColor: '#85c1e9',
        badge: 'Watercolor Wash',
        image: 'assets/images/art.png'
    },
    {
        id: 'sketching-05',
        category: 'sketching',
        categoryLabel: 'SKETCHING & ART',
        index: 5,
        title: 'Kinetic Human Gestures & Structural Anatomy',
        series: 'Anatomical Dynamics',
        era: '2024 Life Drawing',
        scale: '300 × 400 mm Newsprint',
        medium: 'Sanguine Conté Crayon & White Chalk',
        narrative: 'Rapid 90-second gesture drawings dissecting muscle tension, center of mass, and anatomical kinetic alignment. Drawn with expressive, continuous sanguine crayon sweeps.',
        specs: [
            { label: 'Medium:', value: 'French Sanguine & Sepia Conté Crayons' },
            { label: 'Duration:', value: '90-Second Timed Dynamic Poses' },
            { label: 'Surface:', value: 'Toned Kraft Paper' },
            { label: 'Focus:', value: 'Weight Distribution & Muscular Tension' }
        ],
        cardColor: '#6e2c00',
        accentColor: '#dc7633',
        badge: 'Conté Life Study',
        image: 'assets/images/art.png'
    },
    {
        id: 'sketching-06',
        category: 'sketching',
        categoryLabel: 'SKETCHING & ART',
        index: 6,
        title: 'Isometric Factory Layout & Assembly Line Flow',
        series: 'Industrial System Art',
        era: '2024 Engineering Art',
        scale: '420 × 594 mm (A2 Technical Sheet)',
        medium: 'Precision Drafting Pen & Copic Cool Grey Markers',
        narrative: 'Bridging engineering rigor with fine art. An isometric cross-section of an automated factory floor, visualizing material handling conveyors, robotic arms, and queue buffers.',
        specs: [
            { label: 'Grid:', value: '30°/60° Isometric Projection' },
            { label: 'Tonal System:', value: 'Copic Cool Grey Markers (C0 to C7)' },
            { label: 'Subject:', value: 'Industrial Supply Chain Automation' },
            { label: 'Scale:', value: 'Schematic Perspective Rendering' }
        ],
        cardColor: '#212f3d',
        accentColor: '#00c6ff',
        badge: 'Isometric Drafting',
        image: 'assets/images/art.png'
    },

    // -------------------------------------------------------------------------
    // CATEGORY 3: PHOTOGRAPHY (Architectural and landscape captures)
    // -------------------------------------------------------------------------
    {
        id: 'photo-01',
        category: 'photo',
        categoryLabel: 'PHOTOGRAPHY',
        index: 1,
        title: 'Nocturnal Urban Geometry & Neon Reflections',
        series: 'Metropolitan Shadows',
        era: '2024 Architectural Series',
        scale: '35mm Full-Frame (85mm f/1.4 Prime)',
        medium: 'Digital Capture / Archival Giclée Fine Art Print',
        narrative: 'A long-exposure frame capturing neon light bleeding across wet asphalt beneath towering high-rise glass facades. The vanishing point geometry directs the viewer into midnight urban solitude.',
        specs: [
            { label: 'Camera / Lens:', value: 'Sony A7IV + FE 85mm f/1.4 GM' },
            { label: 'Exposure:', value: '1.5 sec | f/8.0 | ISO 100' },
            { label: 'Location:', value: 'Central Business District' },
            { label: 'Print Edition:', value: 'Limited Archival Pigment Print' }
        ],
        cardColor: '#0b132b',
        accentColor: '#48cae4',
        badge: 'Night Photography',
        image: 'assets/images/photo.png'
    },
    {
        id: 'photo-02',
        category: 'photo',
        categoryLabel: 'PHOTOGRAPHY',
        index: 2,
        title: 'Ridge Line Solitude: Western Ghats Canopy',
        series: 'Landscape Horizon',
        era: '2023 Mountain Expeditions',
        scale: '35mm Full-Frame (24mm Ultrawide)',
        medium: 'High Dynamic Range Landscape Capture',
        narrative: 'Dawn fog rolling over jagged mountain ridges at 1,400 meters altitude. The interplay of morning sunlight breaking through cloud layers illuminates layers of evergreen forest canopy.',
        specs: [
            { label: 'Optics:', value: '24mm Ultrawide Prime' },
            { label: 'Settings:', value: '1/250 sec | f/11 | ISO 200' },
            { label: 'Elevation:', value: '1,420m Above Sea Level' },
            { label: 'Tonal Grading:', value: 'Natural Muted Earth Colors' }
        ],
        cardColor: '#19381f',
        accentColor: '#b8fb01',
        badge: 'Landscape Capture',
        image: 'assets/images/photo.png'
    },
    {
        id: 'photo-03',
        category: 'photo',
        categoryLabel: 'PHOTOGRAPHY',
        index: 3,
        title: 'Vanishing Corridor & Steel Railway Symmetry',
        series: 'Linear Vanishing Points',
        era: '2024 Transport Infrastructure',
        scale: '35mm Full-Frame (50mm Prime)',
        medium: 'Monochromatic High-Contrast Silver Digital',
        narrative: 'A perfectly centered long-exposure shot down an empty multi-track rail corridor. The converging steel rails and overhead catenary wires form a compelling geometric perspective vector.',
        specs: [
            { label: 'Format:', value: 'Monochrome Silver Tone' },
            { label: 'Composition:', value: 'One-Point Centered Perspective' },
            { label: 'Shutter Speed:', value: '1/500 sec Crisp Freeze' },
            { label: 'Lighting:', value: 'Overcast Soft Sky Diffusion' }
        ],
        cardColor: '#212121',
        accentColor: '#ffffff',
        badge: 'Monochrome Steel',
        image: 'assets/images/photo.png'
    },
    {
        id: 'photo-04',
        category: 'photo',
        categoryLabel: 'PHOTOGRAPHY',
        index: 4,
        title: 'Golden Hour Concrete Curves: Spiral Ramp Architecture',
        series: 'Brutalist Curves',
        era: '2023 Structural Geometry',
        scale: '35mm Full-Frame (35mm f/1.8)',
        medium: 'Color Negative Film Emulation',
        narrative: 'Warm late-afternoon sun rays grazing a circular concrete pedestrian ramp. Shadows accentuate the helical curve, transforming functional civil engineering into sculptural artwork.',
        specs: [
            { label: 'Focal Length:', value: '35mm Perspective' },
            { label: 'Lighting:', value: 'Low Angle Golden Hour Sun (4500K)' },
            { label: 'Subject:', value: 'Reinforced Helical Concrete Ramp' },
            { label: 'Palette:', value: 'Warm Ochre & Deep Slate Gray' }
        ],
        cardColor: '#4a3b32',
        accentColor: '#ffb703',
        badge: 'Golden Hour Concrete',
        image: 'assets/images/photo.png'
    },
    {
        id: 'photo-05',
        category: 'photo',
        categoryLabel: 'PHOTOGRAPHY',
        index: 5,
        title: 'Long-Exposure Seascape Horizon & Tidal Solitude',
        series: 'Fluid Time Studies',
        era: '2024 Coastal Expeditions',
        scale: '35mm Full-Frame (16mm ND1000)',
        medium: '30-Second Neutral Density Exposure',
        narrative: 'Utilizing a 10-stop neutral density filter to smooth ocean waves into a misty ether. The sharp silhouette of ancient tide rocks provides a permanent anchor against fluid motion.',
        specs: [
            { label: 'Filter System:', value: '10-Stop ND (1000x) Optical Glass' },
            { label: 'Shutter Duration:', value: '30.0 Seconds Smooth Exposure' },
            { label: 'Aperture:', value: 'f/16 for Edge-to-Edge Sharpness' },
            { label: 'Theme:', value: 'Permanence vs. Evanescence' }
        ],
        cardColor: '#1d3557',
        accentColor: '#a8dadc',
        badge: 'Seascape ND Filter',
        image: 'assets/images/photo.png'
    },
    {
        id: 'photo-06',
        category: 'photo',
        categoryLabel: 'PHOTOGRAPHY',
        index: 6,
        title: 'Industrial Low-Poly 3D Environments',
        series: 'Blender & CGI Worldbuilding',
        era: '2024 3D Art & CGI',
        scale: 'Digital 4K Render Engine',
        medium: 'Cycles Raytraced 3D Environment',
        narrative: 'Created in Blender 3D as a study for future indie game environments. Features low-poly atmospheric lighting, volumetric fog, and PBR material shaders.',
        specs: [
            { label: 'Software:', value: 'Blender 4.1 Cycles Render Engine' },
            { label: 'Polycount:', value: '45,000 Triangles (Optimized Realtime)' },
            { label: 'Lighting:', value: 'Volumetric Spot & HDRI Environment' },
            { label: 'Purpose:', value: 'Indie Game Concept Art' }
        ],
        cardColor: '#3a0ca3',
        accentColor: '#4cc9f0',
        badge: 'Blender 3D Render',
        image: 'assets/images/blender.png'
    }
];

window.hobbiesData = hobbiesData;
