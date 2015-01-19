package com.zs.user.action.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.user.service.impl.UserServiceImpl;

@Controller
public class RegisterAction extends BaseAction
{
	/**
	 * 保存用户注册信息
	 */
	@Autowired
	public UserServiceImpl userService;

	public String register()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		try
		{
			if (user != null)
			{
				userService.insertUser(user);
				request.setAttribute("RegistMess", "恭喜你注册成功，请登录！");
			}
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return SUCCESS;
	}

	@Override
	public String execute() throws Exception
	{
		// TODO Auto-generated method stub
		return SUCCESS;
	}
}
