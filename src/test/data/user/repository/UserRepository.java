package ee.apajo.api.user.repository;

import ee.apajo.api.repository.BaseRepository;
import ee.apajo.api.user.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends BaseRepository<User> {
  @Query( "select u from User u where u.username in :username" )
  User findOneByUsername(String username);

  @Query( "select u from User u where u.username in :username and u.password in :password" )
  User findOneByCredentials(String username, @Param("password")  String hash);
}
