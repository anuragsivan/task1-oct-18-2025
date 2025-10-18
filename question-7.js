function rgbToHex(a,b,c){
    a = Math.max(0,Math.min(255,a))
    b = Math.max(0, Math.min(255,b))
    c = Math.max(0,Math.min(255,c))

    const hexCode = ((code)=>{
        const hex= code.toString(16)
        return hex.length === 1 ? "0" + hex:hex
    }) 
    return "#" + hexCode(a) + hexCode(b) + hexCode(c)
}
console.log(rgbToHex(225,225,225))