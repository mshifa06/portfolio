import { Mail, MapPin, Send } from 'lucide-react';
import { trackContactAction } from '@/lib/analytics';
import { useReveal } from '@/hooks/useReveal';

export function Contact() {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal({ threshold: 0.3 });
  const { ref: cardsRef, isRevealed: cardsRevealed } = useReveal({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div 
            ref={headerRef}
            className={`reveal-left ${headerRevealed ? 'revealed' : ''}`}
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Contact
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2 space-y-8">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed reveal ${headerRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and design. Feel free to reach out.
            </p>

            <div ref={cardsRef} className="space-y-4">
              <a
                href="mailto:sjain1@seas.upenn.edu"
                onClick={() => trackContactAction('email')}
                className={`card-animate flex items-center gap-4 p-4 bg-card border border-border rounded-lg group reveal ${cardsRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '100ms' }}
                data-testid="link-contact-email"
              >
                <div className="p-3 bg-accent rounded-full transition-all duration-300 group-hover:bg-muted-foreground/20">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">sjain1@seas.upenn.edu</p>
                </div>
              </a>

              <div 
                className={`flex items-center gap-4 p-4 bg-card border border-border rounded-lg reveal ${cardsRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="p-3 bg-accent rounded-full">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium" data-testid="text-location">New York City, NY</p>
                </div>
              </div>
            </div>

            <div 
              className={`pt-4 reveal ${cardsRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <a
                href="mailto:sjain1@seas.upenn.edu?subject=Hello from your portfolio"
                onClick={() => trackContactAction('send_message')}
                className="btn-animate inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4" />
                Send a message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
