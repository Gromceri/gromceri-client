const getWidgets = (onPressReport, onPressGroupRecipe, onPressProduct,
    onPressRecipes, onPressSupermarkets) => {
    return ([
        {
            hasPhoto: false,
            message: "Shop by supermarket",
            passedStyle: '#424141',
            iconName: "cart-outline",
            iconBackgroundColor: "#3e5dca",
            onPress: onPressSupermarkets
        },
        {
            hasPhoto: false,
            message: 'Browse your recipes',
            passedStyle: '#4e79ba',
            iconName: 'book-outline',
            iconBackgroundColor: '#313131',
            onPress: onPressRecipes
        },
    
        {
            hasPhoto: false,
            message: "Add a product",
            passedStyle: '#424141',
            iconName: "cart-outline",
            iconBackgroundColor: "#3e5dca",
            onPress: onPressProduct
        },
    
        {
            hasPhoto: false,
            message: "Start a group recipe",
            passedStyle: '#4e79ba',
            iconName: "cart-outline",
            iconBackgroundColor: "#3e5dca",
            onPress: onPressGroupRecipe
        },
    
        {
            hasPhoto: false,
            message: "Report a problem",
            passedStyle: '#424141',
            iconName: "cart-outline",
            iconBackgroundColor: "#3e5dca",
            onPress: onPressReport
        },
    ]

)}


export default { getWidgets }