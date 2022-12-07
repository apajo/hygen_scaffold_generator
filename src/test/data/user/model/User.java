package ee.apajo.api.user.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import ee.apajo.api.user.enums.Role;
import lombok.*;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@Builder
public class User extends ee.apajo.api.tenant.model.AbstractTenant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Name is mandatory")
	@Size(min=2, max=32)
	private String name;

	@NotBlank(message = "Username is mandatory")
	@Size(min=2, max=32)
	@Column(unique=true)
	private String username;

	private String role = getUserRole().getRole().toString().toLowerCase();

	@Size(min=5, max=300)
	@JsonIgnore
	private String password;

	@Transient
	private List<GrantedAuthority> authorities;

	@NotBlank(message = "E-mail is mandatory")
	@Size(min=6, max=50)
	private String email;

	@ManyToOne
	@JoinColumn(name = "company", insertable = false, updatable = false, nullable = true)
	@ColumnDefault("")
	private Company company;

	@ManyToMany
	@JoinTable(
			name = "user__groups",
			joinColumns = @JoinColumn(
					name = "user_id", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(
					name = "group_id", referencedColumnName = "id"))

	private Collection<Group> groups;


	public User() {
	}

	public User(String username, List<GrantedAuthority> authorities) {
		this.username = username;
		this.authorities = authorities;

	}


	public static User create(String username, List<GrantedAuthority> authorities) {
		if (StringUtils.isBlank(username)) throw new IllegalArgumentException("Username is blank: " + username);
		return new User(username, authorities);
	}

	public Set<GrantedAuthority> getAuthorities() {
		UserRole role = this.getUserRole();
		Set<GrantedAuthority> authorities = new HashSet<>();
		authorities.add(new SimpleGrantedAuthority(role.getRole().authority()));
		return authorities;
	}

	public void setAuthorities(List<GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	public UserRole getUserRole() {
		return new UserRole(id, Role.USER);

	}
}