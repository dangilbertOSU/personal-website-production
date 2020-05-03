Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

## Scaffold React Component
Inside is a bashscript called `scaffold` that will scaffold out a react component. You may have to modifiy its permissions inside of your bash shell.

```bash
chmod +x scaffold
```
This script will take `component-skelton.txt` and fill in the component name that you provide in the bash script argument.

To scaffold out a component named Navbar:

```bash
./scaffold Navbar
```
