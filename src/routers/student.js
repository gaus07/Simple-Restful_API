const express = require("express");
const router = new express.Router()
const Student = require("../models/students");

// Create new Student data
// router.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Read the data of Registered Students
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (error) {
      res.send(error);
    }
  });
  
  // Read Individual Student Data
  router.get("/students/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const studentData = await Student.findById(id);
      if (!studentData) {
        return res.status(404).send();
      }
      res.send(studentData);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Read Individual Student Data with Name
  // router.get("/students/:name", async (req, res) => {
  //     try {
  //       const name = req.params.name;
  //       const studentData = await Student.findOne({ name: name });
  //       if (!studentData) {
  //         return res.status(404).send("Student not found");
  //       }
  //       res.send(studentData);
  //     } catch (error) {
  //       res.status(500).send(error);
  //     }
  //   });
  
  // Update Students Data
  router.patch("/students/:id", async (req, res) => {
    try {
      let id = req.params.id;
      const updateStudents = await Student.findByIdAndUpdate(id, req.body);
      if (!updateStudents) {
        return res.status(404).send("Student not found");
      }
      res.send(updateStudents);
    } catch (error) {
      console.log(error);
      res.status(404).send(error);
    }
  });
  
  // Update Students Data from Name
  // router.patch('/students/:name', async (req, res) => {
  //   try {
  //     const name = req.params.name;
  //     const newName = req.body.name; // Retrieve the new name from the request body
  //     const updateStudent = await Student.findOneAndUpdate({ name: name }, { name: newName }, { new: true });
  //     if (!updateStudent) {
  //       return res.status(404).send();
  //     }
  //     res.send(updateStudent);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // });
  
  // Delete Students Data
  router.delete('/students/:id', async (req, res) => {
    try {
      const deleteStudent = await Student.findByIdAndDelete(req.params.id)
      if (!deleteStudent) {
        return res.status(400).send()
      }
      res.send(deleteStudent)
    } catch (error) {
      res.status(500).send()
    }
  })

module.exports = router