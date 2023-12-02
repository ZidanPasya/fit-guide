import Dexie from 'dexie';

export const db = new Dexie('favExercises');
db.version(1).stores({
  exercise: 'id,name,gifUrl,bodyPart,target, equipment',
});
