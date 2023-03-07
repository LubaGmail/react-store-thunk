/**
    state:      {categories: {…}, cart: {…}, featured: {...} }
    state.featured:     {featuredItems: Array(1)}
    state.cart.cartItems:    [{ id: 2, quantity: 1, ...}, {...}]
 */

export const selectFeatured = (state) => {
    return state.featured
}
export const selectFeaturedItems = (state) => {
    return state.featured.featuredItems
}