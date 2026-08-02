import {
  BookOpen, Terminal, Target, Crown, Wifi, Key, Eye, Zap, Info,
  type LucideIcon,
} from 'lucide-react';

export interface StatConfig {
  val: string;
  labelKey: string;
}

export interface ModuleCardConfig {
  key: string;
  labelKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  stats: StatConfig[];
  icon: LucideIcon;
  ctaKey?: string;
}

export interface GameFeatureConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface StartHereStepConfig {
  titleKey: string;
  descKey: string;
  href: string;
}

export interface HeroCtaConfig {
  labelKey: string;
  href: string;
  style: 'primary' | 'secondary';
}

export const HOME_CONFIG = {
  hero: {
    videoId: 'c0B-TS9Elpo',
    badgeKeys: [
      'home_hero_badge_release',
      'home_hero_badge_price',
      'home_hero_badge_tools',
      'home_hero_badge_genre',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides', style: 'primary' as const },
      { labelKey: 'home_hero_cta_tools', href: '/tools', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_missions', href: '/missions', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'guides', labelKey: 'home_module_guides_label', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides', stats: [{ val: '__guideCount', labelKey: 'home_module_guides_count' }, { val: 'Beginner-Expert', labelKey: 'home_module_guides_range' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'tools', labelKey: 'home_module_tools_label', titleKey: 'home_module_tools_title', descKey: 'home_module_tools_desc', href: '/tools', stats: [{ val: '__heroCount', labelKey: 'home_module_tools_count' }, { val: 'S-A-B-C', labelKey: 'home_module_tier_levels' }], icon: Terminal, ctaKey: 'home_module_tools_cta' },
    { key: 'missions', labelKey: 'home_module_missions_label', titleKey: 'home_module_missions_title', descKey: 'home_module_missions_desc', href: '/missions', stats: [{ val: 'Story+Side', labelKey: 'home_module_mission_types' }, { val: '__familiarCount', labelKey: 'home_module_mission_count' }], icon: Target },
    { key: 'tools-tier-list', labelKey: 'home_module_tierList_label', titleKey: 'home_module_tierList_title', descKey: 'home_module_tierList_desc', href: '/tools-tier-list', stats: [{ val: 'S-A-B-C', labelKey: 'home_module_tier_levels' }, { val: '8', labelKey: 'home_module_rated_tools' }], icon: Crown },
    { key: 'network-hacking', labelKey: 'home_module_network_label', titleKey: 'home_module_network_title', descKey: 'home_module_network_desc', href: '/network-hacking', stats: [{ val: '__ailmentCount', labelKey: 'home_module_strategy_count' }, { val: 'WiFi+Ports', labelKey: 'home_module_vectors' }], icon: Wifi },
    { key: 'password-hacking', labelKey: 'home_module_password_label', titleKey: 'home_module_password_title', descKey: 'home_module_password_desc', href: '/password-hacking', stats: [{ val: '5+', labelKey: 'home_module_protocols' }, { val: 'SSH+FTP+HTTP', labelKey: 'home_module_attack_types' }], icon: Key },
    { key: 'stealth-strategy', labelKey: 'home_module_stealth_label', titleKey: 'home_module_stealth_title', descKey: 'home_module_stealth_desc', href: '/stealth-strategy', stats: [{ val: 'Low', labelKey: 'home_module_noise_level' }, { val: 'WiFi+Logs', labelKey: 'home_module_stealth_tools' }], icon: Eye },
    { key: 'updates', labelKey: 'home_module_updates_label', titleKey: 'home_module_updates_title', descKey: 'home_module_updates_desc', href: '/updates', stats: [{ val: 'EA', labelKey: 'home_module_access_type' }, { val: '2026', labelKey: 'home_module_release_year' }], icon: Zap },
    { key: 'developer', labelKey: 'home_module_dev_label', titleKey: 'home_module_dev_title', descKey: 'home_module_dev_desc', href: '/developer', stats: [{ val: 'HotBunny', labelKey: 'home_module_dev_name' }, { val: 'Modding', labelKey: 'home_module_modding' }], icon: Info },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_realTools', descKey: 'home_feature_realTools_desc', icon: Terminal },
    { titleKey: 'home_feature_missions', descKey: 'home_feature_missions_desc', icon: Target },
    { titleKey: 'home_feature_stealth', descKey: 'home_feature_stealth_desc', icon: Eye },
    { titleKey: 'home_feature_modding', descKey: 'home_feature_modding_desc', icon: Zap },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/tools' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/missions' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/tools-tier-list' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/stealth-strategy' },
  ] as StartHereStepConfig[],

  gameOverview: {
    infoItems: ['developer', 'publisher', 'platform', 'genre', 'releaseDate', 'price', 'reviews', 'modding'],
    cta: {
      guideLabelKey: 'home_about_cta',
      guideHref: '/guides',
      externalLabelKey: 'home_cta_steam',
      externalLinkKey: 'steam',
    },
  },

  faq: {
    keys: ['firstSteps', 'bestTool', 'suspicionSystem', 'bugbountyMission', 'storyChoices', 'toolUnlock', 'moddingSupport', 'realisticTools', 'stealthTips', 'missionSystem'],
  },

  bottomCta: {
    guideHref: '/guides',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'steam',
    externalLabelKey: 'home_cta_steam',
  },
};
