package com.zs.news.service.impl;

import java.util.Date;
import java.util.List;

import javax.print.attribute.standard.Fidelity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.news.dao.impl.CommentDaoImpl;
import com.zs.news.entity.Comment;
import com.zs.news.service.CommentService;
import com.zs.user.entity.Menu;
import com.zs.util.DateUtil;
@Service
public class CommentServiceImpl implements CommentService
{
	@Autowired
	CommentDaoImpl commentDao;
	@Override
	public List<Comment> commentList()
	{
		List<Comment> commentList = commentDao.CommentList();
		return commentList;
	}

	@Override
	public void insertComment(Comment comment)
	{
		comment.setFlag("Y");
		 Date currentTime = new Date();
	     String createDate = DateUtil.convertDateToString(currentTime, DateUtil.DATE_FORMAT_yyyyMMddhhmmss);
	     comment.setDateTime(createDate);
		commentDao.insertComment(comment);

	}

	@Override
	public void updateComment(Comment comment)
	{
		Comment commentVal = findComment(comment.getId());
		comment.setFlag(commentVal.getFlag());
		comment.setDateTime(commentVal.getDateTime());
		comment.setUser(commentVal.getUser());
		commentDao.updateComment(comment);

	}

	@Override
	public Comment findComment(String commentid)
	{
		Comment comment = commentDao.findComment(commentid);
		return comment;
	}

	@Override
	public void deleteComment(String commentid)
	{
		Comment comment = findComment(commentid);
		commentDao.deleteComment(comment);

	}

	public List<Comment> getCommentList(String newsId)
	{
		List<Comment> commentList = commentDao.getCommentList(newsId);
		return commentList;
	}
}
