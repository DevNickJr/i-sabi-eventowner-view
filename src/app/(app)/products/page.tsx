import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import ProductsTab from './_components/ProductsTab'
import VariantsTab from './_components/VariantsTab'

const Products = () => {
  return (
    <>
        <div className="flex flex-wrap justify-between gap-2 mb-5 md:flex-row md:items-center">
            <h2 className='text-3xl font-bold text-black/80'>Products</h2>
            {/* <Link href={ROUTES.ADMIN.PRODUCT.CREATE}>
                <Button className='flex items-center gap-2 p-2 px-4 text-xs text-white md:px-4 w-fit rounded-xl bg-primary'>
                    <MdAdd className="text-lg text-white" />
                    <span>Create Product</span>
                </Button>        
            </Link> */}
        </div>
        <Tabs defaultValue="products" className="">
            <TabsList>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="variants">Variants</TabsTrigger>
            </TabsList>
            <TabsContent value="products">
                <ProductsTab />
            </TabsContent>
            <TabsContent value="variants">
                <VariantsTab />
            </TabsContent>
        </Tabs>
    </>
  )
}

export default Products