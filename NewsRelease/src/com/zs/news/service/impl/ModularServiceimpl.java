package com.zs.news.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.news.dao.impl.ModularDaoImpl;
import com.zs.news.entity.Modular;
import com.zs.news.service.ModularService;
@Service
public class ModularServiceimpl implements ModularService {
  @Autowired
  private ModularDaoImpl modularDao;
  @Override
  public List<Modular> modularList() {
    // TODO Auto-generated method stub
    return modularDao.ModularList();
  }

  @Override
  public void insertModular(Modular modular) {
    // TODO Auto-generated method stub
    modularDao.insertModular(modular);

  }

  @Override
  public void updateModular(Modular modular) {
    // TODO Auto-generated method stub
    modularDao.updateModular(modular);
  }
  
  @Override
  public Modular findModular(String modularId) {
    // TODO Auto-generated method stub
    return modularDao.findModular(modularId);
  }

  @Override
  public void deleteModular(String modularId) {
    // TODO Auto-generated method stub
    Modular modular = findModular(modularId);
    modularDao.deleteModular(modular);
  }

}
