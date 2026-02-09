export type List = {
  id: number
  text: string
  createdOn: string
  completedOn?: string
  status: Status
  priority: Priority
  notes?: string
}

export enum Status {
  Pending = 'pending',
  InProgress = 'in-progress',
  Completed = 'completed',
}
export enum Priority {
  Low = 'low',
  Normal = 'normal',
  High = 'high',
  Urgent = 'urgent',
}
