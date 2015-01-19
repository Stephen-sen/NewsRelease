package com.zs.user.service;

import java.util.List;

import com.zs.user.entity.Menu;


public interface MenuService
{
	public List<Menu> menuList();
	public void insertMenu(Menu menu);
	public void updateMenu(Menu menu);
	public Menu findMenu(String menuid);
	public void deleteMenu(String menuid);
}
