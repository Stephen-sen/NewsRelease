package com.zs.news.dao;

import java.util.List;


import com.zs.news.entity.News;
public interface NewsDao
	{
		public List<News> NewsList();
		public void deleteNews(News news);
		public void insertNews(News news);
		public void updateNews(News news);
		public News findNews(String newsid);
	}
