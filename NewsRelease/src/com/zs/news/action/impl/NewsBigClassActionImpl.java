package com.zs.news.action.impl;

import java.util.List;

import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.news.action.NewsBigClassAction;
import com.zs.news.entity.NewsBigClass;
import com.zs.news.service.impl.NewsBigClassServiceImpl;
import com.zs.user.entity.User;

@Controller
public class NewsBigClassActionImpl extends BaseAction implements NewsBigClassAction {
  private static final long serialVersionUID = 1L;
  @Autowired
  private NewsBigClassServiceImpl bigClassService;
  public List<NewsBigClass> bigClassList;
  public HttpSession session;
  @Override
  public String bigClassList() {
    // TODO Auto-generated method stub
    bigClassList = bigClassService.bigClassList();
    return SUCCESS;
  }

  @Override
  public String insertBigClass() {
    // TODO Auto-generated method stub
    session = request.getSession();
    Object user = session.getAttribute("userInfo");
    newsBigClass.setUser((User) user);
    bigClassService.insertBigClass(newsBigClass);
    return SUCCESS;
  }

  @Override
  public String updateBigClass() {
    // TODO Auto-generated method stub
    try{
      NewsBigClass value = bigClassService.findBigClass(newsBigClass.getId());
      newsBigClass.setCreateDate(value.getCreateDate());
      newsBigClass.setUser(value.getUser());
      newsBigClass.setFlag(value.getFlag());
      bigClassService.updateBigClass(newsBigClass);
    }catch (Exception e) {
      // TODO: handle exception
      e.printStackTrace();
    }
    
    return SUCCESS;
  }

  @Override
  public String deleteBigClass() {
    // TODO Auto-generated method stub
    bigClassService.deleteBigClass(newsBigClass.getId());
    return SUCCESS;
  }

  @Override
  public String findBigClass() {
    // TODO Auto-generated method stub
    newsBigClass = bigClassService.findBigClass(newsBigClass.getId());
    return SUCCESS;
  }

  public String findListBigClass() {
    try {
      JSONArray arrayJson = new JSONArray();
      bigClassList = bigClassService.bigClassList();
      if(bigClassList.size() !=0){
        for (NewsBigClass bigClass : bigClassList) {
          JSONObject json = new JSONObject();
          json.put("id",bigClass.getId() );
          json.put("typeName", bigClass.getTypeName());
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
