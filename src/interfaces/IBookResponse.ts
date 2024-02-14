export interface IBookResponse {
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
    totalPages: number;
    data: IBook[]
}

export interface IBookResponseSingle {
    data: {
        data: IBook
    };
}

export interface IBook {
    id: string;
    title: string;
    description: string;
    url: string;
    image: string;
    author: string;
    active: boolean;
    created_at: number;
    updated_at: number;
}

export interface IBookRender extends Omit<IBook, "created_at" | "updated_at" | "active" | "url" | "description"> {}