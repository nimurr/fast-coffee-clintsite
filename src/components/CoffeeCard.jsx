import { Link } from "react-router-dom";

export default function CoffeeCard({ coffee , setCoffees , coffees }) {

    const { _id, name, quantity, supplier, taste, photoURL } = coffee;

    const handleDelete = _id => {

        fetch(`https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/coffee/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    const remaining = coffees.filter(cof => cof._id !== _id)
                    setCoffees(remaining)
                }
            })

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-60 h-full" src={photoURL} alt="Movie" /></figure>
                <div className="flex justify-between items-center w-full ml-4">
                    <div>
                        <h2 className="card-title">name :{name}</h2>
                        <p>Quantity : {quantity}</p>
                        <p> Supplier : {supplier}</p>
                        <p> Taste : {taste}</p>
                    </div>
                    <div className="mr-2">
                        <button className="btn btn-primary block w-full mb-2 ">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-primary block w-full mb-2 ">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500 text-white block w-full mb-2 text-2xl">X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
