const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({ json: true }));

const notes = [
    {
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia dolorem eaque, dolor facere iusto quam doloremque tempore minus! Eum perferendis odio ex omnis, doloremque corrupti hic voluptatem voluptate autem!',
        id: 1,
    },
    {
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eaque eum autem harum iure, quaerat quidem commodi distinctio odit, repellendus omnis. Alias, non ex quisquam voluptas aliquid perferendis provident ipsam.',
        id: 2,
    },
    {
        content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae sapiente necessitatibus est! In odit aspernatur quasi est non repellendus nisi fugit ducimus totam ad ipsum, obcaecati repellat eum maxime.',
        id: 3,
    },
];
let nextId = 4;

const router = new Router();

router.get('/notes', async (ctx, next) => {
    ctx.response.body = notes;
});

router.post('/notes', async (ctx, next) => {
    notes.push({ ...ctx.request.body, id: nextId++ });
    ctx.response.status = 204;
});

router.delete('/notes/:id', async (ctx, next) => {
    const noteId = Number(ctx.params.id);
    const index = notes.findIndex((o) => o.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));