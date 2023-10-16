import Header from "./Header";

export default function AddCoffee() {

    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const photoURL = form.photoURL.value;
        const Addcoffee = { name, quantity, supplier, taste, photoURL }
        // console.log(Addcoffee)

        fetch('https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Addcoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    swal("Good job!", "You clicked the button!", "success")
                }
            })



    }


    return (
        <div>
            <Header></Header>
            <div className="bg-blue-200 p-20 my-10 w-10/12 mx-auto ">

                <h2 className="text-5xl mb-6 text-center">Add Coffee</h2>
                <form onSubmit={handleAddCoffee}>
                    {/* form row  */}
                    <div className="md:flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label>
                                <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full rounded-md" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label>
                                <input type="text" name="quantity" placeholder="Coffee Available" className="input input-bordered w-full rounded-md" />
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
                                <input type="text" name="supplier" placeholder="Coffee supplier" className="input input-bordered w-full rounded-md" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label>
                                <input type="text" name="taste" placeholder="Coffee Taste" className="input input-bordered w-full rounded-md" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <span className="text-left">Photo URL</span>
                        <input className="w-full p-3 rounded-md my-4" type="text" name="photoURL" placeholder="Photo Url ... " id="" />
                    </div>
                    <input type="submit" value="Add Coffee" className="btn bg-blue-600 mt-10" />
                </form>
            </div>
        </div>
    )
}
