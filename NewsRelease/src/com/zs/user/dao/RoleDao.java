package com.zs.user.dao;

import java.util.List;

import com.zs.user.entity.Role;

public interface RoleDao {
  public List<Role> RoleList();
  public void deleteRole(Role role);
  public void insertRole(Role role);
  public void updateUser(Role role);
  public Role findRole(String roleid);
}
