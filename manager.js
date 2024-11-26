import bookDetails from "./books.js";

const highestRating = () => {
    const result = bookDetails.filter(book => book.rating > 4.5).map(book => book.title);
    console.log("Highest Rating Books : ", result)
    console.log('-------------------------------------------------------------------------')
}

const printDetails =()=>{
    bookDetails.map(({title,author,rating,genre})=>{
        console.log('-------------------------------------------------------------------------')
        console.log(`Title: ${title}\n Author: ${author}\n Rating: ${rating}\n Genre: ${genre}`);
        console.log('-------------------------------------------------------------------------')
    })
}


const fiction = () => {
    const result = bookDetails.filter(book => book.genre === "Fiction").map(book => book.title);
    console.log("Fiction Books:", result);
    console.log('-------------------------------------------------------------------------')
  };


const Authors = () => {
    const authors = bookDetails.map(book => book.author);
    console.log("Authors:", authors);
    console.log('-------------------------------------------------------------------------')
  };


highestRating();
printDetails();
fiction();
Authors();