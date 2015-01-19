package com.zs.news.service;

import java.util.List;

import com.zs.news.entity.Modular;
public interface ModularService
	{
		public List<Modular> modularList();
		public void insertModular(Modular modular);
		public void updateModular(Modular modular);
		public Modular findModular(String modularId);
		public void deleteModular(String modularId);
	}
