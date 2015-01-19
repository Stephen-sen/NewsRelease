package com.zs.news.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.news.dao.NewsDao;
import com.zs.news.entity.Comment;
import com.zs.news.entity.News;

@Repository
public class NewsDaoImpl extends BaseDao implements NewsDao
{

	@Override
	public List<News> NewsList()
	{
		// TODO Auto-generated method stub
		return this.getHibernateTemplate().find("from News t order by t.createDate desc");
	}

	@Override
	public void deleteNews(News news)
	{
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(news);
	}

	@Override
	public void insertNews(News news)
	{
		// TODO Auto-generated method stub
		this.getHibernateTemplate().save(news);
	}

	@Override
	public void updateNews(News news)
	{
		// TODO Auto-generated method stub
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
		session.clear();
		this.getHibernateTemplate().update(news);
	}

	@Override
	public News findNews(String newsid)
	{
		// TODO Auto-generated method stub
		News news = this.getHibernateTemplate().get(News.class, newsid);
		return news;
	}

	public List<Object[]> findTitle()
	{
		// TODO Auto-generated method stub
		String hql = "select id, title, intro, newImg, readTimes, modular from News as t1 where t1.flag='Y' order by t1.createDate desc";
		Query query = this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql);
		return query.list();
	}

	public List<Object[]> findNewsMessage(String newsid)
	{
		// TODO Auto-generated method stub
		String hql = "select id, title, createDate, source, readTimes, commentTimes, content from News where id= '" + newsid + "'";
		Query query = this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql);

		return query.list();
	}
	
}
