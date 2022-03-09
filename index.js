const tomb = [1, 6, 4, 5, 3, 9, 8, 7];
const pelda1 = document.querySelector('.input_pelda1');
let input_pelda1;
let szam;
let kivalasztasIndex;
let osszeg = 0;
function szamFrissitese (e) {
    input_pelda1 = Number(e.target.value)
}

// Tömb listázása
    // Tömb kiválasztása a DOM-ból
    const tombLista = document.querySelector('#tomb ul');

    const tombListaElem = tomb.map((szam, index) => {
        console.log(`szam: ${szam}, index: ${index}`);
        // "li" elem létrehozása
        const nodeLi = document.createElement('li')
        nodeLi.className="list-group-item"
        numNode = document.createTextNode(szam)

        // li-hez hozzáadjuk a számot
        nodeLi.appendChild(numNode)
        // az ul-hez hozzáadjuk az li-t
        tombLista.appendChild(nodeLi)
    })

function highlightNumber () {
    // active class-ok törlése
    Array.from(tombLista.children).forEach((item) => {
        item.classList.remove("active")
    })
    // active class hozzáadása
    tombLista.children.item(kivalasztasIndex).classList.add("active")
}

// ============ KIVÁLASZTÁS ============
// function kivalasztas () {
//     let i = 0;
//     if(!tomb.includes(input_pelda1)) {
//         alert('Ne szórakozzál, a listából válassz!')
//     } else {
//         do {
//             console.log(i)
//             i++
//         } while (tomb[i] !== input_pelda1);
//     }
//     kivalasztasIndex = i;
//     highlightNumber()
// }

// ============ ÖSSZEGZÉS ============
const osszegzes = () => {
    console.log("összegzés")
    let length = tomb.length;
    console.log(" 🚀 ~ file: index.js ~ line 56 ~ osszegzes ~ length", length)

    for(i = 0; i < length; i++) {
        console.log(tomb[i])
        console.log('Hello')
        osszeg += Number(tomb[i]);
    }
    console.log(" 🚀 ~ file: index.js ~ line 59 ~ osszegzes ~ osszeg", osszeg)
    const sumTitle = document.querySelector(".sum-title");
    const osszegNode = document.querySelector(".osszeg");
    osszegNode.innerHTML = osszeg;
    sumTitle.classList.add('visible')

}

// Event listeners
// pelda1.addEventListener('keyup', szamFrissitese);