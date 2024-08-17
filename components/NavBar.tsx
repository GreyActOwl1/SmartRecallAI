"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const [isOpen , setIsOpen] = useState(false);
    return (
        <div className='bg-black h-16 w-full flex pr-6 md:pr-12 pl-4 md:pl-12 items-center justify-between'>
            {/* Logo Text*/}
            <Link href="/"><p className='text-gray-300 text-xs whitespace-nowrap md:text-sm'> Powered by Alfred AI</p></Link>
            {/*Navigation Options*/}
            <div className='text-gray-300 text-sm  gap-x-4 hidden md:flex'>
            <Link href="/about" className='hover:text-white'>About us</Link>
            <Link href="/create" className='hover:text-white'>Create</Link>
            </div>

{/*Mobile Screen Navigation Options */}
<div className=' inline md:hidden'>
 <RxHamburgerMenu size={22} onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer mr-4 relative text-gray-200 hover:text-white duration-200 transition-all'/> 
   {isOpen && (<div className='absolute w-28 h-auto duration-200 transition-all p-3 mt-2 rounded-lg top-10 right-10 text-gray-400  bg-black border border-gray-300 flex flex-col items-center'>
    <Link href="" className='hover:text-white text-sm'>About us</Link>
    <Link href="/create" className='hover:text-white text-sm'>Create</Link>


   </div>)}   
</div>
        </div>
    );
}

export default NavBar;


// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
// import { Kbd } from "@nextui-org/kbd";
// import { Link } from "@nextui-org/link";
// import { Input } from "@nextui-org/input";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
// import {
//   TwitterIcon,
//   GithubIcon,
//   DiscordIcon,
//   HeartFilledIcon,
//   SearchIcon,
//   Logo,
// } from "@/components/icons";

// export const Navbar = () => {
//   const searchInput = (
//     <Input
//       aria-label="Search"
//       classNames={{
//         inputWrapper: "bg-default-100",
//         input: "text-sm",
//       }}
//       endContent={
//         <Kbd className="hidden lg:inline-block" keys={["command"]}>
//           K
//         </Kbd>
//       }
//       labelPlacement="outside"
//       placeholder="Search..."
//       startContent={
//         <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
//       }
//       type="search"
//     />
//   );

//   return (
//     <NextUINavbar maxWidth="xl" position="sticky">
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <Logo />
//             <p className="font-bold text-inherit">ACME</p>
//           </NextLink>
//         </NavbarBrand>
//         <ul className="hidden lg:flex gap-4 justify-end ml-2">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium"
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//           ))}
//         </ul>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden lg:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         {/* <NavbarItem className="hidden sm:flex gap-2">
//           <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
//             <TwitterIcon className="text-default-500" />
//           </Link>
//           <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
//             <DiscordIcon className="text-default-500" />
//           </Link>
//           <Link isExternal aria-label="Github" href={siteConfig.links.github}>
//             <GithubIcon className="text-default-500" />
//           </Link>      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

//         </NavbarItem>
//         <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> 
//         <NavbarItem className="hidden md:flex">
//           <Button
//             isExternal
//             as={Link}
//             className="text-sm font-normal text-default-600 bg-default-100"
//             href={siteConfig.links.sponsor}
//             startContent={<HeartFilledIcon className="text-danger" />}
//             variant="flat"
//           >
//             Sponsor
//           </Button>
//         </NavbarItem> */}

//         <ThemeSwitch />
//       </NavbarContent>

//       <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
//         {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
//           <GithubIcon className="text-default-500" />
//         </Link> */}
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         {searchInput}
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                     ? "danger"
//                     : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };
