//Dans un fichier lib/database.js


export const productDatabase = [

    { productCode: 'DBZ', description: 'Dragonball Z Kai - Saga de Boo', unitPrice: 29.90, urlImage: '/images/products/dbz.jpg', stockQuantity: 20 },
    { productCode: 'FMA', description: 'Full Metal Alchemist Brotherhood', unitPrice: 19.50, urlImage: '/images/products/fma.jpg', stockQuantity: 20 },
    { productCode: 'SKY', description: 'Skyfall', unitPrice: 22.50, urlImage: '/images/products/sky.jpg', stockQuantity: 20 },
    { productCode: 'OPM', description: 'One Punch Man', unitPrice: 25.70, urlImage: '/images/products/opm.jpg', stockQuantity: 20 },
    { productCode: 'SWT', description: 'Star Wars épisode V', unitPrice: 29.90, urlImage: '/images/products/swt.jpg', stockQuantity: 20 }
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
    return voucherDatabase.find(element => element[voucherCode])
}