export interface Article {
    title: string;
    content: string;
    sections : {
        title: string;
        content: string;
    }[];
}