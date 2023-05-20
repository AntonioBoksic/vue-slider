// MACROSTRUTTURA

    // INSERISCO IMMAGINI IN HTML
        // INPUT
        /*
        const myArr = [
            "01.webp",
            "02.webp",
            "03.webp",
            "04.webp",
            "05.webp"
        ];
        console.log(myArr);
        */

        const images = [
            {
                image: 'img/01.webp',
                title: 'Marvel-s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel-s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ];

        // creazione variabile container in cui andranno le immagini
        const itemsContainer = document.getElementById("itemsContainer");

        images.forEach((element) =>
            {
                const divElement = `<div class="item">

                    <div class="titleAndText">
                    
                    <h2>
                    ${element.title}
                    </h2>

                    <h3>
                    ${element.text}
                    </h3>
                    

                    </div>
                    
                
                    <img src="${element.image}" alt="">
                </div>`;   

                itemsContainer.innerHTML += divElement;
                
                // const titoloTestoElement = `<div class="titleText">
                // <img src="${element.image}" alt="">
                // </div>`;   

                // itemsContainer.innerHTML += titoloTestoElement

            }

        )

        /*
        for (let i = 0; i<myArr.length; i++) {
            // const item = myArr[i];
            // console.log(item)

            const divElement = `<div class="item">
            <img src="img/0${i+1}.webp" alt="">
            </div>`;
            // const divElement = document.createElement("div");
            // divElement.innerHTML = `<img src="img/${item}">`
            // console.log(divElement);

            itemsContainer.innerHTML += divElement;
            // itemsContainer.append(divElement)
        };
        */

        // SELEZIONIAMO IMMAGINE 0 PER DARE CLASSE ACTIVE   
        let imagePosition = 0;
        let itemNodeList = document.querySelectorAll("#itemsContainer .item");
        console.log(itemNodeList);
        // questa è l'immagine attiva, che cambia dopo i click
        itemNodeList[imagePosition].classList.add("active");

 

        // QUANDO CLICCO AVANTI
        const btnNext = document.getElementById("btnNext");
        btnNext.addEventListener("click",
            function() 
            {
                itemNodeList[imagePosition].classList.remove("active");

                if (imagePosition == images.length-1) {
                imagePosition = -1;
                }

                imagePosition++;

                itemNodeList[imagePosition].classList.add("active");
                console.log(imagePosition);
            }
        );

        // QUANDO CLICCO INDIETRO
        const btnPrevious = document.getElementById("btnPrevious");
        btnPrevious.addEventListener("click",
            function() 
            {

                itemNodeList[imagePosition].classList.remove("active");

                if (imagePosition = 0) {
                imagePosition = myArr.length;
                }

                imagePosition = imagePosition - 1;

                itemNodeList[imagePosition].classList.add("active");
                console.log(imagePosition);
            }
        );

     