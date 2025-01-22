//% color="#3c1a13" icon="\uf056"
//% advanced=true
//% block="tools" // English
//% block.loc.zh-cn="工具" // Simplified Chinese
//% block.loc.zh-tw="工具" // Traditional Chinese
//% block.loc.de="Werkzeuge" // German
//% block.loc.fr="outils" // French
//% block.loc.ja="ツール" // Japanese
//% block.loc.es-es="herramientas" // Spanish (Spain)
//% block.loc.es-mx="herramientas" // Spanish (Mexico)
//% block.loc.ru="инструменты" // Russian
namespace tools {
    
    //% blockId=json_stringify
    //% block="JSON.stringify $input" // English
    //% block.loc.zh-cn="JSON.stringify $input" // Simplified Chinese
    //% block.loc.zh-tw="JSON.stringify $input" // Traditional Chinese
    //% block.loc.de="JSON.stringify $input" // German
    //% block.loc.fr="JSON.stringify $input" // French
    //% block.loc.ja="JSON.stringify $input" // Japanese
    //% block.loc.es-es="JSON.stringify $input" // Spanish (Spain)
    //% block.loc.es-mx="JSON.stringify $input" // Spanish (Mexico)
    //% block.loc.ru="JSON.stringify $input" // Russian
    //% group="JSON"
    export function json_stringify(input: any): string {
        return JSON.stringify(input);
    }

    //% blockId=json_parse
    //% block="JSON.parse $input" // English
    //% block.loc.zh-cn="JSON.parse $input" // Simplified Chinese
    //% block.loc.zh-tw="JSON.parse $input" // Traditional Chinese
    //% block.loc.de="JSON.parse $input" // German
    //% block.loc.fr="JSON.parse $input" // French
    //% block.loc.ja="JSON.parse $input" // Japanese
    //% block.loc.es-es="JSON.parse $input" // Spanish (Spain)
    //% block.loc.es-mx="JSON.parse $input" // Spanish (Mexico)
    //% block.loc.ru="JSON.parse $input" // Russian
    //% group="JSON"
    export function json_parse(input: string): any {
        return JSON.parse(input);
    }

    //% blockId=json_parseIntRadix
    //% block="JSON.parseIntRadix $s base $base" // English
    //% block.loc.zh-cn="JSON.parseIntRadix $s 基数 $base" // Simplified Chinese
    //% block.loc.zh-tw="JSON.parseIntRadix $s 基數 $base" // Traditional Chinese
    //% block.loc.de="JSON.parseIntRadix $s Basis $base" // German
    //% block.loc.fr="JSON.parseIntRadix $s base $base" // French
    //% block.loc.ja="JSON.parseIntRadix $s 基数 $base" // Japanese
    //% block.loc.es-es="JSON.parseIntRadix $s base $base" // Spanish (Spain)
    //% block.loc.es-mx="JSON.parseIntRadix $s base $base" // Spanish (Mexico)
    //% block.loc.ru="JSON.parseIntRadix $s основание $base" // Russian
    //% base.defl=10
    //% group="JSON"
    export function json_parseIntRadix(s: string, base?: number): number {
        base = base ? base : 10;
        return parseInt(s, base);
    }

    //% blockId=throw_error
    //% block="throw error $error" // English
    //% block.loc.zh-cn="抛出错误 $error" // Simplified Chinese
    //% block.loc.zh-tw="拋出錯誤 $error" // Traditional Chinese
    //% block.loc.de="Fehler werfen $error" // German
    //% block.loc.fr="lancer une erreur $error" // French
    //% block.loc.ja="エラーを投げる $error" // Japanese
    //% block.loc.es-es="lanzar error $error" // Spanish (Spain)
    //% block.loc.es-mx="lanzar error $error" // Spanish (Mexico)
    //% block.loc.ru="выдать ошибку $error" // Russian
    //% error.shadow="text"
    //% group="others"
    export function throwError(error: string) {
        if (error !== "") {
            throw JSON.stringify(error);
        }
    }

    //% blockId=color_picker
    //% block="$color=colorindexpicker"
    //% color.delf=1
    //% group="others"
    export function color(color: number) {
        return color;
    }


    //% blockId=custom_for_loop
    //% block="for $index from $lowerBound to $upperBound" // English
    //% block.loc.zh-cn="对于 $index 从 $lowerBound 到 $upperBound" // Simplified Chinese
    //% block.loc.zh-tw="對於 $index 從 $lowerBound 到 $upperBound" // Traditional Chinese
    //% block.loc.de="für $index von $lowerBound bis $upperBound" // German
    //% block.loc.fr="pour $index de $lowerBound à $upperBound" // French
    //% block.loc.ja="$lowerBound から $upperBound まで $index を繰り返す" // Japanese
    //% block.loc.es-es="para $index de $lowerBound a $upperBound" // Spanish (Spain)
    //% block.loc.es-mx="para $index de $lowerBound a $upperBound" // Spanish (Mexico)
    //% block.loc.ru="для $index от $lowerBound до $upperBound" // Russian
    //% draggableParameters=reporter
    //% upperBound.defl=4
    //% lowerBound.delf=0
    //% handlerStatement=true
    //% group="others"
    export function forLoop(lowerBound: number, upperBound: number, handler: (index: number) => void) {
        for (let i = lowerBound; i <= upperBound; i++) {
            handler(i);
        }
    }

}

