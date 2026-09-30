// TODO(Level 3): beri tipe props yang benar — { onCari: (kata: string) =>
// void }. Render sebuah <input> yang memanggil onCari(isi input saat ini)
// HANYA ketika tombol Enter ditekan (onKeyDown + e.key) — tombol lain tidak
// boleh memicu onCari.
// Lihat SOAL.md untuk kontrak lengkap.
import type { KeyboardEvent } from 'react'

type Props = { onCari: (kata: string) => void }

export function KotakCari({ onCari }: Props) {
  const tekan = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onCari(e.currentTarget.value)
  }
  return <input onKeyDown={tekan} />
}
export default KotakCari
