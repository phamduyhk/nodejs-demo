const mongoose = require('mongoose')

mongoose.connect('mongodb://phamduy:cactus95@ds151596.mlab.com:51596/news-app-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: "Duy Pham",
    age: 24
})
me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log({error:error})
})