package com.zs.news.service.impl;

import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.news.dao.impl.MBoardDaoImpl;
import com.zs.news.entity.MessageBoard;
import com.zs.news.service.MBoardService;
import com.zs.util.DateUtil;

@Service
public class MBoardServiceImpl implements MBoardService
{
	@Autowired
	private MBoardDaoImpl mBoardDao;
	@Override
	public List<MessageBoard> mBoardList()
	{
		List<MessageBoard> mBoardList = mBoardDao.MBoardList();
		return mBoardList;
	}

	@Override
	public void insertMBoard(MessageBoard mBoard)
	{
		mBoard.setFlag("Y");
		 Date currentTime = new Date();
	     String createDate = DateUtil.convertDateToString(currentTime, DateUtil.DATE_FORMAT_yyyyMMddhhmmss);
	     mBoard.setDateTime(createDate);
		mBoardDao.insertMBoard(mBoard);

	}

	@Override
	public void updateMBoard(MessageBoard mBoard)
	{
		MessageBoard val = mBoardDao.findMBoard(mBoard.getId());
		mBoard.setFlag(val.getFlag());
		mBoardDao.updateMBoard(mBoard);

	}

	@Override
	public MessageBoard findMBoard(String mBoardId)
	{
		MessageBoard mBoard = mBoardDao.findMBoard(mBoardId);
		return mBoard;
	}

	@Override
	public void deleteMBoard(String mBoardId)
	{
		MessageBoard mBoard = findMBoard(mBoardId);
		mBoardDao.deleteMBoard(mBoard);

	}

}
