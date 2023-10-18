type remCalcType = (px: string | number, base?: number) => string;

const remCalc: remCalcType = (px, base = 16) => {
    let tempPx = px
    if (typeof tempPx === "string") {
        tempPx = tempPx.replace('px', '')
    }

    if (typeof tempPx === "string") {
        tempPx = parseInt(tempPx)
    }
    return (1 / base) * tempPx + 'rem'
}

export default remCalc