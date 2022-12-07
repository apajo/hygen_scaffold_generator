package ee.apajo.api.user.controller;

import ee.apajo.api.controller.ListController;
import ee.apajo.api.form.annotation.SchemaController;
import ee.apajo.api.user.model.User;
import ee.apajo.api.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;

import javax.servlet.http.HttpServletResponse;

@SchemaController(
	path = "users",
	name = "Users",
	tag = "Users"
)
public class UserListController extends ListController<User> {
	@Autowired
	protected UserDao dao;''
}