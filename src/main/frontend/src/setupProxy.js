const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target:'https://react-board-w-boot.com.herokuapp.com',
            changeOrigin:true,
        })
    )
}