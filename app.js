var students =  [{
    'id': 1,
    'firstName': 'Alice',
    'Last Name': 'Zephyr',
    'Home Town': 'Seattle'
},{
    'id': 2,
    'firstName': 'Bob',
    'Last Name': 'Yellow',
    'Home Town': 'Vancouver'
},{
    'id': 3,
    'firstName': 'Claire',
    'Last Name': 'Xylitol',
    'Home Town': 'Toledo'
},{
    'id': 4,
    'firstName': 'Daniel',
    'Last Name': 'Winston',
    'Home Town': 'Akron'
},{
    'id': 5,
    'firstName': 'Edina',
    'Last Name': 'Veritas',
    'Home Town': 'Wichita'
}]

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

function getStudent(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
    return null;
}

app.get("/", function (request, response) {
    response.json(students);
});

app.get("/:id", function (request, response) {
    var record = getStudent(students, request.params.id);
    if (!record){
        response.status(404).json({
            error: {
                message: "No record found!"
            }
        });
    } else {
        response.json({data: record});
    }
});

app.listen(process.env.PORT||9000);
