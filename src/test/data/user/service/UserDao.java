package ee.apajo.api.user.service;

import ee.apajo.api.repository.BaseRepository;
import ee.apajo.api.user.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Service
public class UserDao {
	@Autowired
	protected UserRepository repository;
}
