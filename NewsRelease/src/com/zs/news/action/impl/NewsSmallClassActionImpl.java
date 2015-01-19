package com.zs.news.action.impl;

import java.util.List;

import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.news.action.NewsSmallClassAction;
import com.zs.news.entity.NewsSmallClass;
import com.zs.news.service.impl.NewsSmallClassServiceImpl;
import com.zs.user.entity.User;

@Controller
public class NewsSmallClassActionImpl extends BaseAction implements NewsSmallClassAction {
  private static final long serialVersionUID = 1L;
  @Autowired
  private NewsSmallClassServiceImpl smallClassService;
  public List<NewsSmallClass> smallClassList;
  public HttpSession session;

  @Override
  public String smallClassList() {
    // TODO Auto-generated method stub
    smallClassList = smallClassService.smallClassList();
    return SUCCESS;
  }

  @Override
  public String insertSmallClass() {
    // TODO Auto-generated method stub
    session = request.getSession();
    Object user = session.getAttribute("userInfo");
    newsSmallClass.setUser((User) user);
    newsSmallClass.setBigClassType(newsBigClass);
    smallClassService.insertSmallClass(newsSmallClass);
    return SUCCESS;
  }

  @Override
  public String updateSmallClass() {
    // TODO Auto-generated method stub
    NewsSmallClass value = smallClassService.findSmallClass(newsSmallClass.getId());
    newsSmallClass.setBigClassType(newsBigClass);
    newsSmallClass.setCreateDate(value.getCreateDate());
    newsSmallClass.setUser(value.getUser());
    newsSmallClass.setFlag(value.getFlag());
    smallClassService.updateSmallClass(newsSmallClass);
    return SUCCESS;
  }

  @Override
  public String deleteSmallClass() {
    // TODO Auto-generated method stub
    smallClassService.deleteSmallClass(newsSmallClass.getId());
    return SUCCESS;
  }

  @Override
  public String findSmallClass() {
    // TODO Auto-generated method stub
    newsSmallClass = smallClassService.findSmallClass(newsSmallClass.getId());
    return SUCCESS;
  }

  public String findListSmaClass() {
    try {
      JSONArray arrayJson = new JSONArray();
      smallClassList = smallClassService.smallClassList();
      if(smallClassList.size() !=0){
        for (NewsSmallClass smallClass : smallClassList) {
          JSONObject json = new JSONObject();
          json.put("id",smallClass.getId() );
          json.put("typeName", smallClass.getTypeName());
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
