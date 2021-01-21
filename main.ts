namespace ShowOff {

    export function fillAtPos(pos: number): void {
        pos |= 0;
        const x = Math.floor(pos % 5);
        const y = Math.floor(pos / 5);
        led.plot(x, y);
    }
}
