const enum ADDRESS {
    //% block=0x20
    A20 = 0x20,               // Standardwert
    //% block=0x21
    A21 = 0x21,
    //% block=0x22
    A22 = 0x22,
    //% block=0x23
    A23 = 0x23
}

const enum REG_MCP {
    //% Bitmuster um Register A zu beschreiben
    Bitmuster_A = 0x12,
    //% Bitmuster um Register B zu beschreiben
    Bitmuster_B = 0x13,
    //% Aus- / Eingaberichtung des Registers A
    EinOderAusgabe_A = 0x00,
    //% Aus- / Eingaberichtung des Registers B
    EinOderAusgabe_B = 0x01,
    //% Pullup Widerstände Register A
    PullUp_Widerstaende_A = 0x0C,
    //% Pullup Widerstände Register B
    PullUp_Widerstaende_B = 0x0D
}

const enum BITS {
    //% block=11111111
    Alle = 0xff,
    //% block=00000000
    keiner = 0x00,
    //% block=00000001
    Bit1 = 0x01
}

let BitwertA = 0;
let BitwertB = 0;

/**
 * Custom blocks
 */
//% weight=100 color=#ffcc00 icon=""
namespace MCP23017 {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function init(): void {
        // Alle Register auf Ausgabe stellen
        MCP23017.writeRegister(ADDRESS.A20, REG_MCP.EinOderAusgabe_A, MCP23017.bitwert(BITS.keiner))
        MCP23017.writeRegister(ADDRESS.A20, REG_MCP.EinOderAusgabe_B, MCP23017.bitwert(BITS.keiner))
        // Pullup-Widerstände für saubere Signalübertragung ein!
        MCP23017.writeRegister(ADDRESS.A20, REG_MCP.PullUp_Widerstaende_A, MCP23017.bitwert(BITS.Alle))
        MCP23017.writeRegister(ADDRESS.A20, REG_MCP.PullUp_Widerstaende_B, MCP23017.bitwert(BITS.Alle))
        //MCP23017.setLeds(State.Low) // alle LEDs ausschalten
    }

    export function writeRegister(addr: ADDRESS, reg: REG_MCP, value: number) {
        pins.i2cWriteNumber(addr, reg * 256 + value, NumberFormat.UInt16BE)
    }

    export function bitwert(alle: BITS): number {
        return alle
    }
}
