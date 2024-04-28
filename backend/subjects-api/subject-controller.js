import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/ICS')

const Subject = mongoose.model('Subject', {
	code: String,
	title: String,
	desc: String,
	units: Number,
	sem_offered: [String],
});



const getSubjects = async (req, res) => {
	const subjects = await Subject.find({});
	res.send(subjects)
}

const greetByPOST = async (req, res) => {
	console.log(req.body.name)
	
	const greeting = "Hello, " + req.body.name;
	res.send(greeting)
}


// get subject by code
const getSubjectByCode = async (req, res) => {
	const subject = await Subject.findOne({ code: req.query.code })
	res.send(subject)
}

// save new subject
const addSubject = async (req, res) => {
	const { code, title, desc, units, sem_offered } = req.body

	const newSubject = new Subject({ code, title, desc, units, sem_offered })

	const result = await newSubject.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

// delete 
const deleteSubject = async (req, res) => {
	const { code } = req.body

	const result = await Subject.deleteOne({ code })

	if (result.deletedCount == 1) {
		res.send({ success: true })
	} else { 
		res.send({ success: false })
	}
	
}


export { getSubjects, greetByPOST, getSubjectByCode, addSubject, deleteSubject };