package com.zs.news.dao;

import java.util.List;


import com.zs.news.entity.Comment;
public interface CommentDao
	{
		public List<Comment> CommentList();
		public void deleteComment(Comment comment);
		public void insertComment(Comment comment);
		public void updateComment(Comment comment);
		public Comment findComment(String commentid);
	}
