package com.zs.user.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.user.dao.RoleDao;
import com.zs.user.entity.Role;

@Repository
public class RoleDaoImpl extends BaseDao implements RoleDao
{

	@Override
	public List<Role> RoleList()
	{
		List<Role> Rolelist = this.getHibernateTemplate().find("from Role where flag = 'Y'");
		return Rolelist;
	}

	@Override
	public void deleteRole(Role role)
	{
		String hql = "update Role set flag = 'N' where id = " + "'" + role.getId() + "'";
		this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();

	}

	@Override
	public void insertRole(Role role)
	{
		this.getHibernateTemplate().save(role);

	}

	@Override
	public void updateUser(Role role)
	{
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
		session.clear();
		this.getHibernateTemplate().update(role);

	}

	@Override
	public Role findRole(String roleid)
	{
		Role role = this.getHibernateTemplate().get(Role.class, roleid);
		return role;
	}

}
