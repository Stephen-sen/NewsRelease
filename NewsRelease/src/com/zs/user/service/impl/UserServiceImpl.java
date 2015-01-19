package com.zs.user.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.user.dao.impl.UserDaoImpl;
import com.zs.user.entity.User;
import com.zs.user.service.UserService;
import com.zs.util.DateUtil;
@Service
public class UserServiceImpl implements UserService {
  @Autowired
	private UserDaoImpl userDao;
  /**
	 * 获取用户列表
	 */
	@Override
	public List<User> userList() {
	  
	 // TODO Auto-generated method stub
	    List<User> list = userDao.UserList();
	    return list;
	}
	/**
	 * 保存用户信息
	 */
	@Override
	public void insertUser(User user) {
	  try{
	    if(user.getSex()=="" || user.getSex()== null){
	      user.setSex("1");
	    }
	    commenMessage(user);
	    if(user.getPassWord()=="" || user.getSex()== null){
	      user.setPassWord("0000");
	    }
	    Date currentTime = new Date();
		String createDate = DateUtil.convertDateToString(currentTime, DateUtil.DATE_FORMAT_yyyyMMddhhmmss);
		user.setRegistDate(createDate);
		user.setLoginTimes(0);
		user.setHeadImg("images/default.jpg");
		userDao.insertUser(user);
	    // TODO Auto-generated method stub
	  }catch (Exception e) {
      // TODO: handle exception
	    e.printStackTrace();
    }
	  
	}
	/**
	 *更新用户信息
	 */
	@Override
	public void updateUser(User user) {
	  try{
	    String userId = user.getId();
      User userValue = findUser(userId);
      user.setPassWord(userValue.getPassWord());
      commenMessage(user);
      userDao.updateUser(user);
	  }catch (Exception e) {
      // TODO: handle exception
	    e.printStackTrace();
    }
		
	}
	/**
	 * 查找用户
	 */
	@Override
	public User findUser(String userid) {
	  try{
	    User user = userDao.findUser(userid);
	    return user;
	  }catch (Exception e) {
      // TODO: handle exception
	    e.printStackTrace();
    }
    return null;
	 
	}
	/**
	 * 删除用户
	 */
	@Override
	public void deleteUser(String userid) {
		User user = findUser(userid);
		userDao.deleteUser(user);
	}
	/**
	 * 修改密码
	 */
	public void updatePwd(User user){
	  commenMessage(user);
		userDao.updatePwd(user);
	}
	/**
	 * 公用信息，主要是用来处理用户的出生年月以及家庭住址
	 */
	public void commenMessage(User user){
	  try{
	    String brithyear = user.getBirthYear();
	    String brithmonth = user.getBirthMonth();
	    String brithday = user.getBirthDay();
	    StringBuffer brithdate = new StringBuffer();
	    if(brithyear != null){
	      brithdate.append(brithyear);
	    }
	    if(brithmonth != null){
        brithdate.append("-" + brithmonth);
      }
	    if(brithday != null){
        brithdate.append("-" + brithday);
      }

	    String provinceName = user.getProvince();
	    String cityName = user.getCity();
	    String districtName = user.getDistrict();
	    StringBuffer address = new StringBuffer();
	    if (provinceName != null) {
	      address.append(provinceName);
	    }
	    if (cityName != null) {
	      address.append("," + cityName);
	    }
	    if (districtName != null) {
	      address.append("," + districtName);
	    }
	    user.setBirthDate(brithdate.toString());
	    user.setFlag("Y");
	    user.setAddress(address.toString());
	  }catch (Exception e) {
      // TODO: handle exception
	    e.printStackTrace();
    }
    
  }
}
