import { IconType } from "react-icons";

export interface IAuthContext {
    isLoggedIn: boolean;
    accessToken: string | null
    refreshToken: string | null
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    email: string | null; 
    role: RolesEnum | null;
    warehouse: string | null;
}

export interface IPagination {
    page: number;
    limit: number;
}

export interface IQuery {
    pagination?: IPagination;
    search?: string;
    vendor?: string;
    warehouse?: string;
    id?: string;
}

export interface IProductQuery {
    pagination?: IPagination;
    search?: string;
    vendor?: string;
    warehouse?: string;
}

export interface INavItems {
    id: number;
    title: string;
    link: string;
    Icon: IconType;
    root?: boolean;
}

export interface INav { 
    id: number;
    title: string;
    navItems: INavItems[];
}

export interface IUserLogin {
    username: string
    password: string
}
export interface IWithdraw {
    account: number | string
    amount: number
    settlementBank: string
    remark?: string
}
export interface IVerifyBank {
    account: string
    settlementBank: string
}
export interface IVerifyBankResponse {
    message: string
    bank: {
        confirmationMessage: string
        confirmationCode: null
        details: {
            message: {
                settlement_bank: string
                account_name: string
                account_number: string
            }
        }
    }
}

export interface IBank {
    bankName: string
    bankCode: string
}
export interface IBanksResponse {
    message: string,
    banks: {
        confirmationMessage: string,
        confirmationCode: number,
        details: {
            message: IBank[]
        }
    }
}



export interface ILoginSuccessData {
    token: string
    doc: {
        _id: string
        balance: number
        email: string
        username: string
        phone: string
    }
}

export interface IReducerAction<T> {
    type: T | 'reset' | 'setAll';
    payload: string | number | boolean | Partial<T> | null;
}

export interface IItemReducerAction<T> extends IReducerAction<T> {
    index?: number;
    field?: keyof IProductVariant;
}

export interface IOrderReducerAction<T> extends IReducerAction<T> {
    index?: number;
    field?: keyof IOrderItem | keyof IOrderCustomer;
}

export enum PaymentChannelEnum {
    pos = 'pos',
    transfer = 'transfer',
    cash = 'cash',
}


export const TierEnum = {
    one: 1,
    two: 2,
    custom: 3,
}

export enum StatusEnum {
    created = 'created',
    paid = 'payment settled',
    shipped = 'shipped',
    delivered = 'delivered',
    cancelled = 'cancelled',
}

export enum RolesEnum {
    administrator = 'Administrator',
    vendor = 'Vendor',
    partner = 'Partner',
    driver = 'Driver',
    customer = 'Customer',
}

export enum AdminRolesEnum {
    admin = 'Admin',
    superadmin = 'Superadmin',
}
  
export enum VehicleTypeEnum {
    bike = 'Bike',
    tricycle = 'Tricycle',
    car = 'Car',
    truck = 'Truck',
}

export enum VehicleOwnershipEnum {
    internal = 'internal',
    external = 'external',
}

export enum StockMovementEnum {
    sale = 'SALE',
    stock = 'STOCK',
}
  
export interface IPaginatedResponse<T> {    
    totalCount: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    data: T;
}

export type IProduct = {
    _id?: string;
    name: string;
    category: string | ICategory;
    vendor: string | IVendor;
    warehouse: string;
    featuredImage?: string;
    slug?: string;
    description?: string;
    images?: string[];
    items?: IProductVariant[];
}

export type IVendorDashboard = {
    totalProducts?: string;
    totalOrders?: string;
}

export type IUpdateProduct = Omit<IProduct, "warehouse" | "vendor"> & {
    autoUpdateVariantName?: boolean;
}

export type IProductVariant = {
    _id?: string;
    name: string;
    sku: string;
    price: number;
    stock: number;
    itemDeliveryCost: number;
    featuredImage?: string;
    images?: string[];
    product?: string;
} 

export type IAddToStock = Pick<IProductVariant, "stock">

export type IProductVariantMap = {
    [key: number]: IProductVariant
} 

export type ICategory = {
    _id?: string;
    code: string;
    name: string;
    parentId?: string;
    description?: string;
    featuredImage?: string;
}

export type IAddress = {
    _id?: string;
    customerId?: string;
    streetLine1: string;
    streetLine2?: string;
    city: string;
    state: string;
    country: string;
}

export type IOrderAddress = {
    streetLine1: string;
    streetLine2?: string;
    city: string;
    state: string;
    country: string;
}

export type IAdministrator = {
    _id?: string;
    user?: IUser;
    role?: AdminRolesEnum;
}

export type ICustomer = {
    _id?: string;
    user?: IUser;
    defaultAddress?: string;
    addresses?: string[];
}

export type IDiscount = {
    _id?: string;
    amount: number;
    description?: string;
    couponCode?: string;
}

export type IDriver = {
    _id?: string;
    driverLicense: string;
    user?: IUser;
    vehicle?: string;
}

export type IOrderItem = {
    amount: number;
    productVariant: string;
    productVariantName: string;
    qty: number;
    unitPrice: number;
    featuredImage?: string;
    sku?: string;
    stock?: number;
}

export type IOrderCustomer = {
    streetLine1: string;
    city: string;
    state: string;
    country: string;
    name?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    streetLine2?: string | undefined;
}

export type IOrder = {
    _id?: string;
    status?: StatusEnum;
    channel: PaymentChannelEnum | '';
    orderCode?: string;
    tier: number | null;
    deliveryCost?: number | null;
    items: IOrderItem[];
    discounts: string[];
    vendor?: string;
    customerId?: string;
    customer?: IOrderCustomer,
    warehouse?: string;
    // address: IOrderAddress,
    driver?: string;
    subTotal?: string;
    total?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type ICreateOrderAdmin = {
    _id?: string;
    status?: StatusEnum;
    channel: PaymentChannelEnum | '';
    orderCode?: string;
    tier: number | null;
    deliveryCost?: number | null;
    items: IOrderItem[];
    discounts: string[];
    vendor?: string;
    isNewCustomer?: boolean;
    newCustomer?: ICustomer & IUser;
    customerId?: string;
    customer?: IOrderCustomer,
    warehouse?: string;
    driver?: string;
    subTotal?: string;
    total?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type IUpdateOrder = Partial<Omit<IOrder, "warehouse" | "vendor"> & {
}>

export type IUpdateOrderStatus = Pick<IOrder, 'status'>


export type IPartner = {
    _id?: string;
    city: string;
    state: string;
    user: string;
    address: string;
    businessName: string;
    phone: string;
    email: string;
}

export type IStockMovement = {
    _id?: string;
    value: number;
    type: StockMovementEnum;
    productVariant: string;
    warehouse: string;
}

export type IUser = {
    _id?: string;
    phone: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    role?: RolesEnum;
    middleName?: string;
    accountRef?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type IVehicle = {
    _id?: string;
    type: VehicleTypeEnum;
    registrationNumber: string;
    chassisNumber: string;
    ownership: VehicleOwnershipEnum;
}

export type IVendor = {
    _id?: string;
    city: string;
    state: string;
    address: string;
    businessName: string;
    phone: string;
    user?: IUser;
    tier1DeliveryCost?: number;
    tier2DeliveryCost?: number;
}

export type IWarehouse = {
    _id?: string;
    name: string;
    city: string;
    description?: string;
}

export interface IEvent {
    event_is_live: boolean
    totalCount: number
    active: boolean
    status: string
    _id: string
    eventName: string
    type: string
    image_url: string
    companyName: string
    venue: string
    startDate: Date
    startTime: string
    aboutEvent: string
    eventOwner: string
    contactNumber: string
    eventOwnerEmail: string
    eventOwnerUsername: string
}

export  interface IEventResponse {
    myEvent: IEvent[] 
}

export interface ITransaction {
    _eventOwnerID: string
    amount: string
    type: string
    description: string
    createdAt: string
}

export interface ITransactionResponse {
    transactionCount: number
    transList: ITransaction[]
}

export interface IAddBank {
    account_number: string,
    bank_code: string
    bank_name: string,
    is_default: boolean
}

export interface IAddBankAction extends IReducerAction<"account_number" | "bank_code" | "bank_name" | "is_default" | "reset"> {
    payload: string | number | boolean
}