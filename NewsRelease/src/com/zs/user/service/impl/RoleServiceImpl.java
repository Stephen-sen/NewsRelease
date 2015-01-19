package com.zs.user.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.user.dao.impl.RoleDaoImpl;
import com.zs.user.entity.Role;
import com.zs.user.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService
{
	@Autowired
	RoleDaoImpl roleDao;

	@Override
	public List<Role> roleList()
	{
		List<Role> roleList = roleDao.RoleList();
		return roleList;
	}

	@Override
	public void insertRole(Role role)
	{
		role.setFlag("Y");
		roleDao.insertRole(role);

	}

	@Override
	public void updateRole(Role role)
	{
		Role roleValue = findRole(role.getId());
		role.setFlag(roleValue.getFlag());
		roleDao.updateUser(role);

	}

	@Override
	public Role findRole(String roleid)
	{
		Role role = roleDao.findRole(roleid);
		return role;
	}

	@Override
	public void deleteRole(String roleid)
	{
		Role role = findRole(roleid);
		roleDao.deleteRole(role);
	}

}
