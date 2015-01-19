package com.zs.news.dao.impl;

import java.util.List;

import org.hibernate.classic.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.news.dao.CommentDao;
import com.zs.news.entity.Comment;

@Repository
public class CommentDaoImpl extends BaseDao implements CommentDao
{

	@Override
	public List<Comment> CommentList()
	{
		List<Comment> commentList = this.getHibernateTemplate().find("from Comment where flag = 'Y' order by dateTime desc");
		return commentList;
	}

	@Override
	public void deleteComment(Comment comment)
	{
		String hql = "update Comment set flag = 'N' where id = " + "'" + comment.getId() + "'";
		this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();

	}

	@Override
	public void insertComment(Comment comment)
	{
		this.getHibernateTemplate().save(comment);

	}

	@Override
	public void updateComment(Comment comment)
	{
		Session session = this.getHibernateTemplate().getSessionFactory().getCurrentSession();
	    session.clear();
		this.getHibernateTemplate().update(comment);

	}

	@Override
	public Comment findComment(String commentid)
	{
		Comment comment = this.getHibernateTemplate().get(Comment.class, commentid);
		return comment;
	}

	public List<Comment> getCommentList(String newsId)
	{
		String hql = "from Comment t1 where t1.news = '" + newsId + "' and flag = 'Y'";
		List<Comment> commentList = (List<Comment>) this.getHibernateTemplate().find(hql);
		return commentList;
	}
}
