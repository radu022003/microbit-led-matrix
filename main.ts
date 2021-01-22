namespace ShowOff {
    /*
     * Address LEDs lineary
     * 
     */
    //% blockId=showofffillatpos
    //% block="fillAt $pos"
    //% pos.min=0 pos.max=25
    export function fillAtPos(pos: number): void {
        pos |= 0;
        const x = Math.floor(pos % 5);
        const y = Math.floor(pos / 5);
        led.plot(x, y);
    }

    let onLimitReachedHandler: (limit: number) => void;
    let onLimitNotReachedHandler: (limit: number) => void;;

    /**
     * Registers code to run when the radio receives a number.
     */
    //% help=ShowOff/on-received-number
    //% blockId=ShowOff_on_number_drag block="on radio received" blockGap=16
    //% draggableParameters=reporter
    export function onLimitReached(cb: (limit: number) => void) {
        onLimitReachedHandler = cb;
    }

    export function onLimitNotReached(cb: (limit: number) => void) {
        onLimitNotReachedHandler = cb;
    }

    export function checkLimit(pin: AnalogPin) {
        if (pins.analogReadPin(pin) < 40){
            onLimitReachedHandler(4);
        }
        else {
            onLimitNotReachedHandler(0);
        }
    }
}
