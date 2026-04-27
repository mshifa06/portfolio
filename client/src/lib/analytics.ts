import { track } from '@vercel/analytics';

interface TrackEventOptions {
  action: string;
  category: string;
  label?: string;
  section?: string;
  referrer?: string;
}

export function trackEvent({ action, category, label, section, referrer }: TrackEventOptions) {
  const eventData: Record<string, string> = {
    action,
    category,
    page: typeof window !== 'undefined' ? window.location.pathname : '/',
  };

  if (label) eventData.label = label;
  if (section) eventData.section = section;
  if (referrer) {
    eventData.referrer = referrer;
  } else if (typeof document !== 'undefined' && document.referrer) {
    eventData.referrer = document.referrer;
  }

  track(action, eventData);
}

export function trackNavClick(destination: string, section?: string) {
  trackEvent({
    action: 'nav_click',
    category: 'navigation',
    label: destination,
    section: section || 'header',
  });
}

export function trackCTAClick(ctaName: string, section: string) {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: ctaName,
    section,
  });
}

export function trackProjectClick(projectName: string, linkType: 'demo' | 'source' | 'card') {
  trackEvent({
    action: 'project_click',
    category: 'projects',
    label: projectName,
    section: `projects_${linkType}`,
  });
}

export function trackExternalLink(platform: string, section: string) {
  trackEvent({
    action: 'external_link',
    category: 'social',
    label: platform,
    section,
  });
}

export function trackResumeAction(action: 'view' | 'download') {
  trackEvent({
    action: `resume_${action}`,
    category: 'engagement',
    label: action,
    section: 'resume',
  });
}

export function trackContactAction(method: string) {
  trackEvent({
    action: 'contact_click',
    category: 'engagement',
    label: method,
    section: 'contact',
  });
}
