/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import he from '../locales/he';

/**
 * The faker instance for the `he` locale.
 *
 * - Language: Hebrew
 * - Endonym: עברית
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `he`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [he, en, base],
});
