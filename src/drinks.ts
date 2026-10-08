import { boldMessage } from "./animation";

let drinks: string[] = ["Fanta", "Sprite", "Coke", "Dr.Pepper"];

export function printdrinks(): void{
    var num;
    for(num = 0; num < drinks.length; num++){
        boldMessage(drinks[num]);
    }
}

printdrinks();