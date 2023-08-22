import Header from "./common/header";
import Sidebar from "./common/sidebar/sidebar";
import NewsLanding from "./components/NewsLanding/NewsLanding";
import TopStories from "./components/TopStories/TopStories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
        <Header />
        <Sidebar />
        <div className="flex p-4 gap-4">
          <NewsLanding/>
          <TopStories />
        </div>
    </main>
  )
}
