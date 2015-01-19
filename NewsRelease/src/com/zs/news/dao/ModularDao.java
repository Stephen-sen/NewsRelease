package com.zs.news.dao;

import java.util.List;


import com.zs.news.entity.Modular;
public interface ModularDao
	{
		public List<Modular> ModularList();
		public void insertModular(Modular modular);
		public void updateModular(Modular modular);
		public void deleteModular(Modular modular);
		public Modular findModular(String modular);
	}
