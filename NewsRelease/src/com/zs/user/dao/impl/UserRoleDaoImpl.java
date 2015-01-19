package com.zs.user.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.user.dao.UserRoleDao;
import com.zs.user.entity.Role;
import com.zs.user.entity.RoleMenu;
import com.zs.user.entity.User;
import com.zs.user.entity.UserRole;
@Repository
public class UserRoleDaoImpl extends BaseDao implements UserRoleDao
{

	@Override
	public List<UserRole> userRoleList()
	{
		List<UserRole> userRoleList = this.getHibernateTemplate().find("from UserRole where flag = 'Y'");
		return userRoleList;
	}

	@Override
	public void deleteUserRole(UserRole userRole)
	{
		String hql = "update UserRole set flag = 'N' where id = " + "'" + userRole.getId() + "'";
	    this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();
		
	}

	public List<UserRole> findRole(String roleId)
	{
		String hql = "from UserRole where role = '" + roleId + "'";
		return this.getHibernateTemplate().find(hql);
	}
	
	@Override
	public void insertUserRole(UserRole userRole)
	{
		this.getHibernateTemplate().save(userRole);
		
	}

	@Override
	public void updateUserRole(UserRole userRole)
	{
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
		session.clear();
		this.getHibernateTemplate().update(userRole);
		
	}

	@Override
	public UserRole findUserRole(String userRoleid)
	{
		UserRole userRole =this.getHibernateTemplate().get(UserRole.class, userRoleid);
		return userRole;
	}

	public User findUser(String userid)
	{
		User user =this.getHibernateTemplate().get(User.class, userid);
		return user;
	}
	
	public List<Role> findRoleList()
	{
		List<Role> roleList = this.getHibernateTemplate().find("from Role where flag = 'Y'");
		return roleList;
	}
	
	public List<UserRole> userRoleMess(String userId)
	{
		String hql = "from UserRole where user = '" + userId + "' and flag='Y'";
		List<UserRole> userRole = this.getHibernateTemplate().find(hql);
		return userRole;
	}
	
	public void deleteAll(List<UserRole> userRoleList)
	{
		this.getHibernateTemplate().deleteAll(userRoleList);
	}
}
