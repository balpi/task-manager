# ✅ Fixing Dark Mode in Tailwind CSS v4 with Vite + React

If you're using **Tailwind CSS v4** and struggling with dark mode not applying even though you're toggling the `class="dark"` on the `<html>` element — here's the fix.

---

## 🔧 Problem

You’ve tried:

- Setting `darkMode: "class"` in `tailwind.config.js`
- Toggling `document.documentElement.classList.add("dark")`
- Your HTML updates correctly...

…but still, **no styles are applied** for dark mode (`dark:bg-...`, `dark:text-...` etc.).

---

## ✅ Solution

Edit your `index.css` and replace default Tailwind imports with:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

This tells Tailwind CSS v4 to apply dark styles not just to the root `.dark`, but also to any element inside it — like Vite apps using `<html class="dark">`.

---

## 📁 Where to add this?

In your project structure:

```
src/
 └─ index.css   ← ✅ Add it here
```

---

## 🧠 Why does this happen?

Tailwind v4 uses a new variant strategy for performance. The classic `dark:` variant expects `.dark` to be on the element itself. With modern apps, especially React/Vite, the class is on `<html>` — so nested matching is necessary.

---

## 🙌 Done!

Now your theme toggling should work perfectly. You can now style with:

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Hello!
</div>
```

---

## 💡 Bonus Tip

Use Tailwind’s `darkMode: "class"` and toggle `html.classList` in React `useEffect` for reliable state-based theming.

```ts
useEffect(() => {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}, [theme]);
```

---

> [SerhatBalpetek]
