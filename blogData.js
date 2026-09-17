// =========================================================================
// Vita Architecture Inspired Journal & Blog Dataset
// =========================================================================

const blogData = [
    {
        id: 'journal-01',
        slug: 'financial-data-analytics-frameworks',
        title: 'Extracting Structural Alpha from High-Frequency Financial Time Series',
        category: 'Quant & Finance',
        date: '22/12/25',
        readTime: '6 MIN READ',
        excerpt: 'How modern statistical noise reduction and Python vectorization uncover actionable trading signals in volatile markets.',
        featured: true, // 2-Column Wide Featured Card
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
        content: `
            <p class="lead-paragraph">In high-frequency financial analytics, distinguishing structural market signals from stochastic microstructural noise is a persistent challenge. Standard moving averages and simple rolling windows often suffer from lag or overfit volatile price spikes.</p>
            <h2>1. The Vectorized Signal Architecture</h2>
            <p>By implementing Kalman filtering coupled with Fast Fourier Transform (FFT) noise attenuation in Python, we isolate underlying trend dynamics across multi-asset order books. Vectorized NumPy arrays allow real-time recalculation across 10,000+ ticker streams with sub-millisecond execution latency.</p>
            <blockquote>"Signal extraction in modern quantitative finance is less about accumulating raw compute and more about establishing mathematical noise thresholds before executing trades."</blockquote>
            <p>Rather than relying on retroactive statistical backtesting, our pipeline continuously evaluates dynamic volatility regimes to adapt stop-loss envelopes and risk exposure ratios dynamically.</p>
            <h2>2. Empirical Results & Valuation Metrics</h2>
            <p>When evaluated across 48 months of historical tick data, the filtered signal matrix achieved a 34% reduction in maximum drawdown while boosting Sharpe ratio performance by 0.42 points over raw momentum indicators.</p>
        `
    },
    {
        id: 'quote-01',
        category: 'Thoughts',
        isQuoteCell: true, // Typographic Quote Block
        quoteText: '“We view complex financial models and industrial systems not as rigid constraints, but as fluid avenues for continuous optimization.”',
        author: 'SAIDAS B // QUANT & INDUSTRIAL STRATEGY'
    },
    {
        id: 'journal-02',
        slug: 'industrial-engineering-synergies',
        title: 'Applying Systems Engineering & Queue Theory to Working Capital',
        category: 'Operations',
        date: '14/11/25',
        readTime: '5 MIN READ',
        excerpt: 'Bridging industrial production line balancing with corporate cash flow velocity to minimize inventory bottleneck costs.',
        featured: false,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        content: `
            <p class="lead-paragraph">Industrial Engineering principles—specifically Little’s Law and Toyota’s Kanban WIP optimization—are directly applicable to corporate financial working capital management.</p>
            <h2>1. Inventory as a Physical & Financial Queue</h2>
            <p>Every dollar locked in raw material work-in-progress represents unhedged capital cost. By modeling inventory flow using M/M/c queuing models, we derive optimal reorder points that minimize total holding and shortage costs under variable lead times.</p>
            <h2>2. Practical Factory Floor Audit Results</h2>
            <p>During a recent industrial supply chain audit, restructuring material buffer zones reduced work-in-progress idle time by 42%, unlocking over $1.2M in annual freed working capital without increasing stockout risk.</p>
        `
    },
    {
        id: 'journal-03',
        slug: 'writing-as-a-research-tool',
        title: 'The Art of Technical Writing: Communicating Industrial Rigor',
        category: 'Engineering',
        date: '08/10/25',
        readTime: '4 MIN READ',
        excerpt: 'Writing is a bridge between quantitative complexity and executive decision-making. Structured narrative frameworks improve enterprise comprehension.',
        featured: false,
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
        content: `
            <p class="lead-paragraph">Technical expertise is only as effective as the clarity with which it is communicated to executive stakeholders. Complex stochastic models mean little if decision-makers cannot grasp their strategic implications.</p>
            <h2>1. The Minto Pyramid Communication Framework</h2>
            <p>Structuring technical whitepapers using top-down conclusions followed by supporting quantitative evidence cuts report review cycles in half. Executives gain immediate strategic clarity, while domain engineers can inspect mathematical proofs in appendix blocks.</p>
            <p>Clear prose forces rigorous thinking. If an engineering concept cannot be explained cleanly in plain language, the underlying mental model is usually flawed.</p>
        `
    },
    {
        id: 'journal-04',
        slug: 'vensim-dairy-scba-modeling',
        title: 'Social Cost-Benefit Analysis: 48-Month Dynamic Systems Simulation',
        category: 'Operations',
        date: '29/09/25',
        readTime: '7 MIN READ',
        excerpt: 'Simulating feed cost volatility, milk yields, and net present value trajectories over a 4-year horizon in agricultural ventures.',
        featured: true, // 2-Column Wide Featured Card
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
        content: `
            <p class="lead-paragraph">Agricultural ventures face extreme seasonal volatility. Static 5-year financial projections fail to capture dynamic feedback loops between feed input costs, livestock health, and daily milk yield variance.</p>
            <h2>1. Vensim Dynamic Stock-and-Flow Architecture</h2>
            <p>Using Vensim dynamic modeling, we constructed a 48-month system dynamics simulator integrating differential equations for revenue inflows, capital depreciation, and statistical sensitivity sweeps (±10% variance).</p>
            <p>The simulation revealed that investing in automated feed dispensing machinery yields a Benefit-Cost Ratio (BCR) of 1.48, making the venture resilient even during peak commodity price inflation cycles.</p>
        `
    },
    {
        id: 'quote-02',
        category: 'Quant & Finance',
        isQuoteCell: true,
        quoteText: '“Precision in data analysis is not about accumulating data points; it is about knowing which signal matters when markets panic.”',
        author: 'SAIDAS B // PORTFOLIO RESEARCH'
    },
    {
        id: 'journal-05',
        slug: 'architectural-lines-and-code',
        title: 'Architectural Geometry in Ink & Code: Parallels in Structural Design',
        category: 'Thoughts',
        date: '15/08/25',
        readTime: '4 MIN READ',
        excerpt: 'Comparing 0.05mm Micron pen drafting with clean modular software engineering. Both demand rigid structural integrity.',
        featured: false,
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        content: `
            <p class="lead-paragraph">There is a deep aesthetic parallelism between fine architectural ink drafting and high-performance software engineering. Both disciplines require establishing rigid structural grid systems before adding intricate functional details.</p>
            <h2>1. Line Weight vs. Code Separation of Concerns</h2>
            <p>In Micron ink drawing, line weight establishes spatial hierarchy—thick foreground lines vs. delicate 0.05mm vanishing point guidelines. Similarly, clean code relies on strict separation of concerns, ensuring high-level domain logic remains unburdened by low-level I/O mechanics.</p>
        `
    },
    {
        id: 'journal-06',
        slug: 'industrial-audit-bom-reengineering',
        title: 'BOM Re-Engineering & Six Sigma Waste Reduction in Manufacturing',
        category: 'Engineering',
        date: '02/07/25',
        readTime: '5 MIN READ',
        excerpt: 'Dissecting Bill of Materials (BOM) hierarchies to eliminate scrap rates, streamline assembly line flow, and enforce quality control.',
        featured: false,
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        content: `
            <p class="lead-paragraph">Bill of Materials (BOM) optimization is one of the most immediate levers for industrial cost reduction. Over-specified tolerances often drive component costs up exponentially without adding functional utility to the final product.</p>
            <h2>1. Value Engineering & Tolerance Optimization</h2>
            <p>By auditing manufacturing BOMs using Six Sigma DMAIC methodology, we identified over-engineered stainless steel fasteners that could be replaced with high-grade composite alternatives, reducing total unit weight by 14% and direct unit cost by 8.5%.</p>
        `
    }
];

window.blogData = blogData;
