This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
## 二、執行專案

### 1. 專案架構

```bash
.
├── README.md                    # 專案文件
├── build                        # 專案編譯後的靜態檔案
├── node_modules                 # 套件庫
├── package.json
├── public
│   └── locales
│       ├── en                   # i18n(en)
│       └── zh                   # i18n(zh)
├── src
│   ├── components               # 共用組件
│   ├── images                   # 圖片
│   ├── i18n                     # 語系翻譯
│   ├── pages                    # 如新增頁面的話，要到這裡加入到 
│   ├── poject                   # 專案資料
│   ├── styles
├─  next.config                  # next.js 設定檔
└── tsconfig.json
```