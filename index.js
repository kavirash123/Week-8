mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true})
; const db = mongoose.connection;
db.on('error', function(err)
{console.log("Error occured during connection"+err)
}
);
db.once('connected', function() {
console.log(`Connected to ${MONGO_URI}`);
});
// creating the scheme
const PersonScheme = new mongoose.Schema({ name: {
type: String, required: true
},
age: Number, Gender:String, Salary:Number
});
// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');
// creating a single document
//const doc1 = new person_doc({ name: 'Yousuf',age:44,Gender:"Male",Salary:3456 }
// );
// adding one document in the collection
// doc1
//  .save()
//  .then((doc1) => {
//  console.log("New Article Has been Added Into Your DataBase.",doc1);
//  })
//  .catch((err) => {
//  console.error(err);
//  });

//  manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:3456 }
//     ,{ name: 'Neesha',age:23,Gender:"Female",Salary:1000 }
//     ,{ name: 'Mary',age:27,Gender:"Female",Salary:5402 },
//     { name: 'Mike',age:40,Gender:"Male",Salary:4519 }
//     ]
   
   
//     person_doc.insertMany(manypersons).then(function(){
//     console.log("Data inserted") // Success
//     }).catch(function(error){
//     console.log(error) // Failure
//     });

//person_doc.find({}).limit(5).then(function(docs) {
//    console.log("Documents fetched:", docs);
//  }).catch(function(error) {
//    console.log("Error fetching documents:", error);
//  });

//person_doc.find()
//  .sort({salary: 1})  // Sort by salary in ascending order
//  .select('name Salary age')  // Select name, salary, and age fields only
//  .limit(10)  // Limit the number of results to 5
//  .exec()  // Execute the query
//  .then(docs => {
//      console.log('Showing multiple documents');
//      docs.forEach(function(Doc) {
//          console.log(Doc.age, Doc.name);  // Output the age and name
//      });
//  })
//  .catch(err => {
//      console.error(err);  // Log errors if they occur
// });


//var givenAge = 15;
//person_doc.find({ Gender: "Female", age: { $gte: givenAge } })
//  .sort({ Salary: 1 })  // Sort by Salary in ascending order
//  .select('name Salary age')  // Only return name, salary, and age
//  .limit(5)  // Limit the result to 5 documents
//  .exec()  // Execute the query
//  .then(docs => {
//      console.log(`Documents with Gender: Female and age >= ${givenAge}:`);
//            docs.forEach(function(doc) {
//          console.log(doc.age, doc.name);  
//      });
//  })
//  .catch(err => {
//      console.error(err);  
//  });
  


// counting all the documents
//person_doc.countDocuments().exec()
//.then(count=>{
//console.log("Total documents Count :", count)
//}) .catch(err => {
//console.error(err)
//})


//person_doc.deleteMany({ age: { $gte: 25 } })
//.exec()
//.then(docs=>{
//console.log('deleted documents are:',docs);
//}).catch(function(error){
//console.log(error);
//});


person_doc.updateMany({ Gender: "Female" },{Salay:5555})
.exec()
.then(docs=>{
console.log("update")
console.log(docs); // Success
}).catch(function(error){
console.log(error); // Failure
});