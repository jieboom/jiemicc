import createBem from './bem';

export default function createNamespace(name) {
  name = `jiemicc-${name}`;
  return [createBem(name)];
}
