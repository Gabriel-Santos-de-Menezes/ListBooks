import { BooksListDTO } from "../ListBooks/types";

export interface BookDTO{
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
    favoritos: [];
}

export interface BookProps{
    data: BookDTO;
}