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
    //% blockId=ShowOff_on_number_drag block="on limit reached" blockGap=16
    //% draggableParameters=reporter
    export function onLimitReached(cb: (limit: number) => void) {
        onLimitReachedHandler = cb;
    }
    /**
     * Registers code to run when the radio receives a number.
     */
    //% help=ShowOff/on-received-number
    //% blockId=ShowOff_on_number block="on limit not reached" blockGap=16
    //% draggableParameters=reporter
    export function onLimitNotReached(cb: (limit: number) => void) {
        onLimitNotReachedHandler = cb;
    }

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function checkLimit(pin: AnalogPin) {
        let analogValue = pins.analogReadPin(pin)
        if ( analogValue< 500){
            onLimitReachedHandler(analogValue);
        }
        else {
            onLimitNotReachedHandler(analogValue);
        }
    }
}
