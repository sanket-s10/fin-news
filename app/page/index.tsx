import Header from "../common/header";
import Sidebar from "../common/sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
        <Header />
        <Sidebar />
    </main>
  )
}
