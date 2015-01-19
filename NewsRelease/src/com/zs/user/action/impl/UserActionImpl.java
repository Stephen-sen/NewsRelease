package com.zs.user.action.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.user.action.UserAction;
import com.zs.user.entity.User;
import com.zs.user.service.impl.UserServiceImpl;

@Controller
public class UserActionImpl extends BaseAction implements UserAction {
	@Autowired
	private UserServiceImpl userService;
	public List<User> userList;

	@Override
	public String userList() {
		userList = userService.userList();
		 for (User user : userList) {
       if (user.getAddress() != null) {
         String address = user.getAddress().replace(",", "");
         user.setAddress(address);
       }
      
     }
		return SUCCESS;
	}

	@Override
	public String insertUser() {
		
		userService.insertUser(user);
		return SUCCESS;
	}

	@Override
	public String updateUser() {
			userService.updateUser(user);
			return SUCCESS;
	}

	@Override
	public String deleteUser() {
		userService.deleteUser(user.getId());
		return SUCCESS;
	}

	@Override
	public String findUser() {
		user = userService.findUser(user.getId());
		if (!user.getAddress().equals("") && !user.getAddress().isEmpty()) {
			String[] address = user.getAddress().split(",");
			if (address.length == 3) {
				String district = address[2];
				request.setAttribute("district", district);
			}
			String province = address[0];
			request.setAttribute("province", province);
			String city = address[1];
			request.setAttribute("city", city);
		}
		if (!user.getBirthDate().equals("") && !user.getBirthDate().isEmpty()) {
			String[] date = user.getBirthDate().split("-");
			request.setAttribute("birthYear", date[0]);
			request.setAttribute("birthMonth", date[1]);
			request.setAttribute("birthDay", date[2]);
		}
		String address = user.getAddress().replace(",", "");
    user.setAddress(address);
		return SUCCESS;
	}
	
	public String updatePwd() {
		userService.updatePwd(user);
		return SUCCESS;
	}

	
}
