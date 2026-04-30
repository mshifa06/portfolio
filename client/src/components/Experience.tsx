import { useReveal } from '@/hooks/useReveal';

const experiences = [
  {
    id: 1,
    role: 'Data Engineer Intern',
    company: 'PromptlyAI',
    //companyUrl: 'https://staronewireless.com/',
    period: 'August 2025 - November 2025',
    description: 'Built an end-to-end internal reporting platform that scaled data delivery across teams, automating high-volume report access and migrating large datasets from DynamoDB to Redshift to support reliable, self-serve analytics.',
    highlights: ['Distributed Systems', 'System Design', 'Data Engineering', 'Reliability at Scale'],
  },
/*  {
    id: 2,
    role: 'Incoming Summer Software Engineer Intern',
    company: 'Robinhood',
    companyUrl: 'https://robinhood.com/',
    period: 'May 2026 - August 2026',
    description: 'Incoming Summer 2026 intern focused on building scalable, high-impact systems for consumer finance and investing platforms.',
    highlights: ['Distributed Systems', 'Product Engineering', 'Cloud Infrastructure', 'Database Systems'],
  },
  {
    id: 3,
    role: 'ML Engineer & Researcher',
    company: 'Cactus (YC S25)',
    companyUrl: 'https://cactuscompute.com/',
    period: 'January 2026 - Present',
    description: 'Working on low-level kernels and inference runtimes that enable fast, private on-device AI on mobile hardware.',
    highlights: ['Distributed Systems', 'Product Engineering', 'Reliability at Scale'],
  },
  {
    id: 4,
    role: 'Software Development Engineer Intern',
    company: 'Amazon Web Services (AWS)',
    companyUrl: 'https://aws.amazon.com/',
    period: 'May 2025 — August 2025',
    description: 'Built an end-to-end internal reporting platform that scaled data delivery across teams, automating high-volume report access and migrating large datasets from DynamoDB to Redshift to support reliable, self-serve analytics.',
    highlights: ['Java', 'System Design', 'Scaling', 'Full-Stack Development'],
  },
  {
    id: 5,
    role: 'Undergraduate Researcher ',
    company: 'Machine Learning Lab',
    companyUrl: 'http://www.wanghao.in/',
    period: 'December 2023 — May 2025',
    description: 'Researched the limits of symbolic reasoning in large language models by contributing to the MMLU-SR benchmark and evaluating state-of-the-art models published at EMNLP GenBench.',
    highlights: ['On-Device Inference', 'Systems Programming', 'Performance Optimization'],
  },
  {
    id: 6,
    role: 'Undergraduate Researcher',
    company: 'Rutgers Rail and Transit Lab',
    companyUrl: 'https://rail.rutgers.edu/#/home',
    period: 'September 2023 — May 2025',
    description: 'Applied computer vision and full-stack tooling to real-world rail safety problems, contributing to a published research paper on AI-driven infrastructure monitoring.',
    highlights: ['Python', 'Computer Vision', 'Applied AI', 'Real-World Systems'],
  },
  {
    id: 7,
    role: 'Software Engineer Intern',
    company: 'Gateway (Acquired by Circle)',
    companyUrl: 'https://www.circle.com/',
    period: 'June 2024 - August 2024',
    description: 'Worked on core Web3 protocol infrastructure, building zero-knowledge rollups and developer tooling to issue and consume verifiable credentials at scale.',
    highlights: ['Rust', 'Web3 Infrastructure', 'Developer Experience', 'Protocol Engineering'],
  },
*/  
];

function ExperienceItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, isRevealed } = useReveal({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`group relative reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      data-testid={`experience-item-${exp.id}`}
    >
      {index !== experiences.length - 1 && (
        <div className="absolute left-0 top-8 bottom-0 w-px bg-border -mb-12 hidden md:block" />
      )}
      
      <div className="relative pl-0 md:pl-6">
        <div 
          className={`absolute left-0 top-2 w-2 h-2 rounded-full bg-muted-foreground hidden md:block transition-all duration-500 ${
            isRevealed ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        />
        
        <div className="mb-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">
              {exp.role}{' '}
              <span className="text-muted-foreground">@</span>{' '}
              <a 
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-transparent hover:decoration-current transition-all duration-300 decoration-1 underline-offset-2"
                data-testid={`link-company-${exp.id}`}
              >
                {exp.company}
              </a>
            </h3>
            <span className="text-sm font-mono text-muted-foreground">
              {exp.period}
            </span>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          {exp.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {exp.highlights.map((highlight, hIndex) => (
            <span
              key={highlight}
              className={`px-2 py-0.5 text-xs font-mono bg-accent rounded text-muted-foreground transition-all duration-300 ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${index * 150 + 300 + hIndex * 50}ms` }}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal({ threshold: 0.3 });

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div 
            ref={headerRef}
            className={`reveal-left ${headerRevealed ? 'revealed' : ''}`}
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Experience
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2 space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
