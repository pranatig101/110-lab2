const snacks: string[] = ["chips", "fruit", "cheese"];

export function printSnacks(): void {
        for (const s of snacks){
                console.log(s);
        }
}

printSnacks();