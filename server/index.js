const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = 'Hi wu0792'
})

app.listen(2333)