export default interface Task {
  dueDate?: string;
  text: string;
  id: string;
  description?: string;
  completed: 'true' | 'false';
}
