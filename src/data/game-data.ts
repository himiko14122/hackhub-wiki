// HackHub game data — replaces HackHub Awakening data
// This file provides data structures used by homepage and category page components
import type { LucideIcon } from 'lucide-react';
import { Search, Key, Globe, Terminal, Radio, Plug, ArrowUpRight, Download, Shield, Zap, Eye, Flame, Users, BookOpen, Bug, ListChecks } from 'lucide-react';

export interface HeroEntry {
  id: string;
  nameKey: string;
  name: string;
  tier: string;
  icon: string;
  description: string;
  ailmentKey: string;
  factionKey: string;
}

export interface AilmentEntry {
  id: string;
  nameKey: string;
  descKey: string;
  name: string;
  tier: string;
  icon: string;
  description: string;
}

export interface FamiliarEntry {
  id: string;
  nameKey: string;
  badgeKey: string;
  sourceKey: string;
  name: string;
  tier: string;
  icon: string;
  description: string;
}

// Tool tier data as array (homepage expects heroes.map())
export const heroes: HeroEntry[] = [
  { id: 'nmap', nameKey: 'tool_nmap', name: 'nmap', tier: 'S', icon: 'search', description: 'Network scanning & port discovery', ailmentKey: 'ailment_recon', factionKey: 'faction_offensive' },
  { id: 'hydra', nameKey: 'tool_hydra', name: 'hydra', tier: 'S', icon: 'key', description: 'Password cracking & brute force', ailmentKey: 'ailment_cracking', factionKey: 'faction_offensive' },
  { id: 'nslookup', nameKey: 'tool_nslookup', name: 'nslookup', tier: 'A', icon: 'globe', description: 'DNS reconnaissance & lookup', ailmentKey: 'ailment_recon', factionKey: 'faction_recon' },
  { id: 'ssh', nameKey: 'tool_ssh', name: 'SSH', tier: 'A', icon: 'terminal', description: 'Secure remote shell access', ailmentKey: 'ailment_exploit', factionKey: 'faction_offensive' },
  { id: 'telnet', nameKey: 'tool_telnet', name: 'telnet', tier: 'B', icon: 'radio', description: 'Remote connection protocol', ailmentKey: 'ailment_exploit', factionKey: 'faction_recon' },
  { id: 'netcat', nameKey: 'tool_netcat', name: 'netcat', tier: 'B', icon: 'plug', description: 'Network utility tool', ailmentKey: 'ailment_exploit', factionKey: 'faction_utility' },
  { id: 'curl', nameKey: 'tool_curl', name: 'curl', tier: 'C', icon: 'arrow-up-right', description: 'Data transfer tool', ailmentKey: 'ailment_recon', factionKey: 'faction_utility' },
  { id: 'wget', nameKey: 'tool_wget', name: 'wget', tier: 'C', icon: 'download', description: 'File download utility', ailmentKey: 'ailment_recon', factionKey: 'faction_utility' },
];

// Hacking strategies as "status ailments" for homepage module compatibility
export const statusAilments: AilmentEntry[] = [
  { id: 'recon', nameKey: 'ailment_recon', descKey: 'ailment_recon_desc', name: 'Reconnaissance', tier: 'S', icon: 'search', description: 'Network scanning and information gathering' },
  { id: 'cracking', nameKey: 'ailment_cracking', descKey: 'ailment_cracking_desc', name: 'Password Cracking', tier: 'S', icon: 'key', description: 'Brute force and dictionary attacks' },
  { id: 'stealth', nameKey: 'ailment_stealth', descKey: 'ailment_stealth_desc', name: 'Stealth Hacking', tier: 'A', icon: 'eye', description: 'Low-noise covert operations' },
  { id: 'exploit', nameKey: 'ailment_exploit', descKey: 'ailment_exploit_desc', name: 'Exploitation', tier: 'A', icon: 'zap', description: 'Vulnerability exploitation and pivoting' },
  { id: 'social', nameKey: 'ailment_social', descKey: 'ailment_social_desc', name: 'Social Engineering', tier: 'B', icon: 'users', description: 'Human-targeted manipulation' },
];

// Mission types as "familiars" for homepage module compatibility
export const familiars: FamiliarEntry[] = [
  { id: 'story', nameKey: 'familiar_story', badgeKey: 'familiar_story_badge', sourceKey: 'familiar_story_source', name: 'Story Missions', tier: 'S', icon: 'book-open', description: 'Main campaign progression' },
  { id: 'bugbounty', nameKey: 'familiar_bugbounty', badgeKey: 'familiar_bugbounty_badge', sourceKey: 'familiar_bugbounty_source', name: 'BugBounty Hub', tier: 'A', icon: 'bug', description: 'Special vulnerability missions' },
  { id: 'side', nameKey: 'familiar_side', badgeKey: 'familiar_side_badge', sourceKey: 'familiar_side_source', name: 'Side Objectives', tier: 'B', icon: 'list-checks', description: 'Optional challenges and rewards' },
];

// Tool tier lookup
export const toolTiers: Record<string, HeroEntry> = {};
heroes.forEach(h => { toolTiers[h.id] = h; });

export function tierColor(tier: string): string {
  const colors: Record<string, string> = {
    S: '#00ff41',
    A: '#00d4ff',
    B: '#3b82f6',
    C: '#6b7280',
    D: '#4b5563',
  };
  return colors[tier] || '#6b7280';
}

export function ailmentColor(_ailment: string): string {
  return '#ff0055';
}

export function factionColor(_faction: string): string {
  return '#00d4ff';
}

// Lucide React icon components for homepage rendering
export const HERO_ICONS: Record<string, LucideIcon> = {
  nmap: Search,
  hydra: Key,
  nslookup: Globe,
  ssh: Terminal,
  telnet: Radio,
  netcat: Plug,
  curl: ArrowUpRight,
  wget: Download,
};

export const AILMENT_ICONS: Record<string, LucideIcon> = {
  recon: Search,
  cracking: Key,
  stealth: Eye,
  exploit: Zap,
  social: Users,
};

export const FAMILIAR_ICONS: Record<string, LucideIcon> = {
  story: BookOpen,
  bugbounty: Bug,
  side: ListChecks,
};
