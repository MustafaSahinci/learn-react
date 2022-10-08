import React from 'react'
import Book from './Book'

function RenderingList() {
  const bookList = [
    "To kill a mockingbird",
    "The great gatsby",
    "The catcher in the rye"
  ]

  const books = [
    {
        title: "To kill a mockingbird",
        author: "Herper Lee",
        pages: 281
    },
    {
        title: "The great gatsby",
        author: "f. scott fitzgerald",
        pages: 218
    },
    {
        title: "The catcher in the rye",
        author: "j. d. salinger",
        pages: 234
    },
  ]
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr/>
        {books.map(book => {
            return (
                <div key={book.title}>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
            )
        })}
        <hr/>
        {
            books.map(book =>{
                return <Book key={book.title} book={book}/>
            })
        }
    </div>
  )
}

export default RenderingList