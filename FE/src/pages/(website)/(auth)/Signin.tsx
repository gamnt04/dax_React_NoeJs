import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import instance from "@/configs/axios";
import { useNavigate } from "react-router-dom";

type FieldType = {
    email?: string;
    password?: string;
    remember: boolean;
};

const SignIn = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { mutate, isPending } = useMutation({
        mutationFn: async (formData) => {
            const { data } = await instance.post("/auth/signin", formData);
            return data;
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "signin success!",
            });
            form.resetFields();
            navigate("/");
        },
        onError: () => {
            messageApi.open({
                type: "error",
                content: "signin fail!",
            });
            form.resetFields();
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        mutate(values); //?
    };

    return (
        <>
            {contextHolder}
            <div className="container flex flex-col mx-auto bg-white rounded-lg mt-5 mb-[300px]">
                <div className="flex justify-center w-full h-full my-auto lg:justify-normal draggable">
                    <div className="flex items-center justify-center w-full ">
                        <div className="flex items-center xl:p-7">
                            <div className="flex flex-col w-full h-full p-6 text-center bg-white shadow-lg rounded-3xl border">
                                <h3 className="mb-3 text-4xl font-extrabold text-gray-900">
                                    Đăng nhập
                                </h3>
                                <p className="mb-4 text-gray-600">
                                    Nhập email và mật khẩu của bạn
                                </p>
                                <Form
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    autoComplete="off"
                                >
                                    <Form.Item<FieldType>
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your username!",
                                            },
                                        ]}
                                    >
                                        <Input disabled={isPending} />
                                    </Form.Item>

                                    <Form.Item<FieldType>
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your password!",
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item<FieldType>
                                        name="remember"
                                        valuePropName="checked"
                                    >
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SignIn;
