import { getTagName } from './getTagName';
import { getId } from './getId';
import { getClasses } from './getClasses';

export const getSelector = element =>
  `${getTagName(element)}${getId(element)}${getClasses(element)}`;
