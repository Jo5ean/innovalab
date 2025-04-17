const config = {
    title: "Influencer Funds | Fast and Secure Payments for Creators and Agencies",
    site_name: "influencerfunds",
    description: "Influencer Funds enables fast, secure payments to influencers and agencies in 80+ countries and 20+ currencies, simplifying financial management.",
    theme_color: "#00FFFF",
    baseURL: 'https://influencerfunds.com/',
    keywords: "influencer payments, global payments, marketing agencies, payment management, multi-currency payments, tax compliance, creator finances",
    author: "Influencer Funds",
    email: "contact@influencerfunds.com",
    image: "/images/cover.webp",
    IS_PRODUCTION: Boolean(Number(import.meta.env.IS_PRODUCTION ?? 0)),
    AUTORIZATION: {
        USER: import.meta.env.AUTH_BASIC_USER,
        PASSWORD: import.meta.env.AUTH_BASIC_PW,
    },
    MAILER: {
        CONTACT_USER: import.meta.env.MAILER_CONTACT_USER,
    },
    URL: {
        MAILER: import.meta.env.MAILER_API_URL,
    },
}
export default config;