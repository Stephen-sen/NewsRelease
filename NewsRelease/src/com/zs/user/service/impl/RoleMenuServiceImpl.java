package com.zs.user.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.user.dao.impl.RoleMenuDaoImpl;
import com.zs.user.entity.Menu;
import com.zs.user.entity.Role;
import com.zs.user.entity.RoleMenu;
import com.zs.user.service.RoleMenuService;

@Service
public class RoleMenuServiceImpl implements RoleMenuService
{
	@Autowired
	RoleMenuDaoImpl roleMenuDao;
	/**
	 * 查询角色菜单
	 */
	@Override
	public List<RoleMenu> roleMenuList()
	{
		List<RoleMenu> roleMenuList = roleMenuDao.RoleMenuList();
		return roleMenuList;
	}
	/**
	 * 保存角色菜单信息
	 */
	@Override
	public void insertRoleMenu(RoleMenu roleMenu)
	{
		roleMenu.setFlag("Y");
		roleMenuDao.insertRoleMenu(roleMenu);

	}
	/**
	 * 更新角色菜单信息
	 */
	@Override
	public void updateRoleMenu(RoleMenu roleMenu)
	{
		RoleMenu roleMenuVal = findRoleMenu(roleMenu.getId());
		roleMenu.setFlag(roleMenuVal.getFlag());
		roleMenuDao.updateRoleMenu(roleMenu);

	}
	/**
	 * 查找具体的角色菜单
	 */
	@Override
	public RoleMenu findRoleMenu(String roleMenuid)
	{
		RoleMenu roleMenu = roleMenuDao.findRoleMenu(roleMenuid);
		return roleMenu;
	}
	/**
	 * 删除角色菜单
	 */
	@Override
	public void deleteRoleMenu(String roleMenuid)
	{
		RoleMenu roleMenu = findRoleMenu(roleMenuid);
		roleMenuDao.deleteRoleMenu(roleMenu);
	}
	/**
	 * 查找角色
	 */
	public Role findRole(String roleid)
	{
		Role role = roleMenuDao.findRole(roleid);
		return role;
	}
	/**
	 * 菜单列表
	 */
	public List<Menu> menuList()
	{
		List<Menu> menuList = roleMenuDao.MenuList();
		return menuList;
	}
	/**
	 * 根据角色查询菜单
	 */
	public List<RoleMenu> findMenuByRole(String roleId)
	{
		List<RoleMenu> roleMenu = roleMenuDao.findMenuByRole(roleId);
		return roleMenu;
	}
	/**
	 * 删除所有的角色菜单
	 */
	public void deleteAll(List<RoleMenu> roleMenuList)
	{
		roleMenuDao.deleteAll(roleMenuList);
		
	}
}
