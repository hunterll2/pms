# PMS

## Starter Guide

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

## Firebase Firestore Notes

- **path**: the location of the collection or document
  - `users`
  - `users/user-1`
  - `projects`
  - `projects/project-1`
  - `projects/project-2/documents`
- **reference**: A description of a `document` (DocumentReference, a full path) that could return a document **OR** `query` (Query, against a collection, with filters) that could return documents.
  - `collection("users")`
  - `doc('users/user-1')`
  - `query(collection("users"), where("isAdmin", "==", "true"))`
- **snapshot**: The container for the document(s) after the query completes successfully.
  - `getDocs( collection("users") )` => docs
  - `getDoc( doc('users/user-1') )` => data(), exists()
  - `getDocs( query(collection("users"), where("isAdmin", "==", "true")) )` => docs

## ToDo

- [ ] add custom request
- [ ] unapplied function
  - must use Cloud Functions

- [ ] admin/project
  - [ ] display image
- [ ] what's the difference between reject and throw error ?

- [ ] change progress formula
- [ ] bills order

- [ ] talk about obsorver
- [ ] talk about the problem of store rendent data into db (users)
- [ ] can "isAdmin" be added using the Admin SDK

- [ ] Stage 2: Adviecs
  - [ ] don't repeat your slef (talk about usign logic to solve problems instaed of repeat your solve)
  - [ ] don't reinvnit the wheel
  - [ ] talk about gathering related logic into one place

- [ ] Stage 3: What's next

- points
  - why the html/code is too long