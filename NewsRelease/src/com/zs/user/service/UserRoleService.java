package com.zs.user.service;

import java.util.List;

import com.zs.user.entity.UserRole;

public interface UserRoleService
	{
		public List<UserRole> userRoleList();
		public void insertUserRole(UserRole userRole);
		public void updateUserRole(UserRole userRole);
		public UserRole findUserRole(String userRoleid);
		public void deleteUserRole(String userRoleid);
	}
