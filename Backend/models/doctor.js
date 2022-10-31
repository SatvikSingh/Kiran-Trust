const moongose=require('mongoose');
const validater=require('validator');
var bcrypt = require('bcryptjs');

const doctorschema=new moongose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Email"],
        unique:true,
        validate:[validater.isEmail]
    },
    password:{
        type:String,
        minlength:[8,"Password should be minimum of length 8"],
        required:[true,"Please Enter Password"]    
    },
    images:{
        public_id:{
            type:String,
            required:true
        },
        public_url:{
            type:String,
            required:true
        }
    },
    resetpass:{
        type:String,
    },
    resetpasstime:{
        type:Date
    },
    ratings:{
        type:Number,
        default:0
    },
    noofreviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type: moongose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String
            }
        }
    ],
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    lastReset: {
        type: Date,
        required: false
    },
    slots:[
        {
            user:{
                type: moongose.Schema.ObjectId,
                ref: "User",
            },
            booked:{
                type:Boolean,
                required:true
            },
            from:{
                type:String,
                required:true
            },
            to:{
                type:String,
                required:true
            },
        }
    ],

},{timestamps:true});

doctorschema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    } else {
        var hash = await bcrypt.hashSync(this.password, 10);
        this.password=hash;
        next();
    }
}); 
const Doctor=moongose.model('Doctor',doctorschema);

module.exports=Doctor;