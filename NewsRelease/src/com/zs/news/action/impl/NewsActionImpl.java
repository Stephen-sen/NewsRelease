package com.zs.news.action.impl;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.news.action.NewsAction;
import com.zs.news.entity.Comment;
import com.zs.news.entity.News;
import com.zs.news.service.impl.CommentServiceImpl;
import com.zs.news.service.impl.NewsServiceImpl;
import com.zs.user.entity.User;

@Controller
public class NewsActionImpl extends BaseAction implements NewsAction
{
	@Autowired
	private NewsServiceImpl newsService;

	@Autowired
	CommentServiceImpl commentService;
	public List<Comment> commentList;
	public List<News> newsList;
	public List<News> lRNews = new ArrayList<News>();
	public List<News> lLNewsR = new ArrayList<News>();
	public List<News> lLNewsP = new ArrayList<News>();
	public List<News> lLNewsTW = new ArrayList<News>();
	public List<News> rNewsRA = new ArrayList<News>();
	public List<News> rNewsRB = new ArrayList<News>();
	public List<News> rNewsRC = new ArrayList<News>();
	// public List<News> newsList;
	public HttpSession session;

	/**
	 * 查询数据库中的新闻
	 */
	@Override
	public String newsList()
	{
		// TODO Auto-generated method stub
		newsList = newsService.newsList();

		return SUCCESS;
	}
	/**
	 * 保存添加的新闻
	 */
	@Override
	public String insertNews()
	{
		// TODO Auto-generated method stub
		try
		{
			session = request.getSession();
			Object user = session.getAttribute("userInfo");
			news.setUser((User) user);
			news.setModular(modular);
			news.setType(newsSmallClass);
			newsService.insertNews(news);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}

		return SUCCESS;
	}
	/**
	 * 更新添加的新闻
	 */
	@Override
	public String updateNews()
	{
		// TODO Auto-generated method stub
		News value = newsService.findNews(news.getId());
		news.setType(newsSmallClass);
		news.setModular(modular);
		news.setUser(value.getUser());
		news.setCreateDate(value.getCreateDate());
		news.setReadTimes(value.getReadTimes());
		news.setCommentTimes(value.getCommentTimes());
		news.setFlag(value.getFlag());
		newsService.updateNews(news);
		return SUCCESS;
	}
	/**
	 * 删除添加的新闻
	 */
	@Override
	public String deleteNews()
	{
		// TODO Auto-generated method stub
		newsService.deleteNews(news.getId());
		return SUCCESS;
	}

	@Override
	public String findNews()
	{
		// TODO Auto-generated method stub
		news = newsService.findNews(news.getId());
		return SUCCESS;
	}
	/**
	 * 查询新闻首页要显示的新闻标题
	 */
	public String showTitle()
	{
		newsList = newsService.findTitle();
		for (News newsValue : newsList)
		{
			if (newsValue.getModular().getValue() == 13)
			{
				lRNews.add(newsValue);
			}
			if (newsValue.getModular().getValue() == 23)
			{
				lLNewsR.add(newsValue);
			}
			if (newsValue.getModular().getValue() == 24)
			{
				lLNewsP.add(newsValue);
			}
			if (newsValue.getModular().getValue() == 26)
			{
				lLNewsTW.add(newsValue);
			}
			if (newsValue.getModular().getValue() == 16)
			{
				rNewsRA.add(newsValue);
			}
		}
		return SUCCESS;
	}
	/**
	 * 显示新闻内容
	 */
	public String showNews()
	{
		commentList = commentService.getCommentList(news.getId());
		news = newsService.findNewsMessage(news.getId());
		return SUCCESS;
	}
}
