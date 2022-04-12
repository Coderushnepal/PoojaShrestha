const config = {
    apiUrl: process.env.REACT_APP_API_URL,
    endpoints: {
        news: '/news',
        eachNews: '/news/:id',
        users: '/users',
        category: '/category',
        eachCategory: '/category/:id',
        login: '/login'
    },
}

export default config;