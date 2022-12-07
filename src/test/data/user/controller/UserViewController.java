package ee.apajo.api.user.controller;

import ee.apajo.api.controller.ShowController;
import ee.apajo.api.form.annotation.SchemaController;
import ee.apajo.api.user.model.User;
import ee.apajo.api.user.service.UserDao;
import org.springframework.beans.factory.annotation.Autowired;

@SchemaController(
    path = "users",
    name = "Users",
    tag = "Users"
)
public class UserViewController extends ShowController<User> {
	@Autowired
	protected UserDao dao;
}