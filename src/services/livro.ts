export const BuscaBooks = async () => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Livros');


    return response;
}

export const GetBook = async(id: number) => {
    const response = await fetch(`https://scot13.tst.marttech.com.br/api/Livros/${id}`);
    return response;
}