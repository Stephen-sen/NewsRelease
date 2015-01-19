package com.zs.user.dao;

import java.util.List;

import com.zs.user.entity.RoleMenu;

public interface RoleMenuDao {
	public List<RoleMenu> RoleMenuList();
	public void deleteRoleMenu(RoleMenu roleMenu);
	public void insertRoleMenu(RoleMenu roleMenu);
	public void updateRoleMenu(RoleMenu roleMenu);
	public RoleMenu findRoleMenu(String roleMenuid);
}
