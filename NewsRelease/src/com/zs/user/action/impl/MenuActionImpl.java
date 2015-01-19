package com.zs.user.action.impl;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.user.action.MenuAction;
import com.zs.user.entity.Menu;
import com.zs.user.service.impl.MenuServiceImpl;
@Controller
public class MenuActionImpl extends BaseAction implements MenuAction
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
	MenuServiceImpl menuService;
	public List<Menu> menuList;
	@Override
	public String menuList()
	{
		menuList = menuService.menuList();
		return SUCCESS;
	}

	@Override
	public String insertMenu()
	{
		menuService.insertMenu(menu);
		return SUCCESS;
	}

	@Override
	public String updateMenu()
	{
		menuService.updateMenu(menu);
		return SUCCESS;
	}

	@Override
	public String deleteMenu()
	{
		menuService.deleteMenu(menu.getId());
		return SUCCESS;
	}

	@Override
	public String findMenu()
	{
		menu = menuService.findMenu(menu.getId());
		return SUCCESS;
	}
	
	public String findMenuList() {
	    try {
	      JSONArray arrayJson = new JSONArray();
	      menuList = menuService.menuLists();
	      if(menuList.size() !=0){
	        for (Menu menu : menuList) {
	          JSONObject json = new JSONObject();
	          json.put("id",menu.getId() );
	          json.put("menuName", menu.getName());
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
