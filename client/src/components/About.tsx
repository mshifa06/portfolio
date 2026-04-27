import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref: sectionRef, isRevealed } = useReveal({ threshold: 0.2 });
  const { ref: techRef, isRevealed: techRevealed } = useReveal({ threshold: 0.3 });

  const technologies = ['C++', 'Java', 'Python', 'SQL', 'TypeScript', 'JavaScript', 'React.js', 'AWS', 'Docker', 'RestAPI', 'Git', 'PyTorch', 'Pandas', 'NumPy'];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="grid md:grid-cols-3 gap-12 md:gap-16"
        >
          <div className={`reveal-left ${isRevealed ? 'revealed' : ''}`}>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              About
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2 space-y-6">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
              data-testid="text-about-intro"
            >
              I’m an engineer who focuses on turning complex security and data challenges into resilient, reliable systems. I’ve always been drawn to how things work under the hood, and I care about creating infrastructure that isn't just functional, but thoughtfully designed to scale over time.
            </p>
            
            <p 
              className={`text-lg text-muted-foreground leading-relaxed reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              I spend most of my time engineering data pipelines and analyzing system vulnerabilities, with experience in AI-powered automation and backend security. I’m particularly interested in the intersection of security and data, specifically how we can build more intelligent systems that protect information without sacrificing performance.

            </p>

            <p 
              className={`text-lg text-muted-foreground leading-relaxed reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              Outside of technical work, I spend my time exploring new ideas in design, working on my own projects, and to get away from the screen, I like to dabble in fictional reading here and there.
            </p>

            <div 
              ref={techRef}
              className={`pt-6 reveal ${techRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-4">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2" data-testid="list-technologies">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm bg-accent rounded-full text-muted-foreground transition-all duration-300 hover:bg-muted-foreground/20 ${
                      techRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: techRevealed ? `${index * 50}ms` : '0ms' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
