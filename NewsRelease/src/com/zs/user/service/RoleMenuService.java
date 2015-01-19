package com.zs.user.service;

import java.util.List;

import com.zs.user.entity.RoleMenu;

public interface RoleMenuService
	{
		public List<RoleMenu> roleMenuList();
		public void insertRoleMenu(RoleMenu roleMenu);
		public void updateRoleMenu(RoleMenu roleMenu);
		public RoleMenu findRoleMenu(String roleMenuid);
		public void deleteRoleMenu(String roleMenuid);
	}
