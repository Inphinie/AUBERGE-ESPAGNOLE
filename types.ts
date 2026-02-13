export interface SubSection {
  title: string;
  content: string[];
  highlight?: string; // For a quote or emphasized text
}

export interface Act {
  id: string;
  title: string;
  subtitle: string;
  intro?: string;
  subsections: SubSection[];
  iconName: 'Cpu' | 'ShieldAlert' | 'Ghost' | 'Shuffle' | 'GlobeLock' | 'Terminal';
}

export interface NavItem {
  id: string;
  label: string;
}