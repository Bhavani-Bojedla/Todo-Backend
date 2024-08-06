const List = require("../models/list");
const User = require("../models/user");

const createList = async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new List({ title, body,completed: false, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (e) {
    console.log(e);
  }
};

// const updateList = async (req, res) => {
//   try {
//     const { title, body,completed, id } = req.body;
//     const existingUser = await User.findById(id );
//     if (existingUser) {
//       const list = await List.findByIdAndUpdate(req.params.id, { title, body ,completed});
//       list.save().then(() =>
//         res.status(200).json({
//           msg: "updated succesfully",
//         })
//       );
//     }
//     // res.status(200).json({ message: "list created successfully" });
//   } catch (e) {
//     // res.status(500).json({ message: e.message });
//     console.log(e);
//   }
// };

const updateList = async (req, res) => {
  try {
    const { title, body, completed, id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = await List.findByIdAndUpdate(
        req.params.id,
        { title, body, completed },
        { new: true }
      );
      res.status(200).json({ list });
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteList = async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findByIdAndUpdate(
       id ,
      { $pull: { list: req.params.id } }
    );
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({
          msg: "deleeted succesfully",
        })
      );
    }
  } catch (e) {
    console.log(e);
  }
};



 
const getList = async (req, res) => {
   const list= await List.find({user:req.params.id}).sort({createdAt : -1});
   if(list.length!==0){
    res.status(200).json({list:list});
   }
   else{ 
    res.status(200).json({msg:"no tasks"});
   } 
};
 

module.exports = { createList, updateList, deleteList,getList };
