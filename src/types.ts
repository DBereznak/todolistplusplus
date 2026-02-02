export type List = {
  id: number
  text: string
  createdOn: string
  status: Status
  priority: Priority
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
