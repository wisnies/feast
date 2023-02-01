## Feast BBQ
Fake restaurant site using Next.js

Deployed project: [link]()

#### Features:
* data fetching using rect-query
* dehydrating state and prefetching queries
* styling using styled-components
* simple form validation using joi
* request validation middleware using joi
* project dynamic routes with Next.js routing system
* responsive ui desing

#### Quick Start:
* Run `npm install` / `yarn` inside the root directory
* Create `.env` file inside the root directory with all variables specifeid inside `.env.example` file
* Select prisma provider to fit database you are using
* Run `npx / yarn prisma db seed` to seed database
* Run `npm run start` / `yarn start` to start development server

#### API routes:
* `/api/booking/[id]` - GET request for fetching booking details by id
* `/api/booking/create` - POST request for creating new booking
* `/api/event/[slug]` - GET request for fetching event details by slug
* `/api/event` - GET request for fetching event minified data, returns all events from dbm, passing query `mode` with values `upcoming` or `archived` will return future or past events respectively  

#### Data storage
This app is using Neon cloud service Technical Preview as a db provider

#### Technologies Used:

* Next.js
* react-query
* typescript
* styled-components
* joi
* prisma