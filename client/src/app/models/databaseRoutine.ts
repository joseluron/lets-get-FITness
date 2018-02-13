export class DatabaseRoutine {
    _id: number;
    title: string;
    description: string;
    body: string;
    createdBy: string;
    createdAt: Date;
    likes: string;
    likedBy: Array<string>;
    comments: [
        {
            comment: string;
            commentator: string;
        }
    ];
}
