package texteditor;

import javax.swing.JFrame;

public class TextEditor {


    public static void main(String[] args) {
       TextEditorGUI obj = new TextEditorGUI();
       obj.setBounds(0,0,700,700);
       obj.setTitle("Text Editor");
       obj.setResizable(false);
       obj.setVisible(true);
       obj.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
   
    
}
