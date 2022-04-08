const quickSort = ( arry: any[] ) => {

    if (arry.length <= 1) return arry;

    const pivot = arry[arry.length - 1];

    let leftSide = [];
    let rightSide = [];

    for (let i = 0; i < arry.length - 1; i++) {

        if (arry[i] < pivot) {
            leftSide = [...leftSide, arry[i]];
        } else {
            rightSide = [...rightSide, arry[i]];
        }

    }
    
    return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}

export default quickSort;