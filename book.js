let myLibrary = [];
function Book(title, author,numberOfPages,read) {
    this.title = title
    this.author = author
    this.numberOfPages=numberOfPages;
    this.read=read;
  }
  function addBookToLibrary(book) {
    console.log(book.read)
    myLibrary.push(book);
    const bookcontainer = document.querySelector(".book");
    let bookcard = bookcontainer.cloneNode(true);
    let checkbox = bookcard.querySelector('input[type="checkbox"]'); //para el switch
    bookcard.style.display="flex";
    bookcard.setAttribute("id", myLibrary.length-1);
    bookcard.querySelector("#booktitle").innerHTML=book.title;
    bookcard.querySelector("#bookauthor").innerHTML=book.author
    bookcard.querySelector("#bookpages").innerHTML=book.numberOfPages + " pages"; 
    if(book.read=="on"){
      checkbox.checked=true;
    }
    else{
      checkbox.checked=false;
    }
    const btn=bookcard.querySelector("#remove");
    btn.onclick = () => removeBook(bookcard.id);
    checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      book.read=true;
    } else {
      book.read=false;
    }
  });
    bigcontainer.appendChild(bookcard);
      }
  function removeBook(index){
    let node = document.getElementById(`${index}`);
    bigcontainer.removeChild(node);
    myLibrary.splice(index, 1);
  }
function toggleBlur(){
  bigcontainer.classList.toggle('active');
  container.classList.toggle('active');
}
function untoggleBlur(){
  bigcontainer.classList.toggle('active');
  container.classList.toggle('active');
}

  const bigcontainer=document.querySelector('.bigcontainer');
  const books=document.querySelectorAll(".book");
  const removes=document.querySelectorAll("#remove");
  const button=document.querySelector("#addbook");
  const submitbutton=document.querySelector("#submit");
  const container=document.querySelector("#container");

  button.onclick = () => {
    toggleBlur();
}
  submitbutton.addEventListener('click', () => {
    untoggleBlur();
    const formData = new FormData(document.querySelector('form'));
    const newbook= new Book(formData.get('title'),formData.get('author'),formData.get('pages'),formData.get('read'));
    addBookToLibrary(newbook);
    document.getElementById("myForm").reset();
  });
  