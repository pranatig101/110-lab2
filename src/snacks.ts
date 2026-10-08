const snacks: string[] = ["chips", "fruit", "cheese"];

export function printSnacks(sl: string[]): void {
        for (const s of sl){
                console.log(s);
        }
}

printSnacks(snacks);