// lib/api.js

// Mock data for benefits
const mockBenefitsData = [
  {
    id: 1,
    title: "Exclusive 10% Off",
    iconName: "Gift",
    description: "Get 10% off on all electronics purchases this month.",
    ctaText: "Claim Now",
  },
  {
    id: 2,
    title: "Free Car Wash",
    iconName: "Car",
    description: "Redeem a complimentary premium car wash at partner outlets.",
    ctaText: "View Details",
  },
  {
    id: 3,
    title: "Points Multiplier",
    iconName: "Gem",
    description: "Earn 2X reward points on your next 3 transactions.",
    ctaText: "Activate",
  },
  {
    id: 4,
    title: "Discounted Fuel",
    iconName: "Fuel",
    description: "Save ₹5 per liter on fuel at selected pumps.",
    ctaText: "Locate Outlets",
  },
  {
    id: 5,
    title: "Insurance Renewal Bonus",
    iconName: "ShieldCheck",
    description: "Get extra points when you renew your vehicle insurance.",
    ctaText: "Renew Now",
  },
  {
    id: 6,
    title: "Roadside Assistance",
    iconName: "Wrench",
    description:
      "1-year complimentary roadside assistance for premium members.",
    ctaText: "Learn More",
  },
];

/**
 
 * @returns {Promise<Array<Object>>} 
 */
export const fetchBenefits = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mockBenefitsData);
    }, 1500); // 1.5 seconds delay
  });
};
