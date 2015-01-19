package com.zs.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zs.user.entity.User;
public interface UserService
	{
		public List<User> userList();
		public void insertUser(User user);
		public void updateUser(User user);
		public User findUser(String userid);
		public void deleteUser(String userid);
	}
