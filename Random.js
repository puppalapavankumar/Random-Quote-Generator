document.addEventListener("DOMContentLoaded",function(){
    let quotelist =[
        {
            quote :"Be the change that you wish to see in the world.",
            author:"Mahatma Gandhi "
       },
       {
            quote :"“The journey of a thousand miles begins with a single step.” ",
            author:"Lao Tzu "
       },
       {
            quote :"“Don’t cry because it’s over, smile because it happened.”",
            author :"Dr. Seuss"
       },
       {
           quote:" “The only thing we have to fear is fear itself.” ",
           author : "D. Roosevelt "
       },
       {  
            quote:" “Be yourself; everyone else is already taken.” ",
            author : "Oscar Wilde"
    
       },
       {
            quote : "“The unexamined life is not worth living.” ",
            author: "  Socrates"
       },
       {
            quote : "“If you tell the truth, you don’t have to remember anything.” ",
            author : "Socrate "
       },
       {
            quote :"“The most important thing is to enjoy your life .” ",
            author :" Audrey Hepburn"
       },
       {
            quote :" “The more you know, the more you realize how much you don’t know.” ",
            author :"Albert Einstein "
       },
       {
            quote: " “Life is very short .Always be Happy.” ",
             author :"p.pavankumar"
       },
    ];
    let quotesEle=document.getElementById("quote");
    let authorEle = document.getElementById("author");

    function getlocalquotes(){
        let i=Math.floor(Math.random()* quotelist.length);
        quotesEle.innerText=quotelist[i].quote;
        authorEle.innerText="-" + " " + quotelist[i].author;
    }
     document.getElementById("getQuote").addEventListener("click",getlocalquotes);
    });
    
    