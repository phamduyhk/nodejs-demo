// CRUD create read update delete
require('rootpath')();
const mongodb = require('mongodb')
const config = require('config.json')

// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// thay vi declare 2 dong tren co the dung 1 dong duoi day:
const {
    MongoClient,
    ObjectID
} = require('mongodb')

const id = new ObjectID()
console.log({id:id})
console.log(id.getTimestamp())


const connectionURL = config.connectionString
const databaseName = 'news-app'
MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!")
    }

    console.log("Connected correctly!")
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Duy',
    //     age: 24
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

      db.collection('users').insertMany([{
        _id: id,
        name: 'Duy',
        age: 23
      }, {
        name: 'Duy1',
        age: 24
      }, {
        name: 'Duy2',
        age: 25
      }], (err, result) => {
        if (err) {
          return console.log('Unable to insert user')
        }
        console.log(result.ops)
      })

    // find in database
    //   db.collection('users').findOne({name: 'Duy1',age:23},(error, user)=>{
    //     if(error){
    //         console.log('Unable to fetch')
    //     }
    //     console.log(user)

    //   })

    //   db.collection('users').find({age: 24}).toArray((err, result)=>{
    //     if(error){
    //         console.log("Unable to fetch")
    //     }
    //     console.log(result)
    //   })
    //   db.collection('users').find({age: 24}).count((err, count)=>{
    //     if(error){
    //         console.log("Unable to fetch")
    //     }
    //     console.log(count)
    //   })

    const updatePromise = db.collection('users').updateOne({
        name: 'Duy2'
    }, {
            $set: {
                name: 'Duy Pham'
            }
        })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:24
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


})
