const getNewsItem = data => {
  if (data) {
    const { topStories } = data.hn;
    const newsItems = topStories.map(newsItem => {
      if (newsItem) {
        return {
          id: newsItem.id,
          type: newsItem.type,
          by: newsItem.by,
          time: newsItem.time,
          url: newsItem.url,
          score: newsItem.score,
          title: newsItem.title,
          descendants: newsItem.descendants
        };
      }
      return false;
    });
    return newsItems;
  }
};

export default getNewsItem;
