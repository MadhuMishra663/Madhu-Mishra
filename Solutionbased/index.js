const book=[
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.9,
      details: [
        { chapter: "Introduction", pages: 20 },
        { chapter: "Chapter 1", pages: 15 }
      ]
    },
  ]

  function Books(book){
    let title=null;
    let maxPage=0;
    book.forEach(item=>{
      item.details.forEach(items=>{
        let maximumPage=parseInt(items.pages);
        if(maximumPage>maxPage){
            maxPage=maximumPage;
            title=item;
        }
      })
    })
    return {title, maxPage}; 
  }
  const result = Books(book);
  console.log(result);

  function UnqueList(book){
    let authors=[];
    book.forEach(writer=>{
     if(!authors.includes(writer.author)){
        authors.push(writer.author);
     }
    })
    return authors;
  }
  const auth= UnqueList(books);
  console.log(auth);
  