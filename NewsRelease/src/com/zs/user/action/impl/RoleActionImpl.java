package com.zs.user.action.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.user.action.RoleAction;
import com.zs.user.entity.Role;
import com.zs.user.service.impl.RoleServiceImpl;

@Controller
public class RoleActionImpl extends BaseAction implements RoleAction {
  @Autowired
  RoleServiceImpl roleService;
  public List<Role> roleList;
  @Override
  public String roleList() {
    roleList = roleService.roleList();
    return SUCCESS;
  }

  @Override
  public String insertRole() {
    roleService.insertRole(role);
    return SUCCESS;
  }

  @Override
  public String updateRole() {
    roleService.updateRole(role);
    return SUCCESS;
  }

  @Override
  public String deleteRole() {
    roleService.deleteRole(role.getId());
    return SUCCESS;
  }

  @Override
  public String findRole() {
    role = roleService.findRole(role.getId());
    return SUCCESS;
  }

}
