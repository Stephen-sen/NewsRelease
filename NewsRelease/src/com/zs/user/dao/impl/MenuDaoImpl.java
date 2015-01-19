package com.zs.user.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.user.dao.MenuDao;
import com.zs.user.entity.Menu;
@Repository
public class MenuDaoImpl extends BaseDao implements MenuDao
{

	@Override
	public List<Menu> MenuList()
	{
		List<Menu> menuList = this.getHibernateTemplate().find("from Menu where flag='Y'");
		return menuList;
	}

	@Override
	public void deleteMenu(Menu menu)
	{
		String hql = "update Menu set flag = 'N' where id = " + "'" + menu.getId() + "'";
		this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();

	}

	@Override
	public void insertMenu(Menu menu)
	{
		this.getHibernateTemplate().save(menu);

	}

	@Override
	public void updateMenu(Menu menu)
	{
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
		session.clear();
		this.getHibernateTemplate().update(menu);

	}

	@Override
	public Menu findMenu(String menuid)
	{
		Menu menu = this.getHibernateTemplate().get(Menu.class, menuid);
		return menu;
	}
	/**
	 * 查询父类菜单
	 * @return
	 */
	public List<Menu> MenuLists()
	{
		List<Menu> menuList = this.getHibernateTemplate().find("from Menu where flag='Y' and menuType = '01' or menuType = '02'");
		return menuList;
	}

}
