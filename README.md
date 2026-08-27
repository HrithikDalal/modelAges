# modelAges — Unisex Salon

> ⚠️ **Not maintained — archived portfolio project.** A 2020–2022 freelance/learning project. Refreshed in August 2026 (working deps, 0 known vulnerabilities at that time) and archived.

A server-rendered website for a unisex salon, built with **Node.js, Express, MongoDB, and EJS**. Public visitors browse services, gallery images, testimonials, and blog posts, and can request a quote; an authenticated admin manages all of that content, with password-reset via email.

![Maintenance](https://img.shields.io/badge/maintained-no-red)

## Features

- Services, image gallery, testimonials, and blog — full CRUD for the admin
- Quote requests from visitors, reviewed by the admin
- Passport (local strategy) auth with express-session; admin-only middleware
- Password reset flow via emailed token (nodemailer + Gmail)

## Stack

Express 4, Mongoose 6 (MongoDB), EJS views, Passport 0.7 + passport-local-mongoose, nodemailer 9, method-override, connect-flash.

## Running

```bash
npm install
# .env file:
#   DATABASEURL=mongodb://localhost:27017/salon
#   GMAILPW=<app password for the reset-email account>
node app.js        # http://localhost:3000
```

`seeds.js` clears and reseeds content collections on boot — disable the `seedDB()` call in `app.js` for real data.

## History

- **2020–2022** — built as a salon website project.
- **2026-08** — refreshed: removed committed `node_modules` from the repo; replaced the bogus `express.js`/`crypto` placeholder packages with the real `express`; Mongoose 5 → 6, Passport 0.4 → 0.7 (async logout), nodemailer 9; all 20 `npm audit` vulnerabilities eliminated. Boot-verified. Archived.
