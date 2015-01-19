package com.zs.news.action.impl;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.news.action.CommentAction;
import com.zs.news.entity.Comment;
import com.zs.news.service.impl.CommentServiceImpl;

@Controller
public class CommentActionImpl extends BaseAction implements CommentAction
{
	@Autowired
	CommentServiceImpl commentService;
	public List<Comment> commentList;
	/**
	 * 查询评论信息列表
	 */
	@Override
	public String commentList()
	{
		commentList = commentService.commentList();
		return SUCCESS;
	}
	/**
	 * 保存评论信息
	 */
	@Override
	public String insertComment()
	{

		try
		{
			JSONArray arrayJson = new JSONArray();
			JSONObject json = new JSONObject();
			comment.setUser(user);
			comment.setNews(news);
			commentService.insertComment(comment);

			json.put("state", 1);
			arrayJson.add(json);

			result = arrayJson;

		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return SUCCESS;

	}
	/**
	 * 更新评论信息
	 */
	@Override
	public String updateComment()
	{
		comment.setUser(user);
		comment.setNews(news);
		commentService.updateComment(comment);
		return SUCCESS;
	}
	/**
	 * 删除评论
	 */
	@Override
	public String deleteComment()
	{
		commentService.deleteComment(comment.getId());
		return SUCCESS;
	}
	/**
	 * 查找评论
	 */
	@Override
	public String findComment()
	{
		comment = commentService.findComment(comment.getId());
		return SUCCESS;
	}
}
