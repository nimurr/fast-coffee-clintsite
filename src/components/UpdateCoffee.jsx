import { useLoaderData } from "react-router-dom"



export default function UpdateCoffee() {

  const singleCoffee = useLoaderData();
  console.log(singleCoffee.name)
  const {_id, name, quantity, supplier, taste, photoURL } = singleCoffee;


  const handleUpdateCoffee = e => {

    e.preventDefault()
        const form = e.target ;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const photoURL = form.photoURL.value;
        const Addcoffee = {name , quantity , supplier , taste , photoURL }
  

        fetch(`https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/coffee/${_id}` , {
            method:"PUT",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(Addcoffee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if(data.modifiedCount){
                swal("Good job!", "You clicked the button!", "success")
            }
        })

  }

  return (
    <div>
      <h2 className="text-4xl text-center my-4">Update Coffee : {name}</h2>
      <div className="bg-blue-200 p-20  mx-auto ">
        <form onSubmit={handleUpdateCoffee}>
          {/* form row  */}
          <div className="md:flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label>
                <input type="text" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full rounded-md" />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label>
                <input type="text" name="quantity" defaultValue={quantity} placeholder="Coffee Available" className="input input-bordered w-full rounded-md" />
              </label>
            </div>
          </div>
          {/* form row  */}
          <div className="md:flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">supplier</span>
              </label>
              <label>
                <input type="text" name="supplier" defaultValue={supplier} placeholder="Coffee supplier" className="input input-bordered w-full rounded-md" />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label>
                <input type="text" name="taste" defaultValue={taste} placeholder="Coffee Taste" className="input input-bordered w-full rounded-md" />
              </label>
            </div>
          </div>
          <div>
            <span className="text-left">Photo URL</span>
            <input className="w-full p-3 rounded-md my-4" defaultValue={photoURL} type="text" name="photoURL" placeholder="Photo Url ... " id="" />
          </div>
          <input type="submit" value="Update Coffee" className="btn text-white bg-blue-600 mt-10" />
        </form>
      </div>
    </div>
  )
}
