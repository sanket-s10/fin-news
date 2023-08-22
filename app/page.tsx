import Header from "./common/header";
import Sidebar from "./common/sidebar/sidebar";
import NewsLanding from "./components/NewsLanding/NewsLanding";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4">
        <Header />
        <Sidebar />
        <NewsLanding/>
    </main>
  )
}
