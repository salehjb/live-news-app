import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category: Category | string = "",
  keywords: string = "",
  isDynamic?: boolean
) => {
  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY}&keywords=${keywords}&categories=${category}`,
    {
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const newsResponse = await res.json();
  const news = sortNewsByImage(newsResponse);
  return news;
};

export default fetchNews;
