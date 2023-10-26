package com.emp.emp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.emp.emp.model.EmpModel;
@Repository
public interface UserRepository extends JpaRepository<EmpModel,Long>  {
    EmpModel findByEmail(String email);
}
