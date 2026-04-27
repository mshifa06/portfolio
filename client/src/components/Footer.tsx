import { Github, Linkedin, Twitter } from 'lucide-react';
import { trackExternalLink } from '@/lib/analytics';
import { useReveal } from '@/hooks/useReveal';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/SarthakJain2' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/sarthak-jain2/' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/sarthak_jain1' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, isRevealed } = useReveal({ threshold: 0.5 });

  return (
    <footer ref={ref} className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div 
          className={`flex flex-col md:flex-row items-center justify-between gap-6 reveal ${isRevealed ? 'revealed' : ''}`}
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLink(link.name.toLowerCase(), 'footer')}
                className={`icon-animate p-2 text-muted-foreground hover:text-foreground transition-all duration-300 ${
                  isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`link-social-${link.name.toLowerCase()}`}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>

          <p 
            className={`text-sm text-muted-foreground transition-all duration-500 ${
              isRevealed ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
            data-testid="text-copyright"
          >
            © {currentYear} Sarthak Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
