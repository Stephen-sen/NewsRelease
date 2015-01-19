package com.zs.news.dao;

import java.util.List;


import com.zs.news.entity.MessageBoard;
public interface MBoardDao
	{
		public List<MessageBoard> MBoardList();
		public void deleteMBoard(MessageBoard mBoard);
		public void insertMBoard(MessageBoard mBoard);
		public void updateMBoard(MessageBoard mBoard);
		public MessageBoard findMBoard(String mBoardid);
	}
