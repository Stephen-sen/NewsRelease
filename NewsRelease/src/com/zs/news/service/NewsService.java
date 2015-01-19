package com.zs.news.service;

import java.util.List;


import com.zs.news.entity.News;
public interface NewsService
	{
		public List<News> newsList();
		public void insertNews(News news);
		public void updateNews(News news);
		public News findNews(String newsid);
		public void deleteNews(String newsid);
	}
