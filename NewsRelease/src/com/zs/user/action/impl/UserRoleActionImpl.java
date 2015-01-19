package com.zs.user.action.impl;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.user.action.UserRoleAction;
import com.zs.user.entity.Role;
import com.zs.user.entity.UserRole;
import com.zs.user.service.impl.UserRoleServiceImpl;

@Controller
public class UserRoleActionImpl extends BaseAction implements UserRoleAction
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
	UserRoleServiceImpl userRoleService;
	public List<UserRole> userRoleList;
	public List<Role> roleList;

	@Override
	public String userRoleList()
	{
		userRoleList = userRoleService.userRoleList();
		return SUCCESS;
	}

	@Override
	public String insertUserRole()
	{
		/**
		 * 先删除再修改
		 */
		userRoleList = userRoleService.findRole(role.getId());
		userRoleService.deleteAll(userRoleList);
		UserRole userRole =new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);
		userRoleService.insertUserRole(userRole);
		return SUCCESS;
	}

	@Override
	public String updateUserRole()
	{
		userRoleService.updateUserRole(userRole);
		return SUCCESS;
	}

	@Override
	public String deleteUserRole()
	{
		userRoleService.deleteUserRole(userRole.getId());
		return SUCCESS;
	}

	@Override
	public String findUserRole()
	{
		userRoleService.findUserRole(userRole.getId());
		return SUCCESS;
	}
	
	public String findUser()
	{
		user = userRoleService.findUser(user.getId());
		return SUCCESS;
	}
	
	public String findRoleList() {
	    try {
	      JSONArray arrayJson = new JSONArray();
	      roleList = userRoleService.findRoleList();
	      if(roleList.size() !=0){
	        for (Role role : roleList) {
	          JSONObject json = new JSONObject();
	          json.put("id",role.getId() );
	          json.put("roleName", role.getName());
	          arrayJson.add(json);
	        }
	        result = arrayJson;
	      }
	    } catch (Exception e) {
	      e.printStackTrace();
	    }
	    return "success";
	  }

}
