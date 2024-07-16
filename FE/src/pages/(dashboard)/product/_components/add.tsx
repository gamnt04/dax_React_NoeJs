import { ProductJoiSchema } from "@/common/validations/product"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import instance from "@/configs/axios"
import { joiResolver } from "@hookform/resolvers/joi"
import { useForm } from "react-hook-form"

const addProduct = () => {
const form = useForm({
    resolver: joiResolver(ProductJoiSchema),
    defaultValues: {
        name: "",
        price: 0,
    }
})

const {mutate, isPending, isError, error} = useMutation({
    mutationFn: (formData: any) => instance.post("/products", formData)
})

if (isPending) return <div>Loading...</div>
if (isError) return <div>{error.message}</div>
    return (
        <>
        <Form {...form}>
            <form action="">
                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Name" {...field} />
                        </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
            </form>
        </Form>
        </>
    )
};
export default addProduct