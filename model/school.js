const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    address: {
        building: {
            type: Number,
            required: true
        },
        coord: {
            type: [Number],
            index: '2dsphere' 
        },
        street: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true
        }
    },
    Class: {
        type: Number,
        required: true
    },
    subjects: {
        type: String,
    },
    grades: [
        {
            date: {
                type: Date
            },
            grade: {
                type: String,
                required: true
            },
            score: {
                type: Number
            }
        }
    ],
    name: {
        type: String,
        required: true
    },
    student_id: {
        type: Number,
        required: true
    }
});

// Create School model
const school = mongoose.model('School',schoolSchema);

// create document
school.createSchool = (newSchool,callback) => {
    school.create(newSchool,callback);
}

// Fetch all the documents
school.getAllPro = (callback) => {
    school.find(callback);
}

// Fetch student_id,name,grades,address,class from collection
school.getSpecificSchool = ({},callback) => {
    school.find({},{"student_id":1,"name":1,"grades":1,"address":1,"Class":1},callback);
}

// Fetch  student_id, name, grades from all collection
school.getSpecific = ({},callback) => {
    school.find({},{"student_id":1,"name":1,"grades":1},callback);
}

// Fetch all the students who are in class 9th
school.getByClass9 = (search,callback) => {
    school.find(search,callback);
}

// Get the first 5 students which has address Malabar street. 
school.getFirstFiveCollection = (search,callback) => {
    school.find(search,callback)
    .limit(5);
}

// Get the next 5 schools after skipping first 5 which has address Malabar street
school.getFiveAfterSkipFive = (search,callback) => {
    school.find(search,callback)
    .skip(5)
    .limit(5);
}

// Get the students who achieved a score more than 90
school.getMoreThanNinty = (search,callback) => {
    school.find(search,callback);
}

// Get the students that achieved a score, more than 80 but less than 100. 
school.getBetween = (search,callback) => {
    school.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}},callback);
}

// Get the schools which locate in latitude value less than -95.754168
school.getByLatitude = (search,callback) => {
    school.find(search,callback);
}

//  Get the students who study in class 10th and their grade score is more than 70
//  and latitude less than -65.754168
school.getByMultipleCondition = ({},callback) => {
    school.find({$and:
        [
            { "Class": {$eq:10} },
            {"grades.score": {$gt: 70} },
            {"address.coord": {$lt: -65.754168} }
        ]
        },callback);
}

// find the students who do not study in class 10 and achieved a score more than 70
// and located in the longitude less than -65.754168
school.getByMultipleCondition2 = ({},callback) => {
    school.find(
        {
             "Class": {$ne: 10},
            "grades.score": {$gt: 70},
            "address.coord": {$lt: -65.754168}
        },callback);
}

//  Get the students which do not study in class 9th and achieved a grade point 'A'
//  not belonging to address Malabar street.
//  The document must be displayed according to the class in descending order
school.getByMultipleCondition4 = ({},callback) => {
    school.find(
        {
             "Class": {$ne: 9},
            "grades.grade": {$eq: "A"},
            "address.street": {$ne: "Malabar street"}
        },callback).sort({'Class':-1});
}

// Get the student Id, name,class for those students which contain 
// 'Wil' as first three letters for its name
school.getByFirstThreeLetter = ({},callback) => {
    school.find({name: /^Wil/},{"student_id":1,"name":1,"Class":1},callback);
}

//  Get the student Id, name, class and grades for those students which contain
// 'ces' as last three letters for its name.
school.getByLastThreeLetter = ({},callback) => {
    school.find({name: /ces$/},{
        "student_id":1,
        "name":1,
        "Class":1,
        "grades.grade":1
    },callback);
}

// Get the student Id, name, grades and class for those students which contain 
// 'Raj' as three letters somewhere in its name.
school.getByLettersAnyWhere = ({},callback) => {
school.find({name: /.*raj.*/},{
        "student_id":1,
        "name":1,
        "grades.grade":1,
        "Class":1
    },callback);
}

// Get the students which belong to the Malabar street and scored grade B. 
school.getByAddress = ({},callback) => {
school.find({$and: 
    [
        {"address.street": "Malabar street"},
        {"grades.grade": "B"}
    ]
},callback);
}

// Get the student Id, name, grade for those students who belong to the class 8th and 9th.
school.getByClass = ({},callback) => {
    school.find({$or: 
        [
            {"Class": {$eq: 8} },
            {"Class": {$eq: 9} }
        ]
    },{
        "student_id":1,
        "name":1,
        "grades.grade":1
    },callback);
}

// Get the student Id, name, grade
// for those students who don't belong to the class 8th and 9th.
school.getByClassNotBelong = ({},callback) => {
    school.find({$and: 
        [
            {"Class": {$ne: 8} },
            {"Class": {$ne: 9} }
        ]
    },{
        "student_id":1,
        "name":1,
        "grades.grade":1,
        "Class":1
    },callback);
}

// Get the student Id, name for those students
// who achieved a score which is not more than 10.
school.getByScore = ({},callback) => {
    school.find({ "grades.score": {$not:{$gt : 10}} },{
        "student_id":1,
        "name":1
    },callback);
}

// Arrange the name of the students in ascending order along with all the columns
school.arrangeInAsc = ({},callback) => {
    school.find({},callback).sort({"name":1});
}

// Arrange the name of the students in descending along with all the columns. 
school.arrangeInDsc = ({},callback) => {
    school.find({},callback).sort({"name":-1});
}

// know whether all the addresses contains the street or not.
school.exists = ({},callback) => {
    school.find({ "address.street": { $exists : true }  },callback);
}

module.exports = school;