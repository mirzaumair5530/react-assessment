import {ReactNode} from "react";
import type {To} from 'react-router-dom'


interface SidebarContentType {
    icon: ReactNode;
    name: String,
    path: To
}


const sidebarContent: SidebarContentType[] = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                <path
                    d="M5.88889 22.7696H3.44444C2.79614 22.7696 2.17438 22.5104 1.71596 22.049C1.25754 21.5876 1 20.9619 1 20.3094V9.59485C1.00023 9.2263 1.08272 8.86252 1.24138 8.53036C1.40004 8.19821 1.63082 7.90617 1.91667 7.67583L9.25 1.77117C9.68355 1.4218 10.2224 1.23145 10.7778 1.23145C11.3332 1.23145 11.872 1.4218 12.3056 1.77117L19.6389 7.67583C19.9247 7.90617 20.1555 8.19821 20.3142 8.53036C20.4728 8.86252 20.5553 9.2263 20.5556 9.59485V20.3094C20.5556 20.9619 20.298 21.5876 19.8396 22.049C19.3812 22.5104 18.7594 22.7696 18.1111 22.7696H15.6667"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.11133 15.3888H14.4447" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M10.7773 11.6984V22.7696" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        ),
        name: "Home",
        path: '/'
    }, {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 16.43V12.18" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M6.33002 16.43V9.07001" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M11.67 16.43V12.18" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M17 16.43V7.31" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M1 6.31L6.33 2.66L11.67 5.86L17 1" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        ),
        name: "Reports",
        path: '/reports'
    },

    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M16.3801 17.2442C16.0025 16.3979 15.388 15.6791 14.6107 15.1744C13.8335 14.6698 12.9268 14.4009 12.0001 14.4002C11.0734 14.4009 10.1667 14.6698 9.3895 15.1744C8.61227 15.6791 7.99775 16.3979 7.62012 17.2442"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M12.0006 10.7998C13.3261 10.7998 14.4006 9.7253 14.4006 8.39982C14.4006 7.07433 13.3261 5.99982 12.0006 5.99982C10.6751 5.99982 9.60059 7.07433 9.60059 8.39982C9.60059 9.7253 10.6751 10.7998 12.0006 10.7998Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M12.0002 22.8C17.9649 22.8 22.8002 17.9647 22.8002 12C22.8002 6.03534 17.9649 1.20001 12.0002 1.20001C6.03552 1.20001 1.2002 6.03534 1.2002 12C1.2002 17.9647 6.03552 22.8 12.0002 22.8Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        name: "Account",
        path: '/account'
    },

    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path
                    d="M11.8 9.23529C13.073 9.23529 14.2939 9.73109 15.1941 10.6136C16.0943 11.4961 16.6 12.6931 16.6 13.9412V18.6471H7V13.9412C7 12.6931 7.50571 11.4961 8.40589 10.6136C9.30606 9.73109 10.527 9.23529 11.8 9.23529V9.23529Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M11.8004 5.70588C13.1259 5.70588 14.2004 4.65243 14.2004 3.35294C14.2004 2.05345 13.1259 1 11.8004 1C10.4749 1 9.40039 2.05345 9.40039 3.35294C9.40039 4.65243 10.4749 5.70588 11.8004 5.70588Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M3.4 18.6471C2.76348 18.6471 2.15303 18.3992 1.70295 17.9579C1.25286 17.5166 1 16.9182 1 16.2941V14.8235C0.999238 14.0012 1.29136 13.2045 1.82594 12.5708C2.36052 11.9372 3.104 11.5064 3.928 11.3529"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M4.60039 8.05883C5.26313 8.05883 5.80039 7.5321 5.80039 6.88236C5.80039 6.23261 5.26313 5.70589 4.60039 5.70589C3.93765 5.70589 3.40039 6.23261 3.40039 6.88236C3.40039 7.5321 3.93765 8.05883 4.60039 8.05883Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M20.1999 18.6471C20.8364 18.6471 21.4468 18.3992 21.8969 17.9579C22.347 17.5166 22.5999 16.9182 22.5999 16.2941V14.8235C22.6006 14.0012 22.3085 13.2045 21.7739 12.5708C21.2394 11.9372 20.4959 11.5064 19.6719 11.3529"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M18.9998 8.05883C19.6625 8.05883 20.1998 7.5321 20.1998 6.88236C20.1998 6.23261 19.6625 5.70589 18.9998 5.70589C18.3371 5.70589 17.7998 6.23261 17.7998 6.88236C17.7998 7.5321 18.3371 8.05883 18.9998 8.05883Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        name: "Members",
        path: '/members'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                <path d="M5.88867 6.0002H15.6664" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M5.88867 10.8002H15.6664" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M18.1111 1.2002H3.44444C2.09441 1.2002 1 2.27471 1 3.6002V20.4002C1 21.7257 2.09441 22.8002 3.44444 22.8002H18.1111C19.4611 22.8002 20.5556 21.7257 20.5556 20.4002V3.6002C20.5556 2.27471 19.4611 1.2002 18.1111 1.2002Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M1 15.6002H6.5C6.98623 15.6002 7.45255 15.7898 7.79636 16.1274C8.14018 16.465 8.33333 16.9228 8.33333 17.4002V17.4002C8.33333 17.8776 8.52649 18.3354 8.8703 18.673C9.21412 19.0106 9.68044 19.2002 10.1667 19.2002H11.3889C11.8751 19.2002 12.3414 19.0106 12.6853 18.673C13.0291 18.3354 13.2222 17.8776 13.2222 17.4002C13.2222 16.9228 13.4154 16.465 13.7592 16.1274C14.103 15.7898 14.5693 15.6002 15.0556 15.6002H20.5556"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        name: "Inbox",
        path: '/inbox'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                <g clipPath="url(#clip0_631_123)">
                    <path
                        d="M9.20001 19.83C9.07001 19.83 8.94001 19.81 8.82001 19.76C8.70001 19.71 8.59001 19.63 8.49001 19.54C8.40001 19.45 8.33001 19.34 8.28001 19.22C8.22001 19.1 8.20001 18.96 8.20001 18.83C8.20001 18.7 8.22001 18.57 8.28001 18.45C8.33001 18.33 8.40001 18.22 8.49001 18.13C8.88001 17.74 9.51001 17.73 9.90001 18.13C10.08 18.32 10.19 18.57 10.19 18.83C10.19 18.96 10.16 19.1 10.11 19.22C9.95001 19.59 9.59001 19.83 9.19001 19.83H9.20001Z"
                        fill="#222224"/>
                    <path d="M4.90002 8.66H13.5" stroke="#8247F6" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M4.90002 13.75H13.5" stroke="#8247F6" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path
                        d="M15.03 1H3.37C2.06108 1 1 2.06108 1 3.37V20.28C1 21.5889 2.06108 22.65 3.37 22.65H15.03C16.3389 22.65 17.4 21.5889 17.4 20.28V3.37C17.4 2.06108 16.3389 1 15.03 1Z"
                        stroke="#222224" strokeWidth="2" strokeMiterlimit="10"/>
                    <path d="M4.52002 1.18L7.09002 3.51H11.3L13.88 1.18H4.52002Z" fill="#222224" stroke="#222224"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_631_123">
                        <rect width="18.4" height="23.65" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ),
        name: "Home Feed",
        path: '/home-feed'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                <g clipPath="url(#clip0_631_161)">
                    <path
                        d="M20.09 1H3.39C2.07004 1 1 2.07004 1 3.39V15.31C1 16.63 2.07004 17.7 3.39 17.7H20.09C21.41 17.7 22.48 16.63 22.48 15.31V3.39C22.48 2.07004 21.41 1 20.09 1Z"
                        stroke="#4B4B4D" strokeWidth="2" strokeMiterlimit="10"/>
                    <path d="M21.54 3.18H1.87L2.47 1.55L21.19 1.27L21.54 3.18Z" stroke="#4B4B4D" strokeWidth="1.9"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.26 7.27H13.19V9.81H18.26V7.27Z" fill="#4B4B4D" stroke="#4B4B4D" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_631_161">
                        <rect width="23.48" height="18.7" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ),
        name: "Account",
        path: '/account'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M20 12L19.1733 15.32C19.0279 15.8957 18.6944 16.4063 18.2259 16.771C17.7573 17.1357 17.1804 17.3336 16.5867 17.3333H7.41333C6.81957 17.3336 6.24269 17.1357 5.77414 16.771C5.30558 16.4063 4.97214 15.8957 4.82667 15.32L4 12"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.33301 12H22.6663" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M10.666 18.6667V22.6667H13.3327V18.6667" stroke="#4B4B4D" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8H8H16Z" fill="#4B4B4D"/>
                <path d="M16 8H8" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M11.9993 4C12.7357 4 13.3327 3.40304 13.3327 2.66667C13.3327 1.93029 12.7357 1.33333 11.9993 1.33333C11.263 1.33333 10.666 1.93029 10.666 2.66667C10.666 3.40304 11.263 4 11.9993 4Z"
                    fill="#4B4B4D" stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        name: "Service",
        path: '/service'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M19.9997 1.33301H3.99967C2.52691 1.33301 1.33301 2.52691 1.33301 3.99967V19.9997C1.33301 21.4724 2.52691 22.6663 3.99967 22.6663H19.9997C21.4724 22.6663 22.6663 21.4724 22.6663 19.9997V3.99967C22.6663 2.52691 21.4724 1.33301 19.9997 1.33301Z"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M6.66602 6.99967C8.43935 6.99967 8.43935 8.99967 10.2127 8.99967C11.986 8.99967 11.9993 6.99967 13.7727 6.99967C15.546 6.99967 15.5593 8.99967 17.3327 8.99967"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M6.66602 14.9997C8.43935 14.9997 8.43935 16.9997 10.2127 16.9997C11.986 16.9997 11.9993 14.9997 13.7727 14.9997C15.546 14.9997 15.5593 16.9997 17.3327 16.9997"
                    stroke="#4B4B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        name: "Resource",
        path: '/resource'
    },
]

export {
    sidebarContent,
}