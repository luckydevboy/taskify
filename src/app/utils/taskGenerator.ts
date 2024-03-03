import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

const taskGenerator = (length: number) => {
  return Array.from({ length }, () => ({
    id: uuidv4(),
    text: faker.lorem.words({ min: 1, max: 3 }),
    completed: faker.datatype.boolean(),
    dueDate: faker.date
      .between({
        from: '2024-01-01T00:00:00.000Z',
        to: '2024-01-07T00:00:00.000Z',
      })
      .toISOString(),
  }));
};

export default taskGenerator;
