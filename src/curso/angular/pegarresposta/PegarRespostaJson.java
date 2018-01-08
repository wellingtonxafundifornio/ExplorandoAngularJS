package curso.angular.pegarresposta;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@WebServlet("/pegarRespostaJson")
public class PegarRespostaJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public PegarRespostaJson() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		response.setHeader("Cache-Control", "nocache");
		response.setCharacterEncoding("utf-8");
		
		JsonArray jsonArray = new JsonArray();
		
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("nome", "João");
		jsonObject.addProperty("cidade", "Recife");
		jsonArray.add(jsonObject);
		
		jsonObject = new JsonObject();
		
		jsonObject.addProperty("nome", "Maria");
		jsonObject.addProperty("cidade", "Goiânia");
		jsonArray.add(jsonObject);
		
		jsonObject = new JsonObject();
		
		jsonObject.addProperty("nome", "Wesley");
		jsonObject.addProperty("cidade", "Porto Alegre");
		jsonArray.add(jsonObject);
		
		jsonObject = new JsonObject();
		
		jsonObject.addProperty("nome", "Alexander");
		jsonObject.addProperty("cidade", "Nova York");
		jsonArray.add(jsonObject);
		
		response.getWriter().write(jsonArray.toString());
		
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
