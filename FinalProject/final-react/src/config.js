const config = {
    apiUrl: process.env.REACT_APP_API_URL,
    endpoints: {
        news: '',
        eachNews: '/:id',
        users: '/users',
        category: '/category',
    },
}

export default config;