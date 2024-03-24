const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",() =>{
    if(window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

function openPDFViewer(pdf) {
        var newWindow = window.open();

        var htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <title>${pdf}</title>
            <style>
          *{
            padding : 0;
            margin : 0;
          }
          embed {
            height: 1000px;
          }
            </style>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">            
        </head>
        <body>
                    <embed src="${pdf}" type="application/pdf" width="100%" height="100%">
        </body>
        </html>
        `;
        newWindow.document.write(htmlContent);
}