export const paths = {
    toLogin: '/login',
    toHome: '/home',
    toProduct: '/product/:productId',
    toRegister: '/register',
    toOwnersProductPage: '/owners/product/:ownersProductId',
    goToOwnersProductPage: (ownersProductId) => `/owners/product/${ownersProductId}`,
    goToProductPage: (productId) => `/product/${productId}`
}