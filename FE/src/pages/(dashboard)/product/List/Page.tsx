import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import { IProduct } from "@/common/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "@/configs/axios";
import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IProduct[]) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows,
        );
    },
    getCheckboxProps: (record: IProduct) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
    }),
};

const ProductList = () => {
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get("/products"),
    });


    const { mutate } = useMutation({
        mutationFn: async (id) => {
            const { data } = await instance.delete(`/products/${id}`);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            messageApi.open({
                type: "success",
                content: "Xóa sản phẩm thành công",
            });
        },
        onError: () => {
            messageApi.open({
                type: "error",
                content: "Xoá sản phẩm thất bại!",
            });
        },
    });

    const dataSource: IProduct[] = data?.data?.docs.map(
        (product: IProduct) => ({ key: product._id, ...product }),
    );
    const columns: TableColumnsType<IProduct> = [
        {
            title: "Image",
            dataIndex: "image",
            render: (_: any, product: any) => {
                return (
                    <>
                        <img src={product.image} width={100} alt="Error" />
                    </>
                );
            },
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (text: string) => <a>{text}</a>,
        },
        {
            //  key: "category",
            title: "Category",
            dataIndex: "category",
            render: (_: any, product: any) => {
                return (
                    <>{product?.category ? "lỗi cập nhật" : "Chưa phân loại"}</>
                );
            },
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "CountInStock",
            dataIndex: "countInStock",
        },
        {
            title: "Featured",
            dataIndex: "featured",
            render: (_: any, product: any) => {
                return <>{product?.featured ? "Có" : "Không"}</>;
            },
        },
        {
            title: "Actions",
            render: (_: any, product: any) => (
                <div>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => mutate(product._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Link to={`/admin/product/${product._id}`}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            ),
        },
    ];

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;

    return (
        <>
            {contextHolder}
            <div className="flex items-center justify-between  ">
                <h1 className="text-red-500 font-semibold text-[30px]">
                    Danh sách sản phẩm
                </h1>
                <Link to="add">
                    <Button className="bg-blue-500 text-[#ffffff]">
                        {" "}
                        <IoIosAddCircle /> Thêm 1 sản phẩm
                    </Button>
                </Link>
            </div>
            <div>
                <Divider />

                <Table
                    rowSelection={{
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={dataSource}
                />
            </div>
        </>
    );
};

export default ProductList;
