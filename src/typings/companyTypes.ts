export interface Company {
    available: boolean;
    azkiDiscountTitle: DiscountTitle;
    azkiPenaltyDiscountEnable: boolean;
    bimitoDiscountPercent: number;
    bimitoDiscountTitle: DiscountTitle;
    branchDiscountPercent: number;
    branchNumber: number;
    cashPayment: boolean;
    companyDiscountPercent: number;
    complaintResponseTime: number;
    damagedShortTermEnable: boolean;
    description: string;
    enable: boolean;
    enableExpireDatePayment: boolean;
    extraPenaltyPercent: number;
    extraPercent: number;
    features: Feature[];
    forgivenessDescription?: string;
    giftTitle: GiftTitle;
    hasGift: boolean;
    helpIcons: HelpIcon[];
    hideDiscount: boolean;
    icon: string;
    id: number;
    installments: RootObjectInstallment[];
    longPenaltyForgiveness: boolean;
    marketerDiscountPercent: number;
    marketerEnable: boolean;
    maxAzkiPenaltyDiscount: number;
    maxBimitoDiscount: number;
    maxBranchDiscount: number;
    maxCompanyDiscount: number;
    maxDayOfPenalty: number;
    maxMarketerDiscount: number;
    oldVehicleAge: number;
    oldVehiclePenaltyPercent: number;
    oldVehiclePercent: number;
    onlineDamage: boolean;
    productDescription?: string;
    satisfaction: number;
    shortPenaltyForgiveness: boolean;
    stick?: Stick;
    title: string;
    wealthLevel: number;
}

export enum DiscountTitle {
    Empty = '',
    The۱۴تخفیفبیمهبدنه = '۱۴٪ تخفیف بیمه بدنه',
}

export interface Feature {
    description: string;
    icon: string;
    newRelease: boolean;
    title: string;
}

export enum GiftTitle {
    Empty = '',
    GiftTitle = ' ',
    GiftTitleبیمهآتشسوزیرایگانباسقفتعهد۴۰میلیونتومان = 'بیمه آتش سوزی رایگان (با سقف تعهد ۴۰ میلیون تومان)',
    بیمهآتشسوزیرایگانباسقفتعهد۴۰میلیونتومان = 'بیمه آتش سوزی رایگان (با سقف تعهد ۴۰ میلیون تومان) ',
    بیمهعمر = 'بیمه عمر',
}

export interface HelpIcon {
    title: Title;
    url: string;
}

export enum Title {
    DriverDiscountIcon = 'DriverDiscountIcon',
    ThirdDiscountIcon = 'ThirdDiscountIcon',
}

export interface RootObjectInstallment {
    credit: boolean;
    default: boolean;
    description: string;
    enable: boolean;
    enableForSellers: boolean;
    installments: InstallmentInstallment[];
    label: string;
    title: string;
    type: number;
    underInstallmentLimitPrice: boolean;
}

export interface InstallmentInstallment {
    month: number;
    percent: number;
}

export interface Stick {
    stickDirection: string;
    stickReason: string;
}