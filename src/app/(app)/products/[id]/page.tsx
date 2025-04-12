"use client"
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ROUTES } from '@/constants/routes'
import { useAuthContext } from '@/hooks/useAuthContext'
import useFetch from '@/hooks/useFetch'
import useMutate from '@/hooks/useMutate'
import { usePagination } from '@/hooks/usePagination'
import { ICategory, IItemReducerAction, IPaginatedResponse, IProduct, IProductVariant, IUpdateProduct } from '@/interfaces'
import { apiGetAllCategories } from '@/services/CategoryService'
import { apiGetProduct, apiGetProductVariantsByProductId, apiUpdateProduct } from '@/services/ProductService'
import { useParams, useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useReducer, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { variantsColumnnsMaker } from '../_components/variants.columns'
import DataTable from '@/components/Table/data-table'
import InlineLoader from '@/components/Loader/Inline'
import NoResult from '@/components/NoResult'
import { HiOutlineDocumentAdd } from "react-icons/hi"
import useFileUpload from '@/hooks/useFileUpload'
import Image from 'next/image'

const initialState: IUpdateProduct = {
    name: '',
    description: '',
    featuredImage: '',
    category: '',
    images: [],
}

const productReducer = (state: IUpdateProduct, action: IItemReducerAction<IUpdateProduct>): IUpdateProduct => {
    switch (action.type) {
      case 'items':
        const items = state.items?.map((item, index) => {
            if (action.index === index && !!action.field) {
                return {
                    ...item,
                    [action.field]: action.payload
                    // name: e.target.value,
                }
            }
            return item
        })
        return {
          ...state,
          items,
        };
      case 'setAll':
        return { ...state, ...(typeof action.payload == 'object' && action.payload) };
      default:
        return { ...state, [action.type]: action.payload };
    }
};
    
const EditProduct = () => {
    const [product, dispatch] = useReducer(productReducer, initialState)
    const router = useRouter()
    const params = useParams<{ id: string; }>()

    const updateproductMutation = useMutate<IUpdateProduct, unknown>(
        apiUpdateProduct,
        {
          onSuccess: () => {
            //   console.log("data", data)
              toast.success("Product Updated Successfully.")
              return router.push(ROUTES.ADMIN.PRODUCT.INDEX)
          },
          showErrorMessage: true,
          requireAuth: true,
          id: params.id,
        }
      )

    //   console.log({ product })
    const { limit, onPaginationChange, page, pagination } = usePagination();

    const { data: categories } = useFetch<ICategory[]>({
        api: apiGetAllCategories,
        key: ["Categories"],
        requireAuth: true
    })
    

    const { data: productData } = useFetch<IProduct>({
        api: apiGetProduct,
        enabled: !!params.id,
        param: {
            id: params.id,
        },
        key: ["product", params.id],
    })

    useEffect(() => {
        if (!productData) return
        dispatch({ type: "setAll", payload: {
            name: productData.name,
            description: productData.description,
            featuredImage: productData.featuredImage,
            category: productData.category,
            images: productData.images,
        } })
    }, [productData])

    const { data: productVariants, isLoading, refetch } = useFetch<IPaginatedResponse<IProductVariant[]>>({
        api: apiGetProductVariantsByProductId,
        param: {
            pagination: { page, limit },
            id: params.id,
        },
        enabled: !!params.id,
        key: ["ProductVariants", page, limit, params.id],
    })
  
    const columns = variantsColumnnsMaker()

    return (
        <>
            {
                !!productData ? 
                <>
                    <div className='relative p-4 mb-6 bg-white rounded-lg shadow-lg'>
                        {(updateproductMutation?.isPending) && <Loader />}
                        <div className="flex flex-col justify-between gap-3 mb-8 md:flex-row md:items-center">
                            <h2 className='text-lg font-semibold text-black/60'>Update Product</h2>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className='flex flex-col gap-2 text-xs'>
                                    <Label htmlFor="name">Name</Label>
                                    <Input disabled required value={product?.name} onChange={(e) => {
                                        dispatch({ type: "name", payload: e.target.value });                                    
                                    }} type="text" name="name" id="name" placeholder='' />
                                </div>
                                <div className='flex flex-col gap-2 text-xs'>
                                    <Label htmlFor="category">Category</Label>
                                    <Select disabled onValueChange={(value) => !!value && dispatch({ type: "category", payload: value })} value={product.category?.toString()}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                categories?.map((category, index) => (
                                                    <SelectItem key={category?._id ?? index} value={category?._id || ''}>{category.name}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='flex flex-col col-span-2 gap-2 text-xs'>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea disabled rows={3} required value={product?.description} onChange={(e) => dispatch({ type: "description", payload: e.target.value})} name="description" id="description" placeholder='' />
                                </div>
                                <div className='flex flex-col col-span-2 gap-2 text-xs'>
                                    <label htmlFor='featuredImage' className={`rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 relative w-fit $ ${!(product.featuredImage) && 'py-5 px-4 sm:px-8 md:px-20'}`}>
                                        {
                                            (product.featuredImage) ? 
                                            <div className='relative w-full h-full group'>
                                                <Image src={product.featuredImage || ''} width={100} height={100} className='self-start object-contain w-full h-full max-w-xs bg-red-200 aspect-auto' alt='featured' />
                                                <div className={`absolute invisible group-hover:visible top-0 w-full h-full bg-black/30 flex flex-col items-center justify-center`}>
                                                    <HiOutlineDocumentAdd className={'w-6 h-6 mb-3'}/>
                                                    <span className={'mb-1'}>Upload New Image.</span>
                                                    <span>File size cannot exceed <strong>2MB</strong>.</span>
                                                </div>
                                            </div>
                                            :
                                        <>
                                            <span className={''}>No Image Uploaded</span>
                                        </>
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative p-4 mb-6 bg-white rounded-lg shadow-lg'>
                        <h4 className='mb-3 text-lg font-semibold text-black/60'>Product Variants</h4>
                    
                        {
                            !isLoading ?
                            <DataTable
                                title="ProductVariant"
                                columns={columns} 
                                data={productVariants?.data ?? []} 
                                onPaginationChange={onPaginationChange}
                                pageCount={Number(productVariants?.totalPages || 0)}
                                totalDocs={Number(productVariants?.totalCount)}
                                pagination={pagination}
                            />
                                :
                            <InlineLoader />
                        }
                    </div>
                </> 
                : <>
                    <NoResult
                        isLoading={isLoading}
                        desc='Product Not Found' 
                    />
                </>
            }
        </>
    )
}

export default EditProduct