package com.zs.user.action.impl;



import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.zs.base.dao.BaseDao;

public class Check extends BaseDao
{
	private static final long serialVersionUID = 1L;
/**
 * 验证用户注册的用户名以及邮箱是否可用
 * @return
 */
	public String checkName()
	{
		try
		{
		  JSONArray arrayJson = new JSONArray();
			String nickName = user.getNickName();
			String email = user.getEmail();
			
			JSONObject json = new JSONObject();
			
			if (nickName != null || email != null)
			{
				List list = this.getHibernateTemplate().find
						("from User where nickName = " + " '" + nickName + "'or email = '" +  email +"'");
				
				if (list.size() == 0)
				{
				  if(nickName != null){
				    json.put("message", "该名称可用");
				  }
				  else{
				    json.put("message", "该邮箱可用");
				  }
					json.put("state", 1);
				}
				else{
				  if(nickName != null){
				    json.put("message", "该名称已存在");
				  }
				  else{
				    json.put("message", "该邮箱已存在");
				  }
					json.put("state", 0);
				}
				arrayJson.add(json);
				result = arrayJson;
			}
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return "success";
		
	}
	/**
	 * 用户修改密码时，验证原始密码是否正确
	 * @return
	 */
	public String checkPwd()
	{
	  try
		{
		  JSONArray arrayJson = new JSONArray();
			String passWord = user.getPassWord();
			JSONObject json = new JSONObject();
			
			if (passWord != null)
			{
				List list = this.getHibernateTemplate().find
						("from User where passWord = " + " '" + passWord + "'and id = '" +  user.getId() +"'");
				System.out.println(list.size()+"这是list的长度");
				if (list.size() == 0)
				{
				    json.put("message", "原始密码输入错误");
					json.put("state", 1);
				}
				else{
				  json.put("message", "密码正确，请输入新的密码");
					json.put("state", 0);
				}
				arrayJson.add(json);
				result = arrayJson;
			}
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return "success";
		
	}

}
