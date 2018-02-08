export class DatabaseRoutine {
    _id: number;
    title: string;
    description: string;
    body: string;
    createdBy: string;
    createdAt: Date;
    comments: [
        {
            comment: string;
            commentator: string;
        }
    ];
}
