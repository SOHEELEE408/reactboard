const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target:'http://localhost:8080',
            changeOrigin:true,
        })
    )
}

//'https://react-board-w-boot.com.herokuapp.com'