import {
    Button,
    Form,
    FormProps,
    Input,
    InputNumber,
    message,
    Select,
    Space,
    Switch,
} from "antd";
import { Link, useParams } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";
import { IProduct } from "@/common/types/product";
import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "@/configs/axios";
const ProductAdd = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { id } = useParams();
    const [form] = Form.useForm();

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const { data } = await instance.get(`/products/${id}`);
            // Object.values(data);
            return data;
        },
    });
    console.log(data);

    const { mutate } = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await instance.put(`/products/${id}`, product);
            return data;
        },
        onSuccess: () => {
            console.log("successs");
            messageApi.open({
                type: "success",
                content: "update product success!",
            });
            form.resetFields();
        },
        onError: () => {
            messageApi.open({
                type: "error",
                content: "Add product fail!",
            });
        },
    });

    const { TextArea } = Input;

    // const normFile = (e: any) => {
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e?.fileList;
    // };

    const onFinish: FormProps<IProduct>["onFinish"] = (values) => {
        mutate(values);
    };
    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between  ">
                <h1 className="text-red-500 font-semibold text-[30px]">
                    Add product
                </h1>
                <Link to={"/admin/products"}>
                    <Button>
                        <IoCaretBack />
                        Back to list products
                    </Button>
                </Link>
            </div>

            <div className="bg-gray-50 rounded-[10px] mt-[40px]">
                <div className="p-[20px]">
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ ...data }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item<IProduct>
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<IProduct>
                            label="Slug"
                            name="slug"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Category" name="category">
                            <Select>
                                <Select.Option value="notyet">
                                    Not yet
                                </Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item<IProduct>
                            label="Price product"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your price!",
                                },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>

                        <Form.Item<IProduct>
                            label="CountInStock"
                            name="countInStock"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your countInStock!",
                                },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>

                        <Form.Item
                            label="Image product"
                            name="image"
                            valuePropName="fileList"
                            // getValueFromEvent={normFile}
                        >
                            <img src={data?.image} alt="" />
                            {/* <Upload action="/upload.do" listType="picture-card">
                                <button
                                    style={{ border: 0, background: "none" }}
                                    type="button"
                                >
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                            </Upload> */}
                        </Form.Item>
                        <Form.Item label="Description">
                            <TextArea rows={8} />
                        </Form.Item>
                        <Form.Item
                            label="Featured"
                            name="featured"
                            valuePropName="checked"
                        >
                            <Switch />
                        </Form.Item>

                        <Form.Item>
                            <Space>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ProductAdd;
