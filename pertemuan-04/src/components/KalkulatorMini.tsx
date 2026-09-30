// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react'

export function KalkulatorMini() {
  // disimpan sebagai string agar input bisa dikosongkan dengan wajar
  const [a, setA] = useState<string>('')
  const [b, setB] = useState<string>('')

  // e.target.value selalu string -> ubah ke number; kosong dianggap 0
  const hasil = (Number(a) || 0) + (Number(b) || 0)

  return (
    <div>
      <label htmlFor="angka-a">Angka A</label>
      <input
        id="angka-a"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <label htmlFor="angka-b">Angka B</label>
      <input
        id="angka-b"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <p>Hasil: {hasil}</p>
    </div>
  )
}
export default KalkulatorMini
