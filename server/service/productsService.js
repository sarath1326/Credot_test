


const promodel = require("../Database/Model/products")





module.exports = {


    new_pro_add: (data) => { // new products add query


        return new Promise(async (resolve, reject) => {


            const final = new promodel(data)

            final.save().then(() => {

                resolve();

            }).catch(err => {

                reject();
            })

        })


    },


    get_all_pro_data: () => {   // all products get query

        return new Promise(async (resolve, reject) => {

            try {

                const data = await promodel.find()

                resolve({ data: data })

            } catch (error) {

                reject()

            }


        })
    },



    single_pro_view:(proid)=>{
         
           return new Promise(async(resolve,reject)=>{

                   try {

                     const data= await promodel.findOne({_id:proid})

                     resolve({data:data})
                    
                   } catch (error) {
                    
                      reject()

                   }
                
           })
           
    }





}



