import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


const ProductList = () => {
    const queryClient = useQueryClient()
const  {data, isLoading, isFetching, isError, error, } = useQuery({
    queryKey: ["products"],
    queryFn: () => instance.get("/products")
})
const mutation = useMutation({
    mutationFn: async (id: number) => {
const confirm = window.confirm("are you sure?")
if (!confirm) return 
return await instance.delete(`/products/${id}`)
    },
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey : ["products"],
        })
    }
})

const [formData, setFormData] = useState({
id: null,
name: "",
image: "",
price: 0,
description: ""
})

const [isEditing, setIsEditing] = useState(false)

const addOrUpdate = useMutation({
    mutationFn: async (product) => {
if (isEditing) {
     const reponse =  await instance.put(`/products/${product.id}`, product)
      if (reponse.status == 200) return alert("update success!") 
} else{
    const reponse =  await instance.post("/products/add_product", product)
     if (reponse.status == 201) return alert("add success!") 
}
    },
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey : ["products"],
        })
        setFormData({
            id: null,
name: "",
image: "",
price: 0,
description: ""
        })
        setIsEditing(false)
    }

})

const handleEdit = (item:any) => {
setFormData({
      id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            description: item.description,
})
setIsEditing(true)
}

const handleSubmit = (e:any) => {
    e.preventDefault();
    addOrUpdate.mutate(formData)
}

 const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


if (isLoading || isFetching) return <div>Loading...</div>
if (isError) return <div>{error.message}</div>
    return (
        <>
           <div className="flex justify-between items-center py-3">
    <div className="w-full">
        <h2 className="text-2xl font-bold tracking-tight">
            Quản lý sản phẩm
        </h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">#</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Image</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data?.data?.map((item:any, index:any) => (
                        <tr key={index} className="border-b">
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.image}</td>
                            <td className="border px-4 py-2">{item.price}</td>
                            <td className="border px-4 py-2">{item.description}</td>
                            <td className="border px-4 py-2">
                                <button className="px-2 py-1 bg-blue-500 text-white rounded"  onClick={() => handleEdit(item)}>Edit</button>
                                <button className="px-2 py-1 bg-red-500 text-white rounded ml-2" onClick={() => mutation.mutate(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>

 <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">
                    {isEditing ? "Edit Product" : "Add Product"}
                </h2>
                <form onSubmit={handleSubmit} className="flex space-x-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        className="border px-4 py-2 w-1/3"
                    />
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="border px-4 py-2 w-1/3"
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="border px-4 py-2 w-1/3"
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="border px-4 py-2 w-1/3"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        {isEditing ? "Update" : "Add"}
                    </button>
                </form>
            </div>

        </>
    );
};

export default ProductList;
