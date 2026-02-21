# Digital Dine Menu

## Overview
Digital Dine Menu is a modern, interactive web application designed for restaurants, cafes, and food businesses to showcase their menu digitally. It allows customers to browse categories, filter by dietary preferences, and view detailed dish information with images and ingredients. The project is built with React, TypeScript, Tailwind CSS, and shadcn-ui, and is optimized for both desktop and mobile devices.

## Features
- Category navigation for Starters, Mains, Snacks, Drinks, and Desserts
- Dietary filters (Vegetarian, Vegan, Gluten-Free, Spicy)
- Detailed menu item cards with images, descriptions, and ingredients
- Modal popups for item details
- Responsive design for all screen sizes
- Customizable branding and layout

## Project Structure
```
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── public/
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── CategoryBar.tsx
│   │   ├── FilterBar.tsx
│   │   ├── MenuCard.tsx
│   │   ├── MenuFooter.tsx
│   │   ├── MenuHeader.tsx
│   │   ├── MenuModal.tsx
│   │   ├── NavLink.tsx
│   │   └── ui/
│   ├── data/
│   │   └── menuData.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   └── test/
│       ├── example.test.ts
│       └── setup.ts
```

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Deadshot690/digital-dine-menu.git
   cd digital-dine-menu-main
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Open in browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage
- Browse menu categories using the navigation bar.
- Filter menu items by dietary tags.
- Click on a menu item to view details in a modal popup.
- Footer contains links to social media and directions.

## Customization
- **Branding:** Replace `src/assets/logo.png` and update `MenuHeader.tsx` for your restaurant's name and logo.
- **Menu Data:** Edit `src/data/menuData.ts` to add, remove, or modify menu items and categories.
- **Styling:** Modify Tailwind CSS classes in component files for custom colors and layout.

## File Format
- **Menu Data:**
  - Each menu item is an object with fields: `id`, `name`, `description`, `price`, `image`, `category`, `tags`, `ingredients`.
  - Categories are defined in `categories` array with `id`, `name`, and `emoji`.

## Deployment
- Deploy to platforms like Vercel, Netlify, or GitHub Pages.
- Build for production:
  ```sh
  npm run build
  ```
- Follow your hosting provider's instructions for static site deployment.

## Testing
- Run tests with:
  ```sh
  npm run test
  ```
- Test files are located in `src/test/`.

## License
This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2026 Juned Bhojani
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Contact
For questions or support, please contact junedbhojani61@gmail.com
