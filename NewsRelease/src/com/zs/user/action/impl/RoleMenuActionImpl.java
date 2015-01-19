package com.zs.user.action.impl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.user.action.RoleMenuAction;
import com.zs.user.entity.Menu;
import com.zs.user.entity.Role;
import com.zs.user.entity.RoleMenu;
import com.zs.user.service.impl.RoleMenuServiceImpl;

@Controller
public class RoleMenuActionImpl extends BaseAction implements RoleMenuAction
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
	RoleMenuServiceImpl roleMenuService;
	public List<RoleMenu> roleMenuList;
	public List<Menu> menuList;
	public List<Menu> menus;
	public List<Role> menuRolest;

	@Override
	public String roleMenuList()
	{
		roleMenuList = roleMenuService.roleMenuList();
		return SUCCESS;
	}

	@Override
	public String insertRoleMenu()
	{
		/*
		 * 先删除再添加
		 */
		roleMenuList = roleMenuService.findMenuByRole(role.getId());
		roleMenuService.deleteAll(roleMenuList);
		
		String roleMenuStr = roleMenu.getRoleMenuStr();
		if(roleMenuStr != null && !roleMenuStr.equals("")){
			String[] roleMenus = roleMenuStr.split(",");
			for (String str : roleMenus)
			{
				if(str != null){
					Menu menu = new Menu();
					menu.setId(str);
					RoleMenu roleMenu = new RoleMenu();
					roleMenu.setRole(role);
					roleMenu.setMenu(menu);
					roleMenuService.insertRoleMenu(roleMenu);
				}
				
			}
		}
		
		return SUCCESS;
	}

	@Override
	public String updateRoleMenu()
	{
		roleMenuService.updateRoleMenu(roleMenu);
		return SUCCESS;
	}

	@Override
	public String deleteRoleMenu()
	{
		roleMenuService.deleteRoleMenu(roleMenu.getId());
		return SUCCESS;
	}

	@Override
	public String findRoleMenu()
	{
		roleMenuService.findRoleMenu(roleMenu.getId());
		return SUCCESS;
	}

	public String findRole()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		role= roleMenuService.findRole(role.getId());
		menuList = roleMenuService.menuList();
		roleMenuList = roleMenuService.findMenuByRole(role.getId());
		try {
		      JSONArray arrayJson = new JSONArray();
		      if(roleMenuList.size() !=0){
		        for (RoleMenu menu : roleMenuList) {
		          JSONObject json = new JSONObject();
		          json.put("menuId",menu.getMenu().getId());
		          arrayJson.add(json.toString());
		        }
		        request.setAttribute("idjson", arrayJson);
		      }
		    } catch (Exception e) {
		      e.printStackTrace();
		    }
		    return SUCCESS;
		  }	
	
}
