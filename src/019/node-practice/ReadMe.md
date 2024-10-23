# Node Practice

Here's what I did

- I ran `pnpm init` from the `~/src/019/node-practice` folder
  - *this created my `package.json` project file
- I ran `pnpm add -D vite`
  - *this added the `vite` library to my project as a **developer dependency**.*
- I edited the `package.json` to add a new item to my `"scripts"`:

  ```json
  "scripts": {
    "dev": "vite",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

- Then I created an `index.html` in my `node-practice` folder
- Finally, I ran `pnpm dev` from the terminal to launch *vite* as my development web server.
  - *In the terminal, vite is running/serving my website/project.*

