# IT Cyberspace Backend

Express email service for the [IT Cyberspace frontend](https://github.com/Lenin-Miranda/IT-CyberSpace). It accepts contact-form requests at `POST /send-email` and uses Nodemailer to send messages.

## Setup

Requires Node.js, npm and an email account that supports the configured Gmail transport.

```bash
git clone https://github.com/Lenin-Miranda/Cyberspace-backend.git
cd Cyberspace-backend
npm install
```

Create `.env` in the repository root and supply your own values:

```dotenv
PORT=3001
EMAIL_USER=your-sender@example.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-recipient@example.com
```

```bash
npm start
```

The server listens on [localhost:3001](http://localhost:3001). Read [routes/email.js](routes/email.js) for the request fields and outgoing-message templates before connecting a form; submitting the endpoint sends real email.

## Structure

- [server.js](server.js): environment loading, JSON parsing, CORS and route registration.
- [routes/email.js](routes/email.js): contact-message delivery.
- [package.json](package.json): dependencies and scripts.

## Development notes

`npm start` runs `node server.js`; restart it after source changes. The `test` script is an unimplemented placeholder that exits with an error. No database or build step is required. CORS is currently unrestricted in the server configuration. Keep mail credentials in the server environment.
