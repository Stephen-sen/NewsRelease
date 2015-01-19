package com.zs.news.service;

import java.util.List;

import com.zs.news.entity.NewsBigClass;
public interface NewsBigClassService
	{
		public List<NewsBigClass> bigClassList();
		public void insertBigClass(NewsBigClass bigClass);
		public void updateBigClass(NewsBigClass bigClass);
		public NewsBigClass findBigClass(String bigClassId);
		public void deleteBigClass(String bigClassId);
	}
