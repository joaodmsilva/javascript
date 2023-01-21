const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategoies = booksByCategory.length

console.log(totalCategoies);

for(let category of booksByCategory) {
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){ //se nao estiver dentro do array entao adicina 
                authors.push(book.author) //adiciona o autor ao array book.author
            }
        }
    }
    console.log(" Total de autores ", authors.length)
}

countAuthors();


function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do Autor ${author} :  ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');
booksOfAuthor('T. Harv Eker');
booksOfAuthor('George S. Clason');

