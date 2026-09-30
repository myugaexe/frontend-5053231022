// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.
import type { ReactNode } from "react"

type ButtonProps = {
  variant: "primary" | "secondary" | "danger"
  children: ReactNode
  onClick?: () => void
}

export function Button({ variant, children, onClick }: ButtonProps) {
  const variantClass = {
    primary: "bg-blue-600",
    secondary: "bg-gray-600",
    danger: "bg-red-600",
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white ${variantClass[variant]}`}
    >
      {children}
    </button>
  )
}
