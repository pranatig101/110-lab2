export function boldMessage(message: string): void {
    console.log(`\x1b[1m${message}\x1b[0m`); // Bold
}
