package com.zs.user.dao;

import java.util.List;

import com.zs.user.entity.Menu;

public interface MenuDao
{
	public List<Menu> MenuList();

	public void deleteMenu(Menu menu);

	public void insertMenu(Menu menu);

	public void updateMenu(Menu menu);

	public Menu findMenu(String menuid);
}
