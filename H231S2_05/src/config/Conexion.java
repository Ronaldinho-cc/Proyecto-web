/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package config;

import java.sql.Connection;
import java.sql.DriverManager;
import javax.swing.JOptionPane;

/**
 *
 * @author Usuario19
 */
public class Conexion {
Connection con;

public Conexion (){
    try {
        Class.forName("com.mysql.jdbc.Driver");
        con = DriverManager.getConnection("jdbc:mysql://localhost:3306/registros","root","admin");
        JOptionPane.showMessageDialog(null, "Conexion exitosa");
        System.out.println("Conexion exito");
    } catch (Exception e) {
        System.out.println("error " + e);
    }
}
public Connection getConnection(){
return con;
}
    
}
