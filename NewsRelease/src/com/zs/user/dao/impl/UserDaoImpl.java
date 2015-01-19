package com.zs.user.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Session;
import org.hibernate.stat.Statistics;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.user.dao.UserDao;
import com.zs.user.entity.User;

@Repository
public class UserDaoImpl extends BaseDao implements UserDao
{
	/**
	 * 查询数据库中的用户列表信息
	 */
	@Override
	public List<User> UserList()
	{
		// TODO Auto-generated method stub
		return this.getHibernateTemplate().find("from User");
	}
	/**
	 *删除用户
	 */
	@Override
	public void deleteUser(User user)
	{
		this.getHibernateTemplate().delete(user);

	}
	/**
	 * 保存用户
	 */
	@Override
	public void insertUser(User user)
	{

		this.getHibernateTemplate().save(user);
		// TODO Auto-generated method stub

	}
	/**
	 * 更新用户信息
	 */
	@Override
	public void updateUser(User user)
	{
		try
		{
			Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
			session.clear();
			this.getHibernateTemplate().update(user);

		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	/**
	 * 查找用户
	 */
	@Override
	public User findUser(String userid)
	{
		User user = this.getHibernateTemplate().get(User.class, userid);
		return user;
	}
	/**
	 * 更新用户密码
	 */
	public void updatePwd(User user)
	{
		String hql = "update User set passWord =" + "'" + user.getPassWord() + "'" + "where id = " + "'" + user.getId() + "'";
		this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();
	}
}
