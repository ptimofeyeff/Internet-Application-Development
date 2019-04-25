package jpa.dao;

import jpa.utils.HibernateSessionFactoryUtil;
import model.Result;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class ResultDao {

    public void save(Result result){
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.save(result);
        transaction.commit();
        session.close();
    }

    public void saveAll(List<Result> results){
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        for(Result result : results){
            session.save(result);
        }
        transaction.commit();
        session.close();
    }

    public Result findById(int id){
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Result.class, id);
    }


    public void update(Result result){
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.update(result);
        transaction.commit();
        session.close();
    }

    public void delete(Result result){
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.delete(result);
        transaction.commit();
        session.close();
    }

    public void deleteAll(){
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
    }

    public List<Result> findAll(){
       return (List<Result>) HibernateSessionFactoryUtil.getSessionFactory()
               .openSession().createQuery("FROM model.Result").list();
    }
}
