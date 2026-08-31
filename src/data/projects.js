import foodApp from '../assets/images/Food-App.png';
import farmland from '../assets/images/Farmland.png';
import nearWallet from '../assets/images/near-wallet.png';
import Talenttribe from '../assets/images/talenttribe.png';

export const projects = [
    {
        id: 1,
        title: "Web3 Airdrop Interface",
        category: "Web3 Design",
        description: "A comprehensive landing page for managing token and NFT distribution campaigns, featuring clear participation instructions and seamless wallet connection.",
        image: nearWallet,
        tags: ["Web3", "React", "Blockchain"],
        link: "http://figma.com/design/7fi801r1gtpxn96qCQZqTE/Crypto-project?node-id=0-1&p=f&t=tAj2I7pD3Yz6uU7p-0",
        client: "DefiProtocol",
        role: "UI/UX Designer",
        duration: "1 Month",
        overview: "The client needed a trustworthy and easy-to-use interface for their token airdrop. The goal was to minimize confusion for new users entering the crypto space.",
        problem: "Complex wallet interactions and unclear eligibility criteria were causing high drop-off rates in previous campaigns.",
        solution: "Designed a step-by-step claim process with visual guides. Implemented clear status indicators for wallet connection and eligibility.",
        results: "Successful distribution to over 50k unique wallets with a 95% successful claim rate."
    },
    {
        id: 2,
        title: "Food Ordering App",
        category: "Mobile App Design",
        description: "A feature-rich food delivery application offering real-time tracking, reviews, and exclusive promotions for a seamless dining experience.",
        image: foodApp,
        tags: ["Figma", "Mobile", "Prototyping"],
        link: "https://www.figma.com/design/9meHE0cIGxwDKmq80rWfjG/food-app?node-id=0-1&p=f",
        client: "QuickEats",
        role: "Product Designer",
        duration: "3 Months",
        overview: "QuickEats wanted to compete in the crowded food delivery market by offering a more personalized and rewarding experience.",
        problem: "Users were overwhelmed by choice and frustrated by inaccurate delivery estimates.",
        solution: "Created a personalized feed based on user preferences and order history. Integrated a loyalty program directly into the checkout flow.",
        results: "User retention increased by 30% due to the loyalty program and improved order tracking visibility."
    },
    {
        id: 3,
        title: "Farmland Investment Platform",
        category: "Web Design",
        description: "A specialized marketplace for agricultural land, featuring detailed listings, soil quality data, and direct communication channels with sellers.",
        image: farmland,
        tags: ["Web Design", "Real Estate", "UI/UX"],
        link: "https://www.figma.com/design/oTf2Ql6tbsQC0UZPBlvn2A/Farmland-UI?node-id=0-1&p=f",
        client: "AgriInvest",
        role: "Lead Designer",
        duration: "2 Months",
        overview: "AgriInvest aimed to modernize the traditional process of buying and selling farmland by providing transparent data online.",
        problem: "Buyers lacked access to critical data like soil quality and historical yield without visiting properties in person.",
        solution: "Designed property listing pages that highlight key metrics visually. Added interactive maps and a direct messaging system for inquiries.",
        results: "The platform facilitated over $5M in land transactions in its first quarter."
    },
    {
        id: 4,
        title: "Talent-Tribe Redesign",
        category: "Web Design",
        description: "A vibrant community and digital ecosystem hub designed to support, upskill, and connect tech talent in Oyo State, Nigeria",
        image: Talenttribe,
        tags: ["Web Design", "Tech Commuities", "UI/UX"],
        link: "https://www.figma.com/proto/GumaL3Xc2fe4KObbyRebOh/Official-Website--Talent-Tribe-?node-id=620-238&t=NVbFtquQlbNrKo9c-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        client: "Oyo Talent-tribe",
        role: "Lead Designer",
        duration: "1 Month",
        overview: "Specifically founded to transform the local tech narrative from casual networking into a powerhouse of practical, employable innovation.",
        problem: "Created to solve the local tech-ecosystem gap where talent development was defined more by motivational gatherings than by hard, deployable skills.",
        solution: " Talent Tribe established a structured, decentralised technical funnel to turn raw raw interest into employable industry talent.",
        results: "Oyo Talent Tribe transformed a motivational tech scene into a regional pipeline that trained over 400 builders and launched AI-driven software solutions. "
    }
];
