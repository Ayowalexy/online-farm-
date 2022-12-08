import { CgMenuGridR } from 'react-icons/cg';
import { AiFillCreditCard, AiFillMoneyCollect } from 'react-icons/ai';
import { RiHandCoinFill, RiExchangeFill, RiCustomerService2Fill, RiLogoutCircleFill } from 'react-icons/ri';
import { IoNewspaperSharp } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';


export const navigations = [
    {
        route: '/dashboard',
        icon: CgMenuGridR,
        name: 'Dashboard'
    },
    {
        route: '/all-users',
        icon: AiFillCreditCard,
        name: 'All Users'
    },{
        route: '/all-sellers',
        icon: RiHandCoinFill,
        name: 'All Sellers'
    },{
        route: '/all-products',
        icon: AiFillMoneyCollect,
        name: 'All Products'
    }
    ,{
        route: '/product',
        icon: IoNewspaperSharp,
        name: 'Add Product'
    },{
        route: '/dashboard',
        icon: BsPersonFill,
        name: 'Account'
    },{
        route: '/',
        icon: RiLogoutCircleFill,
        name: 'Logout'
    },
]

export const sellers_navigations = [
    {
        route: '/dashboard',
        icon: CgMenuGridR,
        name: 'Dashboard'
    },
    ,{
        route: '/all-products',
        icon: AiFillMoneyCollect,
        name: 'All Products'
    }
    ,{
        route: '/product',
        icon: IoNewspaperSharp,
        name: 'Add Product'
    },{
        route: '/dashboard',
        icon: BsPersonFill,
        name: 'Account'
    },{
        route: '/',
        icon: RiLogoutCircleFill,
        name: 'Logout'
    },
]