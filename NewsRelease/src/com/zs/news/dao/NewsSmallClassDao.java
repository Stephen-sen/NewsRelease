package com.zs.news.dao;

import java.util.List;


import com.zs.news.entity.NewsSmallClass;
public interface NewsSmallClassDao
	{
		public List<NewsSmallClass> NewsSmallClassList();
		public void insertSmallClass(NewsSmallClass smallClass);
		public void updateSmallClass(NewsSmallClass smallClass);
		public void deleteSmallClass(NewsSmallClass smallClass);
		public NewsSmallClass findSmallClass(String smallClassId);
	}
