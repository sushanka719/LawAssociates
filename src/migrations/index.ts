import * as migration_20260629_042938 from './20260629_042938';
import * as migration_20260629_120000 from './20260629_120000';

export const migrations = [
  {
    up: migration_20260629_042938.up,
    down: migration_20260629_042938.down,
    name: '20260629_042938'
  },
  {
    up: migration_20260629_120000.up,
    down: migration_20260629_120000.down,
    name: '20260629_120000'
  },
];
