package com.zs.user.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.user.dao.RoleMenuDao;
import com.zs.user.entity.Menu;
import com.zs.user.entity.Role;
import com.zs.user.entity.RoleMenu;
@Repository
public class RoleMenuDaoImpl extends BaseDao implements RoleMenuDao
{

	@Override
	public List<RoleMenu> RoleMenuList()
	{
		List<RoleMenu> roleMenuList = this.getHibernateTemplate().find("from RoleMenu where flag='Y'");
		return roleMenuList;
	}

	@Override
	public void deleteRoleMenu(RoleMenu roleMenu)
	{
		 String hql = "update RoleMenu set flag = 'N' where id = " + "'" + roleMenu.getId() + "'";
		    this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();

	}

	@Override
	public void insertRoleMenu(RoleMenu roleMenu)
	{
		this.getHibernateTemplate().save(roleMenu);

	}

	@Override
	public void updateRoleMenu(RoleMenu roleMenu)
	{
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
		session.clear();
		this.getHibernateTemplate().update(roleMenu);

	}

	@Override
	public RoleMenu findRoleMenu(String roleMenuid)
	{
		RoleMenu roleMenu = this.getHibernateTemplate().get(RoleMenu.class, roleMenuid);
		return roleMenu;
	}

	public Role findRole(String roleid)
	{
		Role role = this.getHibernateTemplate().get(Role.class, roleid);
		return role;
	}
	
	public List<Menu> MenuList()
	{
		List<Menu> menuList = this.getHibernateTemplate().find("from Menu where flag='Y'");
		return menuList;
	}
	
	public List<RoleMenu> findMenuByRole(String roleId)
	{
		List<RoleMenu> roleMenu = this.getHibernateTemplate().find("from RoleMenu where role = '" + roleId +"'");
		return roleMenu;
	}
	
	public void deleteAll(List<RoleMenu> roleMenuList)
	{
		this.getHibernateTemplate().deleteAll(roleMenuList);
	}
}
