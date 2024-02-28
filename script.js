fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
        console.log(response);

        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Errore");
        }
    })

    .then((books) => {
        books.forEach((book) => {
            const bookCard = document.getElementById("book-card");

            const col = document.createElement("div");
            col.className = "col-sm-4 col-lg-3";

            const card = document.createElement("div");
            card.className = "card mb-3";
            card.style = "max-width: 18rem;";

            const img = document.createElement("img");
            img.src = book.img;
            img.className = "card-img-top";
            img.alt = book.title;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = book.title;

            const price = document.createElement("p");
            price.className = "card-text";
            price.textContent = `Prezzo: € ${book.price}`;

            const btnScarta = document.createElement("button");
            btnScarta.className = "btn btn-danger";
            btnScarta.textContent = "Scarta";
            btnScarta.onclick = () => {
                col.remove();
            };

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(btnScarta);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            bookCard.appendChild(col);

            return col;
        });
    });
