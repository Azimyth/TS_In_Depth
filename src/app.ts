import {
    createCustomer,
    createCustomerID,
    getAllBooks,
    getBookByID,
    getBooksByCategory,
    getBooksByCategoryPromise,
    getBookTitlesByCategory,
    getProperty,
    getTitles,
    logBookTitles,
    logCategorySearch,
    logFirstAvailable,
    logSearchResults,
    printBook,
    printRefBook,
    purge,
    сheckoutBooks
} from './functions';
import { UL, Library, Shelf } from './classes';
import RefBook from './classes/encyclopedia';
import Encyclopedia from './classes/encyclopedia';
import { Book, Magazine } from './interfaces';
import { Category } from './enum';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// getBookAuthorByIndex(1);


// Task 03.01
// const myID = createCustomerID('Igor', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 1));


// Task 03.02
// createCustomer('Vika');
// createCustomer('Vika', 25);
// createCustomer('Vika', 25, 'Kharvik');
// console.log(getBookTitlesByCategory());
// logFirstAvailable()
// console.log(getBookByID(1));
// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);


//Task 03.03
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
// console.log(getTitles(true));
// console.log(getTitles(2, true));
// console.log(getTitles('Andrea Chiarelli'));


//Task 03.04.
// console.log(bookTitleTransform('title'));
// bookTitleTransform(23);


// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');


// Task 04.02
// const logDamage: Logger =
//     (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');


// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'ann@example.com',
//     numBooksPublished: 1
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: (custName: string) => console.log(custName)
// }


// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);


// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// getProperty(myBook, 'isbn');


// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(9, 'TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher)
// console.log(ref.getID());


// Task 05.02, Task 05.03
// const refBook = new RefBook(9, 'TypeScript', 2021, 2);
// refBook.printItem();
// refBook.printCitation();


// Task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');


// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     email: 'anna@mail.com',
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     title: 'Use Angular Anywhere'
// };


// Task 06.03
// const refBook = new RefBook(1, 'TypeScript', 2021, 2);
// printRefBook(refBook);
// const universityLibrarian = new UL.UniversityLibrarian();
// printRefBook(universityLibrarian);


// Task 06.05
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[2]);
//         })
// }


// Task 06.06
// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     name: 'Boris',
//     address: 'Kharkiv'
// };


// Task 07.01
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const result = purge<Book>(inventory);
// console.log(result)
// const result2 = purge<number>([1, 2, 3, 4]);
// console.log(result2)


// Task 07.02, Task 07.03
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'))
// console.log(getProperty(getAllBooks()[0], 'title'))


// Task 07.04
// const book: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     markDamaged: null,
//     pages: 100,
//     title: 'unknown'
// };

// const updBook: UpdatedBook = {
//     id: 2,
//     author: 'Boris'
// }

// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];


// Task 08.01, Task 08.02
// const unLib = new UL.UniversityLibrarian();
// unLib.b = 1;
// UL.UniversityLibrarian['c'] = 1;
// Object.getPrototypeOf(unLib)['d'] = 1;
// unLib.name = 'Anna';
// unLib['printLibrarian']();


// Task 08.03
// unLib.assistFaculty = null;
// unLib.teachCommunity = null;


// Task 08.04
// const enc = new RefBook(1, 'TypeScript', 2021, 2)
// enc.printItem();


// Task 08.05, Task 08.06
// const unLib = new UL.UniversityLibrarian();
// console.log(unLib);
// unLib.name = 'Anna';
// unLib.assistCustomer('Boris');


// Task 08.07
// const enc = new RefBook(1, 'TypeScript', 2021, 2);
// enc.copies = -2;
// console.log(enc);


// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');


//Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles)
//         return titles.length;
//     })
//     .then(n => console.log(n))
//     .catch(err => console.log(err));

// getBooksByCategoryPromise(Category.Software)
//     .then(titles => {
//         console.log(titles)
//         return titles.length;
//     })
//     .then(n => console.log(n))
//     .catch(err => console.log(err));
// console.log('End');


// Task 09.03
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software)
//     .catch(err => console.log(err));
// console.log('End');