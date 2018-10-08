const Koa = require('koa')
const app = new Koa()

const mid1 = async (ctx, next) => {
    ctx.type = 'text/html'
    await next()
    ctx.body += 'yes'
}

const mid2 = async (ctx, next) => {
    ctx.body = 'hi '
    await next()
}

const mid3 = async (ctx, next) => {
    ctx.body += 'wu0792'
}

app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(2333)