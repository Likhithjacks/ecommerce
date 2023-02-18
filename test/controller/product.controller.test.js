const {Products} = require('../../models')
const {createProduct,getAllProduct,deleteProduct,updateProduct,getProductOnId}=require("../../controller/prods.js")
const {mockRequest,mockResponse}=require("../interceptor")
let req,res
beforeEach(()=>{
    req=mockRequest()
    res=mockResponse()
})

const paramsfortest={
    name: "iphone 13 pro",
    description :"12gb ram with 512gb internal",
    cost:"150000",
    quantity:"1",
    categoryId:"1"
}
//for createProduct when it resolves
describe("test for create method in product when it passes",()=>{
    it('should return success with product details',async ()=>{
		req.body = paramsfortest
		const spy = jest.spyOn(Products, 'create')
                       .mockImplementation(
                          (paramsfortest) => Promise.resolve(paramsfortest)
                       );
		
        await createProduct(req, res);
		expect(spy).toHaveBeenCalled();
		expect(Products.create).toHaveBeenCalledWith({name: "iphone 13 pro",
        description :"12gb ram with 512gb internal",
        cost:"150000",
        quantity:"1",
        categoryId:"1"
});
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({msg: 'Product got created',result:paramsfortest})
		});
})

//for createProduct when it gets reject

describe("test for createproduct when it fails",()=>{
it("should return success with error",async ()=>{
    const spy = jest.spyOn(Products, 'create')
                       .mockImplementation(
                          () => Promise.reject(new Error("error occured"))
                       );
		
        await createProduct(req, res);
       expect(res.status).toHaveBeenCalledWith(500)
       //expect(res.send).toHaveBeenCalledWith({msg:'Internal server error',err})
})
})


//for getallproducts function when it pass
describe("testing findall method in getallProducts",()=>{
    it("return success for getallProducts",async()=>{
       
        const spy = jest.spyOn(Products, 'findAll')
                       .mockImplementation(
                          () => Promise.resolve(paramsfortest)
                       );
        await getAllProduct(req,res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(spy).toHaveBeenCalled()
        expect(res.send).toHaveBeenCalledWith(paramsfortest)
    })
})
//for getallproducts function when it fails
describe("test for get all func when it fails",()=>{
    it("success when error comes",async()=>{
        const spy = jest.spyOn(Products, 'findAll')
                       .mockImplementation(
                          () => Promise.reject(new Error("error in getting products"))
                       );
        await getAllProduct(req,res)
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.send).toHaveBeenCalledWith({msg: 'Internal server error'})
    })
})

//for getproductsonid function in it passes

describe("testing the getproducton id",()=>{
    it("success on testing getproductsonid",async ()=>{
        const spy=jest.spyOn(Products,'findOne')
        .mockImplementation(
            ()=>Promise.resolve(paramsfortest)
        )
        req.params.id=1
        await getProductOnId(req,res)
        expect(spy).toHaveBeenCalled()
        expect(res.send).toHaveBeenCalledWith(paramsfortest)
        expect(res.status).toHaveBeenCalledWith(200)
    })
})
//for testing getproductsonid function when it fails
describe("testing the getproductsonid when it fails",()=>{
    it("success when fails",async()=>{
        const spy=jest.spyOn(Products,'findOne')
        .mockImplementation(
            ()=>Promise.reject(paramsfortest)
        )
        await getProductOnId(req,res)
        expect(res.status).toHaveBeenCalledWith(500)
    })
})

//for testing deleteProduct when it passes
describe("testing the deleteProduct when it passes",()=>{
    it("success when deleteProduct passes",async()=>{
        const spy=jest.spyOn(Products,"destroy")
        .mockImplementation(
            ()=>Promise.resolve(paramsfortest)
        )
        req.params.id=1
        await deleteProduct(req,res)
        expect(res.send).toHaveBeenCalledWith("product deleted")
        
    })
})
//for testing deleteProduct when it fails
describe("testing the deleteProduct when it fails",()=>{
   it("success in test for deleteProduct",async ()=>{
    const spy=jest.spyOn(Products,"destroy")
    .mockImplementation(
        ()=>Promise.reject(req,res)
    )
    await deleteProduct(req,res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({msg:"deletion err"})
   })
})

//for testing updateProduct when it passes
describe("testing the updateProduct when it passes",()=>{
    it("success in test for updateProduct",async()=>{
       const spy=jest.spyOn(Products,"findOne")
       .mockImplementation(
        ()=>Promise.resolve(req,res)
       )
       await updateProduct(req,res)
       expect(spy).toHaveBeenCalled()
       expect(res.send).toHaveBeenCalledWith(paramsfortest)
    })

})

//for testing updateProduct when it fails

describe("testing the updateProduct when it fails",()=>{
    it("success in test for updateProduct when error comes",async()=>{
       const spy=jest.spyOn(Products,"findOne")
       .mockImplementation(
        ()=>Promise.reject(req,res)
       )
       await updateProduct(req,res)
       expect(res.status).toHaveBeenCalledWith(500)
       expect(spy).toHaveBeenCalled()
    })
   
})
