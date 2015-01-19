package com.zs.news.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.news.dao.NewsSmallClassDao;
import com.zs.news.entity.NewsSmallClass;
@Repository
public class NewsSmallClassDaoImpl extends BaseDao implements NewsSmallClassDao
{

	@Override
	public List<NewsSmallClass> NewsSmallClassList()
	{
		// TODO Auto-generated method stub
		return this.getHibernateTemplate().find("from NewsSmallClass");
	}

	@Override
	public void insertSmallClass(NewsSmallClass smallClass)
	{
		// TODO Auto-generated method stub
		this.getHibernateTemplate().save(smallClass);

	}

	@Override
	public void updateSmallClass(NewsSmallClass smallClass)
	{
		// TODO Auto-generated method stub
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
		session.clear();
		this.getHibernateTemplate().update(smallClass);

	}

	@Override
	public void deleteSmallClass(NewsSmallClass smallClass)
	{
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(smallClass);

	}

	@Override
	public NewsSmallClass findSmallClass(String smallClassId)
	{
		// TODO Auto-generated method stub
		NewsSmallClass smallClass = this.getHibernateTemplate().get(NewsSmallClass.class, smallClassId);
		return smallClass;
	}

}
