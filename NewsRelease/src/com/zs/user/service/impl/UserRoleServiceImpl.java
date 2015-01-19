package com.zs.user.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.user.dao.impl.UserRoleDaoImpl;
import com.zs.user.entity.Role;
import com.zs.user.entity.User;
import com.zs.user.entity.UserRole;
import com.zs.user.service.UserRoleService;

@Service
public class UserRoleServiceImpl implements UserRoleService
{
	@Autowired
	UserRoleDaoImpl userRoleDao;
	/**
	 * 查询所有的用户角色
	 */
	@Override
	public List<UserRole> userRoleList()
	{
		List<UserRole> userRoleList = userRoleDao.userRoleList();
		return userRoleList;
	}
	/**
	 * 保存用户角色信息
	 */
	@Override
	public void insertUserRole(UserRole userRole)
	{
		userRole.setFlag("Y");
		userRoleDao.insertUserRole(userRole);

	}
	/**
	 * 更新用户角色信息
	 */
	@Override
	public void updateUserRole(UserRole userRole)
	{
		userRoleDao.updateUserRole(userRole);

	}
	/**
	 * 查找用户角色信息
	 */
	@Override
	public UserRole findUserRole(String userRoleid)
	{
		UserRole userRole =userRoleDao.findUserRole(userRoleid);
		return userRole;
	}
	/**
	 * 删除用户角色
	 */
	@Override
	public void deleteUserRole(String userRoleid)
	{
		UserRole userRole = findUserRole(userRoleid);
		userRoleDao.deleteUserRole(userRole);

	}
	/**
	 * 查找角色
	 */
	public List<UserRole> findRole(String roleid)
	{
		List<UserRole> userRole = userRoleDao.findRole(roleid);
		return userRole;

	}
	/**
	 * 查找用户
	 */
	public User findUser(String userid)
	{
		User user =userRoleDao.findUser(userid);
		return user;
	}
	/**
	 * 查询所有的角色信息
	 */
	public List<Role> findRoleList()
	{
		List<Role> roleList =userRoleDao.findRoleList();
		return roleList;
	}
	/**
	 * 查询所有的用户角色信息
	 */
	public List<UserRole> userRoleMess(String userId)
	{
		List<UserRole> userRole = userRoleDao.userRoleMess(userId);
		return userRole;
	}
	/**
	 * 删除所有的用户角色
	 */
	public void deleteAll(List<UserRole> userRoleList)
	{
		userRoleDao.deleteAll(userRoleList);
		
	}
}
