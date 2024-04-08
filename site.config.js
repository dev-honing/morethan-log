const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Honing",
    image: "/avatar.svg",
    role: "풀스택 개발자",
    bio: "배우고, 만드는 것이 즐거운 주니어 개발자입니다.",
    email: "dev.honing@gmail.com",
    linkedin: "",
    github: "https://github.com/dev-honing",
    instagram: ""
    
  },
  projects: [
    {
      name: `(미완)기프티콘`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Honing의 개발일지",
    description: "재미 주도 개발: 2023.08.08. ~",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
  enable: true,
  config: {
    repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "dev-honing/blog-comments",
    "issue-term": "pathname",
    theme: "github-light",
    crossorigin: "anonymous",
    async: true,
  },
},
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
