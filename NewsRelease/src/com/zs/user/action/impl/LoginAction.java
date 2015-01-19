package com.zs.user.action.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.zs.base.dao.BaseDao;
import com.zs.user.entity.Menu;
import com.zs.user.entity.RoleMenu;
import com.zs.user.entity.User;
import com.zs.user.entity.UserRole;
import com.zs.user.service.impl.RoleMenuServiceImpl;
import com.zs.user.service.impl.UserRoleServiceImpl;
import com.zs.util.DateUtil;

@Controller
public class LoginAction extends BaseDao
{
	@Autowired
	UserRoleServiceImpl userRoleService;
	@Autowired
	RoleMenuServiceImpl roleMenuService;
	private static final long serialVersionUID = 1L;

	/**
	 * 用来处理登录验证
	 * 
	 * @return
	 */
	public String loginCheck()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		try
		{
			if (user != null)
			{
				String userName = user.getUserName();
				String passWord = user.getPassWord();
				List list = this.getHibernateTemplate().find("from User where  nickName =  " + " '" + userName + "'" + " and passWord = " + "'" + passWord + "'");
				if (list.size() != 0 && list != null)
				{
					User userMessage = (User) list.get(0);
					Date currentTime = new Date();
					String createDate = DateUtil.convertDateToString(currentTime, DateUtil.DATE_FORMAT_yyyyMMddhhmmss);
					user.setLoginDate(createDate);
					user.setLoginTimes(userMessage.getLoginTimes() + 1);
					String hql = "update User set loginDate ='" + user.getLoginDate() + "' , loginTimes ='" + user.getLoginTimes() + "' where id = '" + userMessage.getId() + "'";
					this.getHibernateTemplate().getSessionFactory().openSession().createQuery(hql).executeUpdate();

					if (!userMessage.getAddress().equals("") && !userMessage.getAddress().isEmpty())
					{
						String[] address = userMessage.getAddress().split(",");
						if (address.length == 3)
						{
							String district = address[2];
							request.setAttribute("district", district);
						}
						String province = address[0];
						request.setAttribute("province", province);
						String city = address[1];
						request.setAttribute("city", city);
					}
					if (!userMessage.getBirthDate().equals("") && !userMessage.getBirthDate().isEmpty())
					{
						String[] date = userMessage.getBirthDate().split("-");
						request.setAttribute("birthYear", date[0]);
						request.setAttribute("birthMonth", date[1]);
						request.setAttribute("birthDay", date[2]);
					}
					// String address = userMessage.getAddress().replace(",",
					// "");
					// userMessage.setAddress(address);
					/**
					 * 把用户的信息保存进session
					 */
					session.setAttribute("userInfo", userMessage);

					List<UserRole> userRoleList = userRoleService.userRoleMess(userMessage.getId());
					if (userRoleList.size() != 0 && userRoleList != null)
					{
						UserRole userRoleMess = userRoleList.get(0);
						session.setAttribute("userRoleMess", userRoleMess);
						List<RoleMenu> roleMenuMess = roleMenuService.findMenuByRole(userRoleMess.getRole().getId());
						List<Menu> userMenuList = new ArrayList<Menu>();
						for (RoleMenu roleMenu : roleMenuMess)
						{
							userMenuList.add(roleMenu.getMenu());
						}
						session.setAttribute("userMenuList", userMenuList);
					}

					return "success";
				}
			}

		} catch (Exception e)
		{
			e.printStackTrace();
		}
		request.setAttribute("errorMess", "用户名或密码错误，请重新登录！！！");
		return "error";
	}

	/**
	 * 处理前台用户的登录
	 * 
	 * @return
	 */
	public String userLoginCheck()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		try
		{
			JSONArray arrayJson = new JSONArray();
			String passWord = user.getPassWord();
			String nickName = user.getNickName();
			JSONObject json = new JSONObject();

			if (passWord != null)
			{
				List list = this.getHibernateTemplate().find("from User where  nickName =  " + " '" + nickName + "'" + " and passWord = " + "'" + passWord + "'");

				if (list.size() == 0)
				{
					json.put("message", "原始密码输入错误");
					json.put("state", 1);
				}
				if (list.size() != 0 && list != null)
				{
					User userMessage = (User) list.get(0);
					session.setAttribute("userMess", userMessage);
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
	 * 用户取消登录，销毁session
	 * 
	 * @return
	 */
	public String destroyLogin()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		try
		{
			JSONArray arrayJson = new JSONArray();
			JSONObject json = new JSONObject();
			session.removeAttribute("userMess");
			arrayJson.add(json);
			result = arrayJson;
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return "success";
	}
	/**
	 * 后台取消登录，销毁session
	 * 
	 * @return
	 */
	public String LoginOut()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		session.removeAttribute("userInfo");
		session.removeAttribute("userMenuList");
		return "success";
	}
	/**
	 * 后台取消登录，销毁session
	 * 
	 * @return
	 */
	public String checkVerify()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		try
		{
			JSONArray arrayJson = new JSONArray();
			JSONObject json = new JSONObject();
			String str1 = (String) session.getAttribute("randCheckCode");
			String verify = user.getVerify();
			if(str1.equalsIgnoreCase(verify)){
				json.put("state", 1);
			}
			arrayJson.add(json);
			result = arrayJson;
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return "success";
	}
}
