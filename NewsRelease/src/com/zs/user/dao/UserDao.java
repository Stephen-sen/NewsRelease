package com.zs.user.dao;

import java.util.List;


import com.zs.user.entity.User;
public interface UserDao
	{
		public List<User> UserList();
		public void deleteUser(User user);
		public void insertUser(User user);
		public void updateUser(User user);
		public User findUser(String userid);
	}
