package com.zs.news.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.news.dao.impl.NewsDaoImpl;
import com.zs.news.entity.Comment;
import com.zs.news.entity.Modular;
import com.zs.news.entity.News;
import com.zs.news.service.NewsService;
import com.zs.util.DateUtil;

@Service
public class NewsServiceImpl implements NewsService
{
	@Autowired
	private NewsDaoImpl newsDao;

	@Override
	public List<News> newsList()
	{
		// TODO Auto-generated method stub
		List<News> newsList = newsDao.NewsList();
		return newsList;
	}

	@Override
	public void insertNews(News news)
	{
		// TODO Auto-generated method stub
		try
		{
			Date currentTime = new Date();
			String createDate = DateUtil.convertDateToString(currentTime, DateUtil.DATE_FORMAT_yyyyMMddhhmmss);
			news.setCreateDate(createDate);
			news.setFlag("Y");
			newsDao.insertNews(news);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}

	}

	@Override
	public void updateNews(News news)
	{
		// TODO Auto-generated method stub
		try
		{
			newsDao.updateNews(news);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	@Override
	public News findNews(String newsid)
	{
		// TODO Auto-generated method stub
		try
		{
			return newsDao.findNews(newsid);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public void deleteNews(String newsid)
	{
		// TODO Auto-generated method stub
		News news = newsDao.findNews(newsid);
		newsDao.deleteNews(news);
	}

	public News findNewsMessage(String newsid)
	{
		// TODO Auto-generated method stub
		try
		{
			List<Object[]> newsMessage = newsDao.findNewsMessage(newsid);
			News news = new News();
			for (Object[] newsMess : newsMessage)
			{
				news.setId(newsMess[0] + "");
				news.setTitle(newsMess[1] + "");
				news.setCreateDate(newsMess[2] + "");
				news.setSource(newsMess[3] + "");
				if (newsMess[4] != null)
				{
					news.setReadTimes(Integer.parseInt(newsMess[4] + ""));
				}
				if (newsMess[5] != null)
				{
					news.setCommentTimes(Integer.parseInt(newsMess[5] + ""));
				}
				news.setContent(newsMess[6] + "");
			}
			return news;
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;
	}

	public List<News> findTitle()
	{
		// TODO Auto-generated method stub
		List<Object[]> newsList = newsDao.findTitle();
		List<News> newsValue = new ArrayList<News>();
		for (Object[] newlist : newsList)
		{
			News news = new News();
			news.setId(newlist[0] + "");
			news.setTitle(newlist[1] + "");
			if (newlist[3] != null)
			{
				news.setNewImg(newlist[3] + "");
			}
			if (newlist[4] != null)
			{
			news.setReadTimes(Integer.parseInt(newlist[4] + ""));
			}
			news.setModular((Modular)(newlist[5]));
			
			news.setIntro(newlist[2] + "");
			newsValue.add(news);
		}
		return newsValue;
	}
	
}
