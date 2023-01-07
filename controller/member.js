const dayjs = require('dayjs');
const models = require('../model/index');
const func = require('./func');

exports.memberCreate = async(req,res)=>{
    try{
        const member = await models.Member.create({
           ...req.body,
           created_date : dayjs().format('YYYY-MM-DD HH:mm:ss'),
           updated_date : dayjs().format('YYYY-MM-DD HH:mm:ss')
        })
        if(member){
            return res.status(200).json({
                message : 'เพิ่มข้อมูลสำเร็จ',
                data:{
                    ...req.body
                }
            });
        }
    }catch(error){
        return res.status(400).json({data : error.message})
    }
}

exports.memberRead = async (req,res)=>{
    try{
        const member = await models.Member.findAll({raw:true});
        return res.json({data: func.convertDateTime(member)})
    }catch(error){
        return res.json({data : error.message})
    }
}

exports.memberReadByID = async (req,res) => {
    try{
        const {id} = req.params;
        const member = await models.Member.findByPk(id,{raw:true});
        if(!member){
            return res.status(400).json(
                {message:'ไม่มีรายการนี้'}
            )
        }
        return res.json({data: func.convertDateTime(member)})
    }catch(error){
        return res.json({data:error.message})
    }
}

exports.memberUpdateByID = async(req,res)=>{
    try{
        const {id} = req.params;
        const memberID = await models.Member.findByPk(id);
        if(!memberID){
            return res.status(400).json(
                {message:'ไม่มีรายการนี้'}
            )
        }

        const {firstname, surname, citizen_id} = req.body;
        const member = await models.Member.update(
            {
                firstname: firstname,
                surname: surname,
                citizen_id : citizen_id,
                updated_date : dayjs().format('YYYY-MM-DD HH:mm:ss')
            },
            {
                where : {id: id}
            },
        );
        if(member){
            return res.status(200).json(
                {message:'แก้ไขข้อมูลสำเร็จ'}
            )
        }
    }catch(error){
        return res.json({data: error.models})
    }
}

exports.memberDeleteByID = async(req,res) =>{
    try{
        const {id} = req.params;
        const memberID = await models.Member.findByPk(id);
        if(!memberID){
            return res.status(400).json(
                {message:'ไม่มีรายการนี้'}
            )
        }
        
        const member = await models.Member.destroy(
            {
                where : {id: id}
            }
        )
        if(member){
            return res.status(200).json(
                {message:'ลบข้อมูลสำเร็จ'}
            )
        }

    }catch(error){
        return res.json({data: error.message})
    }
}