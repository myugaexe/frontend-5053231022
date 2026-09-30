// TODO(Level 10): beri tipe props yang benar — { onKirim: (pesan: string) =>
// void }. Gabungkan semua konsep pertemuan ini: controlled input berlabel
// "Pesan" + tombol submit "Kirim" di dalam <form>. Tombol disabled kalau
// isi pesan (setelah trim) kosong. Saat submit: cegah reload, panggil
// onKirim(pesan yang sudah di-trim), lalu kosongkan input.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react'
import type { FormEvent } from 'react'

type Props = { onKirim: (pesan: string) => void }

export function FormPesan({ onKirim }: Props) {
  const [pesan, setPesan] = useState<string>('')
  const kosong = pesan.trim() === ''

  const kirim = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (kosong) return
    onKirim(pesan.trim())
    setPesan('')
  }

  return (
    <form onSubmit={kirim}>
      <label htmlFor="pesan">Pesan</label>
      <input
        id="pesan"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
      />
      <button type="submit" disabled={kosong}>
        Kirim
      </button>
    </form>
  )
}
export default FormPesan
