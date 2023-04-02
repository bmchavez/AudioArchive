```bash
# install logging middleware
cd backend
npm i morgan
npm i --save-dev @types/morgan
```

```bash
# You could create your own http errors instead of using these dependencies if you wanted to
cd backend
npm i http-errors
npm i -D @types/http-errors
```

```bash
# frontend
npm install --save typescript @types/react @types/node

touch tsconfig.json
npm run dev
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
touch styles/tailwind.css
```


# Backend Auth
```bash
npm i passport passport-google-oauth20 express-session
npm i -D @types/passport @types/passport-google-oauth20 @types/express-session

```
