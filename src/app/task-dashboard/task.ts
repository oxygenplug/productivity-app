export interface Task {
    title: string,
    tags: string,
    priority: number, //delete all of these 
    completed: boolean,
    createdDate: Date, // can be handled by the backend and return to Task? 
    dueDate: Date,
    id: number;
}