package com.zs.news.action.impl;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.news.action.ModularAction;
import com.zs.news.entity.Modular;
import com.zs.news.entity.NewsSmallClass;
import com.zs.news.service.impl.ModularServiceimpl;

@Controller
public class ModularActionImpl extends BaseAction implements ModularAction {
  @Autowired
  private ModularServiceimpl modularService;
  public List<Modular> modularList;

  @Override
  public String modularList() {
    // TODO Auto-generated method stub
    modularList = modularService.modularList();
    return SUCCESS;
  }

  @Override
  public String insertModular() {
    // TODO Auto-generated method stub
    modular.setFlag("Y");
    modularService.insertModular(modular);
    return SUCCESS;
  }

  @Override
  public String updateModular() {
    // TODO Auto-generated method stub
    Modular value = modularService.findModular(modular.getId());
    modular.setFlag(value.getFlag());
    modularService.updateModular(modular);
    return SUCCESS;
  }

  @Override
  public String deleteModular() {
    // TODO Auto-generated method stub
    modularService.deleteModular(modular.getId());
    return SUCCESS;
  }

  @Override
  public String findModular() {
    // TODO Auto-generated method stub
    modular = modularService.findModular(modular.getId());
    return SUCCESS;
  }

  public String findListModular() {
	    try {
	      JSONArray arrayJson = new JSONArray();
	      modularList = modularService.modularList();
	      if(modularList.size() !=0){
	        for (Modular modular : modularList) {
	          JSONObject json = new JSONObject();
	          json.put("id",modular.getId() );
	          json.put("modularName", modular.getName());
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
