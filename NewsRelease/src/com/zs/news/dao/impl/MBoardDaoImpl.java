package com.zs.news.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;


import com.zs.base.dao.BaseDao;
import com.zs.news.dao.MBoardDao;
import com.zs.news.entity.MessageBoard;
@Repository
public class MBoardDaoImpl extends BaseDao implements MBoardDao
{

	@Override
	public List<MessageBoard> MBoardList()
	{
		List<MessageBoard> mBoradList = this.getHibernateTemplate().find("from MessageBoard t where flag = 'Y' order by t.dateTime desc");
		return mBoradList;
	}

	@Override
	public void deleteMBoard(MessageBoard mBoard)
	{
		String hql = "update MessageBoard set flag = 'N' where id = " + "'" + mBoard.getId() + "'";
		this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();

	}

	@Override
	public void insertMBoard(MessageBoard mBoard)
	{
		this.getHibernateTemplate().save(mBoard);

	}

	@Override
	public void updateMBoard(MessageBoard mBoard)
	{
		Session session = this.getHibernateTemplate().getSessionFactory().getCurrentSession();
		session.clear();
		this.getHibernateTemplate().update(mBoard);

	}

	@Override
	public MessageBoard findMBoard(String mBoardid)
	{
		MessageBoard mBoard = this.getHibernateTemplate().get(MessageBoard.class, mBoardid);
		return mBoard;
	}

}
