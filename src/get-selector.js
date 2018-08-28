import { getTagName } from './get-tag-name';
import { getId } from './get-id';
import { getClasses } from './get-classes';

export const getSelector = element =>
  `${getTagName(element)}${getId(element)}${getClasses(element)}`;
