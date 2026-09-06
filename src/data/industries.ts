/**
 * Every per-profession page, merged from the sector modules.
 *
 * Only professions with a live demo behind them get an entry, and each one is
 * written from scratch for that trade - there is no shared boilerplate.
 */
import type { Industry } from './industry/types';
import { core } from './industry/core';
import { professional } from './industry/professional';
import { health } from './industry/health';
import { home } from './industry/home';
import { lifestyle } from './industry/lifestyle';

export type { Industry };

export const industries: Industry[] = [
  ...core,
  ...professional,
  ...health,
  ...home,
  ...lifestyle,
];
