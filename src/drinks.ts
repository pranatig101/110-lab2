
let drinks: String[] = ["Fanta", "Sprite", "Coke", "Dr.Pepper"];

export function printdrinks(): void{
    var num;
    for(num = 0; num < drinks.length; num++){
        console.log(drinks[num]);
    }
}

printdrinks();