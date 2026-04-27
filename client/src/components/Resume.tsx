import { Download, Eye } from 'lucide-react';
import { trackResumeAction } from '@/lib/analytics';
import { useReveal } from '@/hooks/useReveal';

export function Resume() {
  const resumeUrl = '/resume.pdf';
  const { ref, isRevealed } = useReveal({ threshold: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative">
        <div ref={ref} className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className={`reveal-left ${isRevealed ? 'revealed' : ''}`}>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Resume
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed mb-8 reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              Want a quick overview of my experience and skills? Download my resume 
              or view it directly in your browser.
            </p>

            <div 
              className={`flex flex-wrap gap-4 reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackResumeAction('view')}
                className="btn-animate inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                data-testid="button-view-resume"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </a>
              <a
                href={resumeUrl}
                download="Sarthak_Jain_Resume.pdf"
                onClick={() => trackResumeAction('download')}
                className="btn-animate inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-accent hover:border-muted-foreground/30"
                data-testid="button-download-resume"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
