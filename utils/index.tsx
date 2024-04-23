import { ReactElement } from "react"
import { Facebook, Linkedin, Youtube } from "lucide-react"
interface LinkProps {
    id:number,
    href:string,
    label:string,
}
interface  SocialsProps {
    id:number,
    href:string,
    component:ReactElement
}

export const navLinks:LinkProps[] = [
    {
        id:1,
        href:'',
        label:`News & Events`
    },
    {
        id:2,
        href:'',
        label:'Careers'
    },
    {
        id:3,
        href:'',
        label:'Contact'
    },
    {
        id:1,
        href:'',
        label:'About us'
    },
   
]

export const secondaryLinks: LinkProps[] =[
    {
        id:1,
        href:"#",
        label:"Privacy"
    },
    {
        id:2,
        href:"#",
        label:"Term of use"
    },
    {
        id:3,
        href:"#",
        label:"Do not sell my personal information"
    },
    {
        id:4,
        href:"#",
        label:'\u00A9 2024 BluePoint website, LLC'
    },
]

export const socials:SocialsProps[]=[
    {
        id:1,
        href:"#",
        component:<Facebook/>
    },
    {
        id:2,
        href:"#",
        component:<Youtube/>
    },
    {
        id:3,
        href:"#",
        component:<Linkedin/>
    },
  
]