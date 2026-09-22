import { redirect } from 'next/navigation';

export default function DashboardPage() {
  redirect('/frontend/user_dashboard');
}