//telegraf package
const {Telegraf}=require('telegraf')
const dotenv=require('dotenv')
dotenv.config()

//step 2
const bot=new Telegraf(process.env.APIKEY)

//interct with bot
bot.start((ctx)=>{ctx.reply ('hello welcome')})
bot.command('kle',(ctx)=>{ctx.reply('kle offers BCA with 100% placements')})
bot.command('link',(ctx)=>{ctx.replyWithHTML(`<a>http://www.klescpdds.edu.in/></a>`)})
bot.command('location',(ctx)=>{ctx.replyWithLocation(16.386,75.114)})
bot.command('meme',async (ctx)=>{
    await ctx.replyWithAnimation('https://c.tenor.com/AgAgawqYt_cAAAAd/tenor.gif')
})
bot.command('image',async (ctx)=>{
    await ctx.replyWithPhoto('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP__y6Ps3L3LBPtACpyNtI7XrqY90gYIHm3Q&s')
})
bot.launch();