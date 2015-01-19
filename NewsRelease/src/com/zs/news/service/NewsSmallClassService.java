package com.zs.news.service;

import java.util.List;

import com.zs.news.entity.NewsSmallClass;
public interface NewsSmallClassService
	{
	public List<NewsSmallClass> smallClassList();
	public void insertSmallClass(NewsSmallClass smallClass);
	public void updateSmallClass(NewsSmallClass smallClass);
	public NewsSmallClass findSmallClass(String smallClassId);
	public void deleteSmallClass(String smallClassId);
	}
