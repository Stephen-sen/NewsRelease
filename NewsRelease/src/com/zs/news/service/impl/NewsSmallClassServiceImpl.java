package com.zs.news.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.news.dao.impl.NewsSmallClassDaoImpl;
import com.zs.news.entity.NewsSmallClass;
import com.zs.news.service.NewsSmallClassService;
import com.zs.util.DateUtil;
@Service
public class NewsSmallClassServiceImpl implements NewsSmallClassService
{
	@Autowired
	private NewsSmallClassDaoImpl smallClassDao;
	/**
	 * 查找所有的小类新闻
	 */
	@Override
	public List<NewsSmallClass> smallClassList()
	{
		// TODO Auto-generated method stub
		List<NewsSmallClass> smallClass = smallClassDao.NewsSmallClassList();
		return smallClass;
	}
	/**
	 * 保存小类新闻信息
	 */
	@Override
	public void insertSmallClass(NewsSmallClass smallClass)
	{
		// TODO Auto-generated method stub
	  Date currentTime = new Date();
    String createDate = DateUtil.convertDateToString(currentTime, DateUtil.DATE_FORMAT_yyyyMMddhhmmss);
    smallClass.setCreateDate(createDate);
		smallClass.setFlag("Y");
		smallClassDao.insertSmallClass(smallClass);

	}
	/**
	 * 更新小类新闻信息
	 */
	@Override
	public void updateSmallClass(NewsSmallClass smallClass)
	{
		// TODO Auto-generated method stub
		smallClassDao.updateSmallClass(smallClass);

	}
	/**
	 *查找小类新闻
	 */
	@Override
	public NewsSmallClass findSmallClass(String smallClassId)
	{
		// TODO Auto-generated method stub
		NewsSmallClass smallClass = smallClassDao.findSmallClass(smallClassId);
		return smallClass;
	}
	/**
	 *删除小类新闻
	 */
	@Override
	public void deleteSmallClass(String smallClassId)
	{
		// TODO Auto-generated method stub
		NewsSmallClass smallClass = findSmallClass(smallClassId);
		smallClassDao.deleteSmallClass(smallClass);
	}

}
