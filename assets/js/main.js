// lev1_1

// function intro() {
//     console.log("Hello World");
// }

// intro = () => {
//     console.log("Hello World");
//   } 

// intro = () => console.log("Hello World");


let adult = () => document.write("Ich bin 18 Jahre alt.<br>");

adult();

// Lev1_2

// function hallo() {
//     console.log("Hallo");
// }

let hallo = () => document.write("Hallo<br>");
hallo();

let x = 2;
let y = 3;

let sum = () => {
    return x + y;
}

let result = sum();
document.write(result + "<br>");

let multiply = () => {
    return x * y;
}

let result2 = multiply();
alert(result2);

let typeOf = (par1) => {
    return typeof (par1);
}

let result3 = typeOf(true);
document.write(result3 + "<br>");

let result4 = typeOf("hi");
document.write(result4 + "<br>");

let result5 = typeOf(1);
document.write(result5 + "<br>");

let result6 = typeOf({ name: "John" });
document.write(result6 + "<br>");

let result7 = typeOf([0, 1]);
document.write(result7 + "<br>");

// lev1_4

let hero = (heroName, heroPower, heroEnemy) => {
    let ism = "Mein Lieblingsheld aus Marvel ist: " + heroName + "<br>";
    let power = "Er/Sie hat die Fähigkeit: " + heroPower + "<br>";
    let enemy = "Sein/Ihr größter Gegner ist: " + heroEnemy + "<br>";
    return ism + power + enemy;
}

let result8 = hero("Captain America", "Schild", "Thanos");
document.write(result8 + "<br>");


// Lev1_6

let returnOne = () => {
    return 1;
}

let m = 1;
let n = returnOne();

if (m === n) {
    console.log("Wird das gedruckt?");
}

// Lev1_7

let lev17 = (para1) => {
    return para1 * 2;
}

let result9 = lev17(2)
console.log(result9);

// Lev1_8

let myAge = (yearBorn) => {
    return 2022 - yearBorn;
}

let result10 = myAge(1987);
console.log(result10);

let compareAge = (alter1, alter2) => {
    let alterDiff = alter1 - alter2;
    return alterDiff;
}

let result11 = compareAge(28, 35);
console.log(Math.abs(result11));

// Lev1_9 

let aboutMe = (vorname, lastname, geburtsort, alter, wohnort) => {
    let text = "";
    return text.concat(`<br><br>Mein Name ist ${vorname} ${lastname}.<br> Ich bin in ${geburtsort} geboren.<br> Ich lerne Coden bei SuperCode.<br> Ich bin ${alter} alt.<br> Ich wohne in ${wohnort}.<br>`);
}

let result12 = aboutMe("Bashar", "Shaheen", "Syrien", "34 Jahre", "Düsseldorf");
document.write(result12);

let result13 = aboutMe("Michaela", "Werthmann", "Deutschland", "34 Jahre", "in der Nähe von Würzburg");
document.write(result13);