import { categories } from "@/config/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

async function HomePage() {
  console.log();
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default HomePage
