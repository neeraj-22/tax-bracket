//Module imports
const User = require("../models/userModel.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const ErrorHandler = require("../utils/ErrorHandler.js");


exports.createUser = catchAsyncErrors(async (req, res, next) => {
  
    //destructring values fetched from body
  const { name, salary, DOB, age } = req.body;

  //Registering user in DB
  const user = await User.create({
    name,
    salary,
    DOB,
    age
  });

  res.status(200).json({
    success:true,
    user
})
});

//Get All Users
exports.getAllUsers = catchAsyncErrors(async(req,res,next) => {

    const users = await User.find();
    const usersCount = await User.countDocuments();

    res.status(200).json({
        success:true,
        users,
        usersCount
    })
})

//Calculate Tax
exports.findUserTax = catchAsyncErrors(async(req,res,next) => {
    
    const user = await User.findById(req.params.id);

    const salary = user.salary;

    let taxPercentage = 0;


    let taxAmount = 0;
    const findTax = () => {

        if(salary > 3000000){
            taxPercentage = 30;
            if(user.age > 60){
                taxPercentage -= 5;
            }
            taxAmount = (((salary)/100)*taxPercentage)
            return taxAmount;
        }
        else if(salary > 1000000){
            taxPercentage = 20;
            if(user.age > 60){
                taxPercentage -= 5;
            }
            taxAmount = (((salary)/100)*taxPercentage)
            return taxAmount;
        }
        else if(salary > 500000){
            taxPercentage = 10;
            if(user.age > 60){
                taxPercentage -= 5;
            }
            taxAmount = (((salary)/100)*taxPercentage)
            return taxAmount;

        }
        else{
            taxAmount = 0
            return taxAmount;
        }
    };

    
    const tax = findTax();

    res.status(200).json({
        success:true,
        user,
        tax,
    })
})