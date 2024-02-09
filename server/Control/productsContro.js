


const proService=require("../service/productsService")

const data=10


module.exports={


      new_Products_Add:(req,res)=>{ // add new products fun

        proService.new_pro_add(req.body).then((respo)=>{

             
                res.json({flag:true});
        
            }).catch(err=>{

                res.json({flag:false});
        })
        
           
             
      },


      get_all_products:(req,res)=>{  // all products fetching

       
        proService.get_all_pro_data().then((respo)=>{

              
                  res.json({flag:true,data:respo.data})
        
        
            }).catch(err=>{

                 res.json({flag:false})
            })
    
    },


   single_pro_view:(req,res)=>{

    console.log("req resev")
     
        proService.single_pro_view(req.params.proid).then((respo)=>{

                   res.json({flag:true,data:respo.data})

                   
        
                }).catch(err=>{

               res.json({flag:false})
        })

       
   }

}


