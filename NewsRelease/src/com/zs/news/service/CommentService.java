package com.zs.news.service;

import java.util.List;

import com.zs.news.entity.Comment;


public interface CommentService
{
	public List<Comment> commentList();
	public void insertComment(Comment comment);
	public void updateComment(Comment comment);
	public Comment findComment(String commentid);
	public void deleteComment(String commentid);
}
