package com.zs.user.service.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.user.dao.impl.MenuDaoImpl;
import com.zs.user.entity.Menu;
import com.zs.user.service.MenuService;
@Service
public class MenuServiceImpl implements MenuService
{
	@Autowired
	MenuDaoImpl menuDao;
	@Override
	public List<Menu> menuList()
	{
		List<Menu> menuList = menuDao.MenuList();
		return menuList;
	}

	@Override
	public void insertMenu(Menu menu)
	{
		menu.setFlag("Y");
		menuDao.insertMenu(menu);

	}

	@Override
	public void updateMenu(Menu menu)
	{
		Menu menuValue = findMenu(menu.getId());
		menu.setFlag(menuValue.getFlag());
		menu.setPreId(menu.getPreId());
		menuDao.updateMenu(menu);

	}

	@Override
	public Menu findMenu(String menuid)
	{
		Menu menu = menuDao.findMenu(menuid);
		return menu;
	}

	@Override
	public void deleteMenu(String menuid)
	{
		Menu menu = findMenu(menuid);
		menuDao.deleteMenu(menu);

	}
	/**
	 * 查询父类菜单
	 * @return
	 */
	public List<Menu> menuLists()
	{
		List<Menu> menuList = menuDao.MenuLists();
		return menuList;
	}

}
