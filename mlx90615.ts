//%color=#FF8533 icon="\uf2cb" block="MLX90614"
namespace MLX90614 {
    const addr = 0x5B
    const obTempAddr = 0x27
    const amTempAddr = 0x26

    export enum TemperatureLocation {
        //% blockId="Object" block="Object"
        Object = 0,
        //% blockId="Ambiant" block="Ambiant"
        Ambiant = 1
    }
    
    function read16(reg: NumberFormat.UInt8BE): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE, true);
        let ret = pins.i2cReadNumber(addr, NumberFormat.UInt16LE, true);
        return ret
    }

    function readTemp(reg: NumberFormat.UInt8BE): number {
        let temp = read16(reg)
        temp *= .02
        temp -= 273.15
        return Math.round(temp *100)/100
    }

    //% blockId="temperature" block="Temperature %loc"
    export function temperature(loc: TemperatureLocation): number{
        switch (loc){
            case 0:
                return readTemp(obTempAddr);
            case 1:
                return readTemp(amTempAddr);
            default:
                return 0;
        }
    }
}
