Run the ngrok with the command:
```
ngrok http http://localhost:4173
```

Take the URL from the ngrok command output and put this into `server.allowedHosts` in `vite.config.js`.

Run the below two commands:
```
npm run dev
npm run preview
```
