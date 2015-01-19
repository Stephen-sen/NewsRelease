package com.zs.user.service;

import java.util.List;

import com.zs.user.entity.Role;

public interface RoleService
	{
		public List<Role> roleList();
		public void insertRole(Role role);
		public void updateRole(Role role);
		public Role findRole(String roleid);
		public void deleteRole(String roleid);
	}
