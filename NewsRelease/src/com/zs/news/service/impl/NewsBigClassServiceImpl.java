package com.zs.news.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.news.dao.impl.NewsBigClassDaoImpl;
import com.zs.news.entity.NewsBigClass;
import com.zs.news.service.NewsBigClassService;
import com.zs.util.DateUtil;

@Service
public class NewsBigClassServiceImpl implements NewsBigClassService
{
	@Autowired
	private NewsBigClassDaoImpl bigClassDao;

	/**
	 * 查找所有的大类新闻
	 */
	@Override
	public List<NewsBigClass> bigClassList()
	{
		// TODO Auto-generated method stub
		try
		{
			List<NewsBigClass> bigClass = bigClassDao.NewsBigClassList();
			return bigClass;
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;

	}
	/**
	 * 保存大类新闻信息
	 */
	@Override
	public void insertBigClass(NewsBigClass bigClass)
	{
		// TODO Auto-generated method stub
		try
		{
			Date currentTime = new Date();
			String createDate = DateUtil.convertDateToString(currentTime, DateUtil.DATE_FORMAT_yyyyMMddhhmmss);
			bigClass.setCreateDate(createDate);
			bigClass.setFlag("Y");
			bigClassDao.insertBigClass(bigClass);

		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}

	}
	/**
	 * 更新大类新闻信息
	 */
	@Override
	public void updateBigClass(NewsBigClass bigClass)
	{
		// TODO Auto-generated method stub
		try
		{
			bigClassDao.updateBigClass(bigClass);

		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}

	}
	/**
	 *查找大类新闻
	 */
	@Override
	public NewsBigClass findBigClass(String bigClassId)
	{
		// TODO Auto-generated method stub
		try
		{
			return bigClassDao.findBigClass(bigClassId);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;

	}
	/**
	 * 删除大类新闻
	 */
	@Override
	public void deleteBigClass(String bigClassId)
	{
		// TODO Auto-generated method stub
		try
		{
			NewsBigClass bigClass = findBigClass(bigClassId);
			bigClassDao.deleteBigClass(bigClass);

		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}

	}

}
