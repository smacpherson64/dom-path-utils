import { getTagName } from './get-tag-name';
import { getId } from './get-id';
import { getClasses } from './get-classes';
import { getAttribute } from './get-attribute';

export const getSelector = (element, attributes = ['id', 'class']) => {
  const base = getTagName(element);

  if (Array.isArray(attributes) === false || attributes.length === 0) {
    return base;
  }

  return attributes.reduce((acc, attribute) => {
    switch (attribute) {
      case 'id':
        return `${acc}${getId(element)}`;
      case 'class':
        return `${acc}${getClasses(element)}`;
      default:
        return `${acc}${getAttribute(attribute, element)}`;
    }
  }, base);
};
