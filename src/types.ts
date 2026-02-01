export type List = {
  id: number
  text: string
  createdOn: string
  status: Status
}

export enum Status {
  Pending = 'pending',
  InProgress = 'in-progress',
  Completed = 'completed',
}
