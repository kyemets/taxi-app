import premiumIcon from "../../../assets/images/premium.png";
import businessIcon from "../../../assets/images/business.png";
import economIcon from "../../../assets/images/econom.png";
import boatIcon from "../../../assets/images/boat.png";
import helicopterIcon from "../../../assets/images/helicopter.png";

interface IList {
    _id: string;
    title: string;
    img: string;
    multiplier: number;
}


export const optionsList: IList[] = [
    {
        _id: 'premium-123',
        title: 'Premium',
        img: premiumIcon.src,
        multiplier: 1.5,
    },
    {
        _id: 'business-456',
        title: 'Business',
        img: businessIcon.src,
        multiplier: 1.2,
    },
    {
        _id: 'economy-789',
        title: 'Economy',
        img: economIcon.src,
        multiplier: 1,
    },
    {
        _id: 'board-101',
        title: 'Boat',
        img: boatIcon.src,
        multiplier: 1.8,
    },
    {
        _id: 'helicopter-202',
        title: 'Helicopter',
        img: helicopterIcon.src,
        multiplier: 2.5,
    },
];

