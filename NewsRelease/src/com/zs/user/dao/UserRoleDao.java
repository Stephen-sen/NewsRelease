package com.zs.user.dao;

import java.util.List;

import com.zs.user.entity.UserRole;

public interface UserRoleDao {
	public List<UserRole> userRoleList();

	public void deleteUserRole(UserRole userRole);

	public void insertUserRole(UserRole userRole);

	public void updateUserRole(UserRole userRole);

	public UserRole findUserRole(String userRoleid);
}
