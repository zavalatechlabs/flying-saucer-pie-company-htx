import { redirect } from 'next/navigation'

// Location page merged into Contact — redirect cleanly
export default function LocationPage() {
  redirect('/contact')
}
