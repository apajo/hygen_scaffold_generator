package ee.apajo.api.user.controller;

import ee.apajo.api.controller.CrudController;
import ee.apajo.api.form.annotation.SchemaController;
import ee.apajo.api.user.model.User;
import ee.apajo.api.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

@SchemaController(
    path = "users",
    name = "Users",
    tag = "Users"
)
public class UserCrudController extends CrudController<User> {
	@Autowired
	protected UserDao dao;
}