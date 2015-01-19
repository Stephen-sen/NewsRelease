package com.zs.news.action.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.news.action.MBoardAction;
import com.zs.news.entity.MessageBoard;
import com.zs.news.service.impl.MBoardServiceImpl;

@Controller
public class MBoardActionImpl extends BaseAction implements MBoardAction
{

	@Autowired
	private MBoardServiceImpl mBoardService;
	public List<MessageBoard> mBoardList;

	@Override
	public String mBoardList()
	{
		mBoardList = mBoardService.mBoardList();
		return SUCCESS;
	}

	@Override
	public String insertMBoard()
	{
		messageBoard.setUser(user);
		mBoardService.insertMBoard(messageBoard);
		
		return SUCCESS;
	}

	@Override
	public String updateMBoard()
	{
		messageBoard.setUser(user);
		mBoardService.updateMBoard(messageBoard);
		return SUCCESS;
	}

	@Override
	public String deleteMBoard()
	{
		mBoardService.deleteMBoard(messageBoard.getId());
		return SUCCESS;
	}

	@Override
	public String findMBoard()
	{
		messageBoard = mBoardService.findMBoard(messageBoard.getId());
		return SUCCESS;
	}

}
