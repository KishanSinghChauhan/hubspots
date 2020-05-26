import React from 'react';  
import Header from '../Components/Header';
import DailyUpdate from '../Components/DailyUpdate';
import HomePageInfo from '../Components/HomePageInfo';
import HomePageCards from '../Components/HomePageCards';
import HubSpotSupport from '../Components/HubSpotSupport';
import HubSpotProfile from '../Components/HubSpotProfile';
import HubSpotFooter from '../Components/HubSpotFooter';


const HomePage = () => { 

    const cardsData = [
        {   
            id:1,
            cardHeading: 'Free HubSpot CRM',
            cardDetails: "Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever.",
            cardListHeading: 'POPULAR FEATURES',
            cardList: ['Contact Insights', 'Deals', 'Tasks'],
            buttonName: 'Get free CRM'
        },
        {   
            id:2,
            cardHeading: 'CMS Hub',
            cardDetails: "Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.",
            cardListHeading: 'POPULAR FEATURES',
            cardList: ['Drag-and-Drop Editor', 'SEO Recommendations', 'Website Themes'],
            buttonName: 'Get started',
            status: 'NEW'
        },
        {   
            id:3,
            cardHeading: 'Marketing Hub',
            cardDetails: "Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.",
            cardListHeading: 'POPULAR FEATURES',
            cardList: ['Contact Insights', 'Deals', 'Tasks'],
            buttonName: 'Get started'
        },
        {   
            id:4,
            cardHeading: 'Sales Hub',
            cardDetails: "Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.",
            cardListHeading: 'POPULAR FEATURES',
            cardList: ['Email Tracking', 'Meeting Scheduling', 'Email Automation'],
            buttonName: 'Get started'
        },
        {   
            id:5,
            cardHeading: 'Service Hub',
            cardDetails: "Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business.",
            cardListHeading: 'POPULAR FEATURES',
            cardList: ['Tickets', 'Customer Feedback', 'Knowledge Base'],
            buttonName: 'Get started'
        }
    ] 

    return ( 
        <>
            <Header />
            <DailyUpdate />
            <HomePageInfo />
            <HomePageCards cardsData={cardsData}/>   
            <HubSpotSupport />
            <HubSpotProfile />
            <HubSpotFooter />
        </>
    );
}
 
export default HomePage;