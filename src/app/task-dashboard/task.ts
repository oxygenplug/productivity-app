export interface Task {
    title: string,
    text: string,
    tags: string,
    completed: boolean,
    createdAt: Date, //  handled by the backend and return to Task? 
    dueDate: Date,
    id: number;
}