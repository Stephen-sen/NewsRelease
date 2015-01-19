package com.zs.news.dao;

import java.util.List;


import com.zs.news.entity.NewsBigClass;
public interface NewsBigClassDao
	{
		public List<NewsBigClass> NewsBigClassList();
		public void insertBigClass(NewsBigClass bigClass);
		public void updateBigClass(NewsBigClass bigClass);
		public void deleteBigClass(NewsBigClass bigClass);
		public NewsBigClass findBigClass(String bigClassId);
	}
