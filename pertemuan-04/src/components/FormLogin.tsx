// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react'
import type { FormEvent } from 'react'

type Props = { onLogin: (email: string) => void }

export function FormLogin({ onLogin }: Props) {
  const [email, setEmail] = useState<string>('')

  const kirim = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    onLogin(email)
  }

  return (
    <form onSubmit={kirim}>
      <label htmlFor="email-login">Email</label>
      <input
        id="email-login"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Masuk</button>
    </form>
  )
}
export default FormLogin
