# Librería Archivo — Migración a React

Migración de la aplicación Vanilla JS a **React + Vite** con **React Router DOM 6.28** (API `createBrowserRouter`).
Los estilos están escritos con **Tailwind CSS v4** (plugin `@tailwindcss/vite`); los tokens de la paleta viven en `src/styles/styles.css` dentro de `@theme`.
Toda la lógica reactiva se resuelve únicamente con el hook `useState`.

## Ejecutar

```bash
npm install
npm run dev
```

## Estructura

```text
src/
├── components/   # Layout (con <Outlet />), Navbar, Footer, tarjetas, filtros, campos
├── pages/        # Inicio, Catalogo, Contacto
├── routes/       # router.jsx (createBrowserRouter)
├── data/         # datos.js (mock exportado/importado)
├── styles/       # styles.css (Tailwind + tokens de diseño)
├── App.jsx       # RouterProvider
└── main.jsx      # Punto de entrada
```

## Rutas

| Ruta | Vista |
| :-- | :-- |
| `/` | Inicio |
| `/catalogo` | Catálogo (filtros por texto y categoría) |
| `/contacto` | Contacto (formulario controlado con `useState` por campo) |
