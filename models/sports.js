const mongoose =require('mongoose')
const yup=require('yup');



//sports schema
const SportSchema=new mongoose.Schema({
    hometeam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    awayteam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    league:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50

    },
    pick:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
     Bhometeam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
     Bawayteam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    Bleague:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50

    },
    Bpick:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
     Ihometeam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    Iawayteam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    Ileague:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50

    },
    Ipick:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    H:null,
    D:null,
    A:null
});

   const validateSport=sport=>{
          const schema=yup.object().shape({
              homeName:yup.string().required().min(2).max(50),
              awayName:yup.string().required().min(2).max(50),
              leagueName:yup.string().required().min(2).max(50),
              pickTip:yup.string().required().min(2).max(50),
              h:yup.null,
              d:yup.null,
              a:yup.null
          });
          return schema
          .validate(sport)
          .then(sport=>sport)
          .catch(error=>{
              return{
                  message:error.message
              }
          });
   };
exports.Sport=new mongoose.model('Sport',SportSchema);
exports.validateSport=validateSport;