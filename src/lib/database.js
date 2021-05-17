//Dans un fichier lib/database.js


export const productDatabase = [

    { productCode: 'DBZ', description: 'Dragonball Z Kai - Saga de Boo', unitPrice: 29.90, urlImage: 'https://i.ibb.co/28CjVkt/dbz.jpg' /* '/images/products/dbz.jpg' */, stockQuantity: 20 },
    { productCode: 'FMA', description: 'Full Metal Alchemist Brotherhood', unitPrice: 19.50, urlImage: 'https://i.ibb.co/5x65s2j/fma.jpg'/* /images/products/fma.jpg' */, stockQuantity: 20 },
    { productCode: 'SKY', description: 'Skyfall', unitPrice: 22.50, urlImage: 'https://i.ibb.co/XLZn4bG/sky.jpg' /* '/images/products/sky.jpg' */, stockQuantity: 20 },
    { productCode: 'OPM', description: 'One Punch Man', unitPrice: 25.70, urlImage: 'https://i.ibb.co/cTxSSDb/opm.jpg' /* '/images/products/opm.jpg' */, stockQuantity: 20 },
    { productCode: 'SWT', description: 'Star Wars épisode V', unitPrice: 29.90, urlImage: 'https://i.ibb.co/BV9Zz9R/swt.jpg'/*  '/images/products/swt.jpg' */, stockQuantity: 20 }
];


export const voucherDatabase = [
    { 'NOEL2020': 0.12 },
    { 'ANNIVERSAIRE': 0.15 },
    { 'SOLDES_ETE': 0.25 }
];


export function findProduct(productCode) {
    return productDatabase.find(element => element.productCode === productCode)
}


export function findVoucher(voucherCode) {
    for (let elt of voucherDatabase) {
        if (voucherCode in elt) {
            // console.log(`findVoucher `, elt[voucherCode])

            return elt[voucherCode]
        }
    }
    return false
}