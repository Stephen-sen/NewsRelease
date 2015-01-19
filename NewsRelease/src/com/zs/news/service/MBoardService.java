package com.zs.news.service;

import java.util.List;

import com.zs.news.entity.MessageBoard;


public interface MBoardService
{
	public List<MessageBoard> mBoardList();
	public void insertMBoard(MessageBoard mBoard);
	public void updateMBoard(MessageBoard mBoard);
	public MessageBoard findMBoard(String mBoardId);
	public void deleteMBoard(String mBoardId);
}
